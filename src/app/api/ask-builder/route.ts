import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { AskBuilderQuestion } from "@/types/socialTypes";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Anti-Spam: Honeypot trap check
    if (body.botTrapWebsite && String(body.botTrapWebsite).trim().length > 0) {
      console.warn("[Anti-Spam] Question rejected via bot honeypot.");
      return NextResponse.json(
        { success: false, message: "Spam query rejected." },
        { status: 400 }
      );
    }

    // 2. Anti-Spam: Submission timing check
    if (body.formLoadTimestamp && typeof body.formLoadTimestamp === "number") {
      const elapsedSeconds = (Date.now() - body.formLoadTimestamp) / 1000;
      if (elapsedSeconds < 2.0) {
        return NextResponse.json(
          {
            success: false,
            message: "Submission too fast. Please take time to formulate your question.",
          },
          { status: 400 }
        );
      }
    }

    // 3. Validation
    const errors: string[] = [];
    if (!body.question || typeof body.question !== "string" || body.question.trim().length < 10) {
      errors.push("Please provide a detailed question (minimum 10 characters).");
    }

    if (!body.askerName || typeof body.askerName !== "string" || body.askerName.trim().length < 2) {
      errors.push("Your name or initial is required (minimum 2 characters).");
    }

    if (errors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete the required fields.",
          errors,
        },
        { status: 422 }
      );
    }

    // 4. Construct Moderated Entry
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const questionId = `Q-${dateStr}-${randomSuffix}`;
    const submittedAt = new Date().toISOString();

    const newQuestion: AskBuilderQuestion = {
      id: questionId,
      question: body.question.trim(),
      askerName: body.askerName.trim(),
      city: body.city && typeof body.city === "string" ? body.city.trim() : "Pakistan",
      status: "pending_moderation", // Strict moderation requirement
      submittedAt,
      constructionTopic:
        body.constructionTopic && typeof body.constructionTopic === "string"
          ? body.constructionTopic.trim()
          : "General Construction Audit",
    };

    // 5. Store in Moderation JSON
    try {
      const filePath = path.join(process.cwd(), "src", "data", "moderationQuestions.json");
      let questions: AskBuilderQuestion[] = [];
      if (fs.existsSync(filePath)) {
        try {
          const raw = fs.readFileSync(filePath, "utf-8");
          questions = JSON.parse(raw);
        } catch {
          questions = [];
        }
      }

      questions.unshift(newQuestion);
      // Keep up to 100 records
      if (questions.length > 100) questions = questions.slice(0, 100);

      fs.writeFileSync(filePath, JSON.stringify(questions, null, 2), "utf-8");
      console.log(`[Ask Builder] New question ${questionId} saved with status: pending_moderation`);
    } catch (fsErr: any) {
      console.warn("[Ask Builder] File write warning:", fsErr.message);
    }

    return NextResponse.json(
      {
        success: true,
        questionId,
        message:
          "Your question has been securely submitted to Furqan Butt's desk for engineering moderation. Verified questions are addressed on site in upcoming video reels.",
        status: "pending_moderation",
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("[Ask Builder Exception]:", err);
    return NextResponse.json(
      { success: false, message: "A server error occurred. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "moderationQuestions.json");
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ questions: [] }, { status: 200 });
    }
    const raw = fs.readFileSync(filePath, "utf-8");
    const questions: AskBuilderQuestion[] = JSON.parse(raw);
    // Only return published questions to the public
    const published = questions.filter((q) => q.status === "published");
    return NextResponse.json({ questions: published }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
