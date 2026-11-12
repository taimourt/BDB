import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { ChallengeSeal } from "@/components/branding/ChallengeSeal";
import { StickDivider } from "@/components/branding/StickDivider";
import { BRAND_INFO, CATCHPHRASES, OWNER_PERSONA, CHALLENGE_PROOF_TIERS } from "@/data/brandData";
import { SignatureCaneShowcase } from "@/components/interactive/SignatureCaneShowcase";

export const metadata: Metadata = {
  title: "About Furqan Butt & Black Diamond Builders | The Anti-Shapper Standard",
  description:
    "Meet Furqan Butt, the founder of Black Diamond Builders. Discover the philosophy behind his signature walking stick, the twirled moustache, and the challenge to all of Pakistan.",
  openGraph: {
    title: "About Furqan Butt — The Voice of Construction Accountability",
    description:
      "Behind the viral TikTok personality is a fearless commitment to structural engineering honesty across Islamabad and Rawalpindi.",
    type: "profile",
    url: "https://blackdiamondbuilders.pk/about",
  },
};

export default function AboutOwnerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-black text-brand-ivory selection:bg-brand-gold selection:text-brand-black font-sans overflow-x-hidden">
      <Header />

      <main className="flex-1 flex flex-col w-full">
        {/* Hero Section: The Man Behind The Challenge */}
        <section className="relative w-full py-20 lg:py-28 bg-brand-charcoal/50 border-b border-brand-border/60 overflow-hidden bg-architectural-grid">
          {/* Subtle gold atmospheric glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-brand-muted mb-8">
              <Link href="/" className="hover:text-brand-gold transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand-gold">About the Owner</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Story & Headline */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="gold" size="md" pulse icon={<MoustacheIcon size={16} />}>
                    Founder & CEO
                  </Badge>
                  <Badge variant="dark" size="md" icon={<CaneIcon size={16} />}>
                    The Stick Audit
                  </Badge>
                  <Badge variant="outline" size="md">
                    Twin Cities Corridor
                  </Badge>
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-ivory tracking-tight leading-[1.1]">
                  THE MAN. THE MISSION.{" "}
                  <span className="text-gold-gradient block sm:inline">
                    THE METHOD.
                  </span>
                </h1>

                <p className="font-serif italic text-xl sm:text-2xl text-brand-gold/90 border-l-2 border-brand-gold pl-4 py-1 leading-snug">
                  “{CATCHPHRASES.challenge}”
                </p>

                <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
                  In an industry plagued by evasive contractors, sugarcoated promises, and structural shortcuts, Furqan Butt created a viral transparency movement across Pakistan. He does not sit in detached corporate offices; he lives on the job sites where concrete is vibrated, rebar is tied, and foundations are cast.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="px-7 py-3.5 rounded-xl bg-gold-gradient text-brand-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-lg"
                  >
                    <span>Consult With Furqan Butt</span>
                    <MoustacheIcon size={18} />
                  </Link>
                  <Link
                    href="/social"
                    className="px-6 py-3.5 rounded-xl bg-brand-surface border border-brand-border text-brand-ivory hover:text-brand-gold hover:border-brand-gold text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
                  >
                    <span>Explore Social Media Hub</span>
                    <span>↗</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Persona Anchor Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl bg-gradient-to-b from-brand-charcoal via-brand-dark to-brand-black border-2 border-brand-gold/50 p-6 sm:p-8 shadow-2xl overflow-hidden group">
                  {/* Decorative Corner Flairs */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-bl-full pointer-events-none" />

                  {/* Authentic Photography Slot */}
                  <div className="w-full aspect-[4/5] rounded-xl bg-brand-surface border border-brand-border/80 flex flex-col items-center justify-between p-6 text-center relative overflow-hidden">
                    <div className="w-full flex items-center justify-between text-xs text-brand-muted font-mono">
                      <span>VERIFIED IDENTITY</span>
                      <span className="text-brand-gold">FURQAN BUTT</span>
                    </div>

                    <div className="flex flex-col items-center gap-4 my-auto">
                      <div className="w-24 h-24 rounded-full bg-brand-black border-2 border-brand-gold/80 flex items-center justify-center text-brand-gold shadow-[0_0_30px_rgba(200,169,81,0.2)]">
                        <ChallengeSeal size="md" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-serif text-xl font-bold text-brand-ivory">
                          Furqan Butt
                        </h3>
                        <p className="text-xs text-brand-gold font-mono uppercase tracking-wider">
                          The Voice of Construction Truth
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-brand-black/70 border border-brand-border text-[11px] text-brand-muted max-w-xs leading-relaxed">
                        [Authentic Photography Slot: Furqan Butt on Jobsite with Walking Stick & High-Vis PPE]
                      </div>
                    </div>

                    <div className="w-full pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-muted">
                      <span>Islamabad / Rawalpindi</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Active on Site
                      </span>
                    </div>
                  </div>

                  {/* Signature Quote Banner */}
                  <div className="mt-6 flex items-center justify-between p-4 rounded-xl bg-brand-black border border-brand-gold/30">
                    <div className="flex items-center gap-3">
                      <MoustacheIcon size={24} />
                      <div>
                        <div className="text-xs uppercase font-bold text-brand-gold tracking-widest">
                          Mooch Ko Tao
                        </div>
                        <div className="text-[11px] text-brand-muted">
                          Bunyaad Mein Sachai Ka Imaan
                        </div>
                      </div>
                    </div>
                    <CaneIcon size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Laser Plumb Stick Divider */}
        <StickDivider label="THE ANATOMY OF INTEGRITY • ZERO SHORTCUTS" />

        {/* Section 2: The Three Pillars of Furqan Butt's Identity */}
        <section className="w-full py-20 bg-brand-black relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
                The Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-ivory mt-2 mb-4">
                WHY HIS VOICE MATTERS TO PAKISTAN
              </h2>
              <p className="text-base text-brand-muted leading-relaxed">
                Building a house in Pakistan is often the largest financial commitment of a family&apos;s lifetime. Furqan Butt dismantles deceptive contractor practices through three non-negotiable principles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1: The Man */}
              <Card variant="dark" glow hoverEffect className="flex flex-col justify-between p-8">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold mb-6 shadow-md">
                    <MoustacheIcon size={32} />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-gold">
                    Pillar 01
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-brand-ivory mt-1 mb-3">
                    {OWNER_PERSONA.theMan.title}
                  </h3>
                  <p className="text-xs text-brand-gold font-medium mb-4">
                    {OWNER_PERSONA.theMan.tagline}
                  </p>
                  <p className="text-sm text-brand-muted leading-relaxed mb-6">
                    {OWNER_PERSONA.theMan.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/60">
                  <h4 className="text-xs uppercase font-bold text-brand-ivory tracking-wider mb-2">
                    Signature Traits:
                  </h4>
                  <ul className="flex flex-col gap-2 text-xs text-brand-muted">
                    {OWNER_PERSONA.theMan.signatureTraits.map((trait, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-brand-gold shrink-0">✓</span>
                        <span>{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              {/* Pillar 2: The Mission */}
              <Card variant="gold" glow hoverEffect className="flex flex-col justify-between p-8 border-brand-gold/60">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-brand-black border border-brand-gold flex items-center justify-center text-brand-gold mb-6 shadow-md">
                    <ChallengeSeal size="sm" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-gold">
                    Pillar 02
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-brand-ivory mt-1 mb-3">
                    {OWNER_PERSONA.theMission.title}
                  </h3>
                  <p className="text-xs text-brand-gold font-medium mb-4">
                    {OWNER_PERSONA.theMission.tagline}
                  </p>
                  <p className="text-sm text-brand-muted leading-relaxed mb-6">
                    {OWNER_PERSONA.theMission.bio}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-brand-black/60 border border-brand-gold/40 mb-6">
                  <p className="text-xs italic text-brand-ivory leading-relaxed">
                    “{OWNER_PERSONA.theMission.manifesto}”
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-gold/30">
                  <h4 className="text-xs uppercase font-bold text-brand-ivory tracking-wider mb-2">
                    Core Commitments:
                  </h4>
                  <ul className="flex flex-col gap-2 text-xs text-brand-muted">
                    {OWNER_PERSONA.theMission.keyCommitments.map((commit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-brand-gold shrink-0">❖</span>
                        <span>{commit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              {/* Pillar 3: The Method */}
              <Card variant="dark" glow hoverEffect className="flex flex-col justify-between p-8">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold mb-6 shadow-md">
                    <CaneIcon size={32} />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-gold">
                    Pillar 03
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-brand-ivory mt-1 mb-3">
                    {OWNER_PERSONA.theMethod.title}
                  </h3>
                  <p className="text-xs text-brand-gold font-medium mb-4">
                    {OWNER_PERSONA.theMethod.tagline}
                  </p>
                  <p className="text-sm text-brand-muted leading-relaxed mb-6">
                    {OWNER_PERSONA.theMethod.protocol}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/60">
                  <h4 className="text-xs uppercase font-bold text-brand-ivory tracking-wider mb-2">
                    Physical Audit Points:
                  </h4>
                  <ul className="flex flex-col gap-2 text-xs text-brand-muted">
                    {OWNER_PERSONA.theMethod.inspectionPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-brand-gold shrink-0">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 3: The Cultural Meaning of the Symbols */}
        <section className="w-full py-20 bg-brand-charcoal/30 border-y border-brand-border/60 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
                Symbols of Authenticity
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-ivory mt-2 mb-4">
                THE WALKING STICK & THE TWIRLED MOUSTACHE
              </h2>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                Many online influencers use props for entertainment. At Black Diamond Builders, every gesture is rooted in genuine Pakistani craftsmanship traditions and structural engineering accountability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Symbol 1: The Stick with Authentic Artifact Photo */}
              <div className="p-8 rounded-2xl bg-brand-dark border-2 border-brand-gold/60 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-brand-surface border border-brand-gold/40 text-brand-gold">
                      <CaneIcon size={36} />
                    </div>
                    <Badge variant="gold" size="sm">Authentic Jobsite Artifact</Badge>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-brand-ivory mb-2">
                    The Walking Stick (“Chhaddi”)
                  </h3>
                  <p className="text-xs text-brand-gold font-mono uppercase tracking-widest mb-4">
                    Ornate Handcrafted Brass & Sheesham Wood
                  </p>

                  {/* Photo of the cane embedded directly in card */}
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-5 border border-brand-gold/40 bg-brand-black group">
                    <img
                      src="/images/furqan-butt-cane.jpg"
                      alt="Furqan Butt's Authentic Ornate Brass Walking Stick"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-brand-black/90 border border-brand-gold/50 text-[10px] font-mono text-brand-gold">
                      Authentic Artifact: Furqan Butt&apos;s Cane
                    </div>
                  </div>

                  <p className="text-sm text-brand-muted leading-relaxed mb-4">
                    When corner-cutting contractors eyeball a crooked wall, they hide the tilt by applying 2 to 3 inches of wet plaster. Over time, that plaster pulls away from the brick, leaving hollow pockets that shear, crack, and drop off during tremors.
                  </p>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    Furqan Butt raps the solid brass knob of his stick against newly plastered surfaces. A solid wall resonates with a sharp, dull click; a hollow plaster void rings like an empty drum. If it sounds hollow, Furqan Butt orders the wall to be broken down and rebuilt from scratch.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border/60 text-xs text-brand-gold font-mono flex items-center gap-2">
                  <span>RULE:</span>
                  <span>If it rings hollow, it gets broken down. No compromises.</span>
                </div>
              </div>

              {/* Symbol 2: The Moustache Twirl */}
              <div className="p-8 rounded-2xl bg-brand-dark border border-brand-border flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-brand-surface border border-brand-gold/40 text-brand-gold">
                      <MoustacheIcon size={36} />
                    </div>
                    <Badge variant="gold" size="sm">Cultural Warranty</Badge>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-ivory mb-2">
                    The Moustache Twirl (“Mooch Ko Tao”)
                  </h3>
                  <p className="text-xs text-brand-gold font-mono uppercase tracking-widest mb-4">
                    Personal Honor Staked on Every Foundation
                  </p>
                  <p className="text-sm text-brand-muted leading-relaxed mb-4">
                    In traditional Pakistani culture, twirling one&apos;s moustache is the ultimate assertion of manhood, honor, and unshakeable self-confidence. But Furqan Butt redefines it with an engineering condition:
                  </p>
                  <blockquote className="p-4 rounded-xl bg-brand-black/80 border-l-2 border-brand-gold text-sm italic text-brand-ivory leading-relaxed mb-4">
                    “Mooch ko tao tabhi diya jata hai jab bunyaad mein sachai ho.” (You only earn the right to twirl your moustache when there is complete truth in the foundation.)
                  </blockquote>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    When you sign a contract with Black Diamond Builders, you do not deal with anonymous subcontractors. Furqan Butt stakes his personal face, family reputation, and public credibility on every single pour.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border/60 text-xs text-brand-gold font-mono flex items-center gap-2">
                  <span>WARRANTY:</span>
                  <span>Personal owner liability backed by documented mill test certificates.</span>
                </div>
              </div>
            </div>

            {/* Comprehensive Signature Cane Showcase Component */}
            <div className="mt-8">
              <SignatureCaneShowcase />
            </div>
          </div>
        </section>

        {/* Section 4: Verified Evidence Matrix */}
        <section className="w-full py-20 bg-brand-black relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
                The Proof
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-ivory mt-2 mb-4">
                HOW WE BACK CONFIDENCE WITH EVIDENCE
              </h2>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                Words are easy; concrete tests are hard. Here is how our on-site protocols compare against the shortcuts common in the Pakistani market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CHALLENGE_PROOF_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className="p-6 rounded-2xl bg-brand-dark/80 border border-brand-border hover:border-brand-gold/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-brand-gold uppercase tracking-wider">
                        {tier.title}
                      </span>
                      <Badge variant="gold" size="sm">{tier.metric}</Badge>
                    </div>

                    <div className="mb-4">
                      <div className="text-[11px] uppercase tracking-wider font-bold text-rose-400 mb-1 flex items-center gap-1.5">
                        <span>✕ Market Shortcut:</span>
                      </div>
                      <p className="text-xs text-brand-muted leading-relaxed">
                        {tier.marketShortcut}
                      </p>
                    </div>

                    <div>
                      <div className="text-[11px] uppercase tracking-wider font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                        <span>✓ Black Diamond Proof:</span>
                      </div>
                      <p className="text-xs text-brand-ivory leading-relaxed">
                        {tier.blackDiamondProof}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-brand-border/60 text-[11px] text-brand-gold font-mono flex items-center gap-2">
                    <CaneIcon size={16} />
                    <span>{tier.stickVerificationNote}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: The Overseas Expatriate Pledge */}
        <section className="w-full py-20 bg-gradient-to-b from-brand-charcoal to-brand-black border-t border-brand-border/60 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="p-8 sm:p-12 rounded-3xl bg-brand-dark/90 border-2 border-brand-gold/50 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="flex flex-col gap-4 text-center lg:text-left max-w-2xl">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Badge variant="gold" size="md">Overseas Expatriate Priority</Badge>
                  <span className="text-xs text-brand-muted">UK • USA • Gulf • Canada</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-brand-ivory">
                  “Aap Bahir Baitheingey, Aapka Ghar Mard Ban Kar Banayenge.”
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Working thousands of miles away should not mean worrying about contractor fraud, stolen steel, or fake invoices. Over 60% of our portfolio is built for overseas families. We provide unedited 4K WhatsApp walk-throughs, digital milestone invoicing, and laboratory test reports before every single concrete pour.
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-xs text-brand-ivory font-mono">
                  <span className="px-3 py-1.5 rounded-lg bg-brand-black border border-brand-border">
                    ✓ Escrow Milestones
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-brand-black border border-brand-border">
                    ✓ Uncut 4K Video Logs
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-brand-black border border-brand-border">
                    ✓ State Bank Compliant Banking
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0 w-full lg:w-auto">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl bg-gold-gradient text-brand-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all text-center flex items-center justify-center gap-2 shadow-xl"
                >
                  <span>Book Overseas Video Consultation</span>
                  <MoustacheIcon size={18} />
                </Link>
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Assalam-o-Alaikum%20Furqan%20Bhai%2C%20I%20am%20an%20Overseas%20Pakistani%20and%20would%20like%20to%20discuss%20building%20my%20home.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors text-center flex items-center justify-center gap-2"
                >
                  <span>Chat With Furqan Butt on WhatsApp</span>
                  <span>💬</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
