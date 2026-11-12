import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { ChallengeSeal } from "@/components/branding/ChallengeSeal";
import { BRAND_INFO } from "@/data/brandData";

export const metadata: Metadata = {
  title: "Privacy Policy | Black Diamond Builders",
  description:
    "Review Black Diamond Builders' privacy policy, data collection standards, WhatsApp communication governance, and overseas client data security protocols.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-black text-brand-ivory selection:bg-brand-gold selection:text-brand-black font-sans overflow-x-hidden">
      <Header />

      <main className="flex-1 flex flex-col w-full">
        {/* Editorial Policy Hero */}
        <section className="relative w-full py-16 lg:py-20 bg-brand-charcoal/40 border-b border-brand-border/60 overflow-hidden bg-architectural-grid">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-brand-muted mb-6">
              <Link href="/" className="hover:text-brand-gold transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand-gold">Privacy Policy</span>
            </div>

            <Badge variant="gold" size="sm" className="mb-4">
              Legal & Operational Template
            </Badge>

            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-brand-ivory tracking-tight mb-4">
              PRIVACY POLICY
            </h1>

            <p className="text-xs sm:text-sm text-brand-muted max-w-xl leading-relaxed">
              Last Updated: October 2026. This operational policy governs personal data, architectural project details, and communication records handled by Black Diamond Builders.
            </p>
          </div>
        </section>

        {/* Legal Review Advisory Notice */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="p-4 sm:p-5 rounded-2xl bg-brand-dark/90 border border-brand-gold/40 flex items-start gap-4">
            <div className="p-2 rounded-lg bg-brand-surface border border-brand-gold/40 text-brand-gold shrink-0 mt-0.5">
              <ChallengeSeal size="sm" />
            </div>
            <div className="text-xs text-brand-muted leading-relaxed">
              <span className="font-bold text-brand-gold uppercase tracking-wider block mb-1">
                Notice for Legal Counsel Review:
              </span>
              This privacy policy document serves as a comprehensive operational baseline reflecting Black Diamond Builders&apos; actual data workflows (inbound project enquiry forms, interactive cost estimator logs, WhatsApp video audits, and overseas escrow tracking). Prior to formal commercial filing, this document can be customized against active CRM integrations and corporate legal counsel recommendations.
            </div>
          </div>
        </div>

        {/* Policy Body */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-sm text-brand-muted leading-relaxed space-y-10">
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-ivory">
              1. Introduction & Corporate Scope
            </h2>
            <p>
              Black Diamond Builders (&ldquo;BDB&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), led by founder Furqan Butt, operates across the Islamabad and Rawalpindi corridors of Pakistan. We are committed to safeguarding the privacy and commercial confidentiality of our prospective clients, plot owners, and overseas expatriate families who interact with our website (<span className="text-brand-gold">https://blackdiamondbuilders.pk</span>) and direct engineering desks.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-ivory">
              2. Information We Collect
            </h2>
            <p>
              When you submit a project enquiry, use our Construction Cost Estimator, submit a question to the &ldquo;Ask the Builder&rdquo; desk, or engage our team via WhatsApp, we collect the following categories of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm">
              <li>
                <strong className="text-brand-ivory">Contact Identifiers:</strong> Your full name, telephone / WhatsApp number (with international dialling codes, e.g., +92, +44, +1), and email address.
              </li>
              <li>
                <strong className="text-brand-ivory">Project & Plot Data:</strong> Target city (Islamabad, Rawalpindi, Wah Cantt), housing society / sector (e.g., DHA Phase 2, Bahria Town, B-17, Kohistan Enclave), plot dimensions, covered area requirements, and preliminary budget expectations.
              </li>
              <li>
                <strong className="text-brand-ivory">Architectural & Engineering Documents:</strong> Any CAD blueprints, structural drawings, soil test reports, or site photographs you choose to transmit for engineering review.
              </li>
              <li>
                <strong className="text-brand-ivory">Technical & Navigation Metadata:</strong> Anonymized browser identifiers, operating system, timestamp logs, and anti-spam submission timing data used exclusively to safeguard our server endpoints from malicious bots.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-ivory">
              3. Purpose of Data Processing
            </h2>
            <p>
              We process your personal and project information strictly for legitimate commercial and engineering purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm">
              <li>Formulating accurate preliminary cost calculations and line-item Bills of Quantities (BOQ).</li>
              <li>Scheduling physical on-site soil surveys and structural stick audits with Furqan Butt and our engineers.</li>
              <li>Providing uncut 4K video walkthrough updates, milestone logs, and laboratory test reports for Overseas Pakistani clients.</li>
              <li>Moderating and publishing technical construction answers on our Social Content Hub (with personal identifying contact numbers withheld).</li>
              <li>Preventing automated spam abuse through client-side honeypots and velocity validation.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-ivory">
              4. Third-Party Integrations & Data Sharing
            </h2>
            <p>
              <strong className="text-brand-gold">We do not sell, rent, or monetize your personal data under any circumstances.</strong> Data is shared only with trusted infrastructure providers essential to our operations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm">
              <li>
                <strong className="text-brand-ivory">WhatsApp / Meta Platforms:</strong> Direct end-to-end encrypted messaging used for instant site photos, drawing transmission, and scheduled video conferences.
              </li>
              <li>
                <strong className="text-brand-ivory">CRM & Lead Storage:</strong> Secure internal databases managing project milestones and escrow agreements.
              </li>
              <li>
                <strong className="text-brand-ivory">Authorized Housing Authorities:</strong> If contracted for municipal approvals, submission drawing sets bearing client names are submitted to DHA, Bahria Town, CDA, or RDA per statutory requirements.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-ivory">
              5. Protections for Overseas Expatriates
            </h2>
            <p>
              Recognizing that a significant portion of Black Diamond Builders&apos; clientele resides abroad (in the United Kingdom, United States, European Union, and Gulf Cooperation Council states), we implement elevated security protocols:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm">
              <li>All remittance documentation and Proceed Realization Certificates (PRCs) are handled in accordance with State Bank of Pakistan banking security guidelines.</li>
              <li>Expatriate clients governed by the UK/EU General Data Protection Regulation (GDPR) may exercise their rights to request access, rectification, or complete erasure of their stored inquiry records.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-ivory">
              6. Data Retention & Security
            </h2>
            <p>
              Project dossiers, structural calculation sheets, and mill test certificates are retained for a minimum of ten (10) years following construction completion to uphold our structural warranty commitments. Preliminary inquiries that do not proceed to contract are archived securely and purged periodically.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-ivory">
              7. Privacy Officer Contact Details
            </h2>
            <p>
              If you have any questions regarding your personal data, wish to update your contact preferences, or request data deletion, contact our administrative desk:
            </p>
            <div className="p-4 rounded-xl bg-brand-dark border border-brand-border text-xs font-mono space-y-1">
              <div><strong className="text-brand-ivory">Entity:</strong> Black Diamond Builders</div>
              <div><strong className="text-brand-ivory">Email:</strong> {BRAND_INFO.emailContact}</div>
              <div><strong className="text-brand-ivory">Head Office:</strong> {BRAND_INFO.headquarters}</div>
              <div><strong className="text-brand-ivory">Direct WhatsApp:</strong> Official Engineering Line</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
