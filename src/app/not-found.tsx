import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { ChallengeSeal } from "@/components/branding/ChallengeSeal";
import { StickDivider } from "@/components/branding/StickDivider";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-black text-brand-ivory selection:bg-brand-gold selection:text-brand-black font-sans overflow-x-hidden">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative bg-architectural-grid">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-gold/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-2xl w-full text-center relative z-10 flex flex-col items-center">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <Badge variant="gold" size="md" pulse icon={<MoustacheIcon size={16} />}>
              404 — Elevation Not Found
            </Badge>
            <Badge variant="dark" size="md" icon={<CaneIcon size={16} />}>
              Stick Audit
            </Badge>
          </div>

          {/* Large Stylized 404 */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-serif text-7xl sm:text-9xl font-extrabold text-brand-ivory tracking-tighter">
              4
            </span>
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-brand-dark border-2 border-brand-gold flex items-center justify-center text-brand-gold shadow-[0_0_40px_rgba(200,169,81,0.3)] animate-pulse">
              <ChallengeSeal size="md" />
            </div>
            <span className="font-serif text-7xl sm:text-9xl font-extrabold text-brand-ivory tracking-tighter">
              4
            </span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-brand-ivory mb-3">
            FOUNDATION INTACT, BUT THIS PAGE IS MISSING.
          </h1>

          {/* Furqan Butt Persona Humorous Banner */}
          <div className="p-4 rounded-xl bg-brand-dark border border-brand-gold/40 text-xs sm:text-sm text-brand-gold font-serif italic mb-6 max-w-lg leading-relaxed shadow-lg">
            “Lagta hai yeh link kisi &lsquo;shapper&rsquo; contractor ki tarah site chhorh kar bhaag gaya! Hamari bunyaad solid hai, aao wapis sahi raaste pe chalein.”
          </div>

          <p className="text-xs sm:text-sm text-brand-muted max-w-md leading-relaxed mb-8">
            The link you followed may be broken or the blueprint has moved. Don&apos;t worry—our Grade 60 structural integrity remains 100% intact. Choose where you want to go:
          </p>

          {/* Quick Recovery Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg mb-8">
            <Link
              href="/"
              className="p-3.5 rounded-xl bg-gold-gradient text-brand-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Return To Homepage</span>
              <MoustacheIcon size={18} />
            </Link>

            <Link
              href="/projects"
              className="p-3.5 rounded-xl bg-brand-dark border border-brand-gold/50 text-brand-ivory hover:text-brand-gold text-xs font-semibold uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Explore Verified Projects</span>
              <span>🏗</span>
            </Link>

            <Link
              href="/#estimator"
              className="p-3.5 rounded-xl bg-brand-surface border border-brand-border text-brand-ivory hover:text-brand-gold text-xs font-semibold uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Construction Cost Estimator</span>
              <span>📐</span>
            </Link>

            <Link
              href="/services"
              className="p-3.5 rounded-xl bg-brand-surface border border-brand-border text-brand-ivory hover:text-brand-gold text-xs font-semibold uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2"
            >
              <span>View Construction Services</span>
              <span>❖</span>
            </Link>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-brand-muted">
            <Link href="/social" className="hover:text-brand-gold transition-colors">
              TikTok & Videos
            </Link>
            <span>•</span>
            <Link href="/faq" className="hover:text-brand-gold transition-colors">
              FAQs & Pricing
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-brand-gold transition-colors">
              Contact Desk
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
