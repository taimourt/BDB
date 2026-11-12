import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { LeadSubmissionPayload, LeadSubmissionResponse } from "@/types/leadTypes";
import { BRAND_INFO } from "@/data/brandData";

// Rate limiting in-memory store (simple sliding window per IP)
const ipSubmissionTracker = new Map<string, { count: number; lastSubmission: number }>();

function generateLeadId(): string {
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const randomChars = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `BDB-${dateStr}-${randomChars}`;
}

export async function POST(req: NextRequest) {
  try {
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    // 1. Rate Limiting Check (Max 5 submissions per 10 minutes per IP)
    const now = Date.now();
    const tracker = ipSubmissionTracker.get(clientIp);
    if (tracker) {
      if (now - tracker.lastSubmission < 600000) {
        if (tracker.count >= 5) {
          return NextResponse.json(
            {
              success: false,
              message: "Too many requests. Please wait a few minutes before submitting another enquiry, or contact us directly on WhatsApp.",
              errors: ["Rate limit exceeded."],
            },
            { status: 429 }
          );
        }
        tracker.count += 1;
        tracker.lastSubmission = now;
      } else {
        ipSubmissionTracker.set(clientIp, { count: 1, lastSubmission: now });
      }
    } else {
      ipSubmissionTracker.set(clientIp, { count: 1, lastSubmission: now });
    }

    const body = await req.json();

    // 2. Anti-Spam: Honeypot check
    // If hidden botTrapWebsite field is populated, a scraper or bot filled it out
    if (body.botTrapWebsite && body.botTrapWebsite.trim().length > 0) {
      console.warn(`[Anti-Spam] Bot detected via honeypot trap from IP: ${clientIp}`);
      return NextResponse.json(
        {
          success: false,
          message: "Spam submission rejected.",
          errors: ["Spam protection triggered."],
        },
        { status: 400 }
      );
    }

    // 3. Anti-Spam: Submission Timing check (Human users take > 2.5s to fill 4 steps)
    if (body.formLoadTimestamp && typeof body.formLoadTimestamp === "number") {
      const elapsedSeconds = (now - body.formLoadTimestamp) / 1000;
      if (elapsedSeconds < 2.5) {
        console.warn(`[Anti-Spam] Submission too fast (${elapsedSeconds}s) from IP: ${clientIp}`);
        return NextResponse.json(
          {
            success: false,
            message: "Automated submission rejected. Please take time to review your enquiry.",
            errors: ["Submission timing check failed."],
          },
          { status: 400 }
        );
      }
    }

    // 4. Server-Side Data Validation
    const errors: string[] = [];

    if (!body.fullName || typeof body.fullName !== "string" || body.fullName.trim().length < 2) {
      errors.push("Full name is required (minimum 2 characters).");
    }

    if (!body.phone || typeof body.phone !== "string" || body.phone.replace(/\D/g, "").length < 7) {
      errors.push("A valid telephone or WhatsApp number is required.");
    }

    if (!body.consentGiven || body.consentGiven !== true) {
      errors.push("Consent to be contacted regarding your construction enquiry is required.");
    }

    if (!body.serviceNeed) {
      errors.push("Please select your construction requirement in Step 1.");
    }

    if (errors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the highlighted form errors.",
          errors,
        },
        { status: 422 }
      );
    }

    // 5. Construct Normalized Payload
    const leadId = generateLeadId();
    const submittedAt = new Date().toISOString();

    const normalizedPayload: LeadSubmissionPayload = {
      leadId,
      submittedAt,
      serviceNeed: body.serviceNeed,
      serviceNeedCustom: body.serviceNeedCustom || "",
      city: body.city || "Islamabad",
      customCity: body.customCity || "",
      areaLocation: body.areaLocation || "",
      plotPreset: body.plotPreset || "1-kanal",
      isCustomDimensions: !!body.isCustomDimensions,
      customDimensions: body.customDimensions,
      constructionStage: body.constructionStage || "planning-design",
      approxCoveredAreaSqFt: body.approxCoveredAreaSqFt || "",
      budgetRange: body.budgetRange || "Not Specified",
      expectedStartDate: body.expectedStartDate || "Flexible",
      additionalRequirements: body.additionalRequirements || "",
      isOverseasClient: !!body.isOverseasClient,
      countryOfResidence: body.countryOfResidence || "Pakistan",
      fullName: body.fullName.trim(),
      countryCode: body.countryCode || "+92",
      phone: body.phone.trim(),
      email: body.email ? body.email.trim() : "",
      preferredContactMethod: body.preferredContactMethod || "whatsapp",
      consentGiven: true,
      estimatorSummary: body.estimatorSummary,
      formLoadTimestamp: body.formLoadTimestamp || now,
      clientMetadata: {
        sourceUrl: body.sourceUrl || req.headers.get("referer") || "/",
        referrer: req.headers.get("referer") || "direct",
        campaignParams: {
          utmSource: body.utmSource || "",
          utmMedium: body.utmMedium || "",
          utmCampaign: body.utmCampaign || "",
          utmTerm: body.utmTerm || "",
          utmContent: body.utmContent || "",
        },
        userAgent: req.headers.get("user-agent") || "unknown",
      },
      consentRecord: {
        consentGiven: true,
        consentStatement:
          "I authorize Black Diamond Builders engineering and sales desk to contact me regarding this construction enquiry.",
        timestamp: submittedAt,
      },
    };

    // 6. CRM Delivery Dispatch (GoHighLevel / Webhook / Development Mode)
    const ghlApiKey = process.env.GHL_API_KEY || process.env.CRM_API_KEY;
    const ghlLocationId = process.env.GHL_LOCATION_ID;
    const crmWebhookUrl = process.env.CRM_WEBHOOK_URL;

    let crmDeliveryStatus: LeadSubmissionResponse["crmDeliveryStatus"] = "simulated_development_mode";
    let crmDetails: LeadSubmissionResponse["crmDetails"] = undefined;

    if (ghlApiKey && ghlLocationId) {
      // Production GoHighLevel Integration
      try {
        const ghlResponse = await fetch("https://rest.gohighlevel.com/v1/contacts/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ghlApiKey}`,
          },
          body: JSON.stringify({
            name: normalizedPayload.fullName,
            phone: `${normalizedPayload.countryCode}${normalizedPayload.phone.replace(/^0+/, "")}`,
            email: normalizedPayload.email || undefined,
            tags: [
              "BlackDiamondBuilders",
              `Service-${normalizedPayload.serviceNeed}`,
              `Plot-${normalizedPayload.plotPreset}`,
              normalizedPayload.isOverseasClient ? "Overseas-Client" : "Domestic-Client",
            ],
            customField: {
              lead_id: leadId,
              city_area: `${normalizedPayload.city} - ${normalizedPayload.areaLocation}`,
              construction_stage: normalizedPayload.constructionStage,
              covered_area: normalizedPayload.approxCoveredAreaSqFt,
              budget_range: normalizedPayload.budgetRange,
              timeline: normalizedPayload.expectedStartDate,
              estimator_scope: normalizedPayload.estimatorSummary?.scopeLabel || "N/A",
              estimator_estimate: normalizedPayload.estimatorSummary?.formattedRange || "N/A",
              additional_notes: normalizedPayload.additionalRequirements,
            },
          }),
        });

        if (ghlResponse.ok) {
          const ghlData = await ghlResponse.json();
          crmDeliveryStatus = "delivered_gohighlevel";
          crmDetails = {
            contactId: ghlData?.contact?.id || "ghl_synced",
            note: "Successfully dispatched to GoHighLevel CRM.",
          };
        } else {
          console.error("[CRM Error] GoHighLevel API responded with status:", ghlResponse.status);
          crmDeliveryStatus = "delivery_failed";
          crmDetails = { note: `GoHighLevel API error: status ${ghlResponse.status}` };
        }
      } catch (err: any) {
        console.error("[CRM Error] GoHighLevel connection failed:", err.message);
        crmDeliveryStatus = "delivery_failed";
        crmDetails = { note: `GoHighLevel exception: ${err.message}` };
      }
    } else if (crmWebhookUrl) {
      // Production Generic CRM Webhook (Zapier, Make, HubSpot, Custom Webhook)
      try {
        const webhookResponse = await fetch(crmWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-BDB-Lead-Id": leadId,
            "X-BDB-Event": "lead.created",
          },
          body: JSON.stringify(normalizedPayload),
        });

        if (webhookResponse.ok) {
          crmDeliveryStatus = "delivered_webhook";
          crmDetails = { note: "Successfully dispatched to CRM webhook endpoint." };
        } else {
          crmDeliveryStatus = "delivery_failed";
          crmDetails = { note: `Webhook responded with status ${webhookResponse.status}` };
        }
      } catch (err: any) {
        console.error("[CRM Error] Webhook delivery failed:", err.message);
        crmDeliveryStatus = "delivery_failed";
        crmDetails = { note: `Webhook exception: ${err.message}` };
      }
    } else {
      // Working Development Mode: Record lead locally and log transparently
      crmDeliveryStatus = "simulated_development_mode";
      crmDetails = {
        note: "Development Mode Active: CRM credentials (GHL_API_KEY / CRM_WEBHOOK_URL) are not configured in environment. Lead payload securely logged locally.",
      };

      try {
        const storageDir = path.join(process.cwd(), "src", "data");
        const filePath = path.join(storageDir, "simulatedLeads.json");

        let existingLeads: any[] = [];
        if (fs.existsSync(filePath)) {
          try {
            const raw = fs.readFileSync(filePath, "utf-8");
            existingLeads = JSON.parse(raw);
          } catch {
            existingLeads = [];
          }
        }

        existingLeads.unshift(normalizedPayload);
        // Keep last 50 leads in local file
        if (existingLeads.length > 50) existingLeads = existingLeads.slice(0, 50);

        fs.writeFileSync(filePath, JSON.stringify(existingLeads, null, 2), "utf-8");
        console.log(`[Development Mode] Lead ${leadId} logged to src/data/simulatedLeads.json`);
      } catch (err: any) {
        console.warn("[Development Mode] Could not write to simulatedLeads.json:", err.message);
      }
    }

    // 7. Formulate Direct WhatsApp Escalation URL
    const quickSummary = `Assalam-o-Alaikum Black Diamond Builders, I have submitted an enquiry for ${normalizedPayload.serviceNeed} on my ${normalizedPayload.plotPreset} plot in ${normalizedPayload.city}. Lead Ref: ${leadId}. Please confirm receipt.`;
    const whatsappEscalationUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(quickSummary)}`;

    const responsePayload: LeadSubmissionResponse = {
      success: true,
      leadId,
      message:
        crmDeliveryStatus === "simulated_development_mode"
          ? "Your construction enquiry has been recorded in verified development mode. Furqan Butt's technical desk will review your specifications."
          : "Your construction enquiry has been registered directly into our engineering desk.",
      timestamp: submittedAt,
      crmDeliveryStatus,
      crmDetails,
      whatsappEscalationUrl,
    };

    return NextResponse.json(responsePayload, { status: 200 });
  } catch (error: any) {
    console.error("[Lead Submission Exception]:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "A server exception occurred while processing your enquiry. Please reach our senior desk directly on WhatsApp or phone.",
        errors: [error.message || "Internal server error"],
      },
      { status: 500 }
    );
  }
}
