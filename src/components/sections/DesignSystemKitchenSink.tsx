"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { BrandLogo } from "@/components/branding/BrandLogo";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { ChallengeSeal } from "@/components/branding/ChallengeSeal";

export const DesignSystemKitchenSink: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="design-system" className="w-full py-16 bg-brand-charcoal/40 border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toggle Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-xl bg-brand-dark border border-brand-gold/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold">
              ❖
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-brand-ivory">
                Foundation Design System & UI Component Library
              </h3>
              <p className="text-xs text-brand-muted">
                Inspect atomic primitives: Buttons, Badges, Cards, Brand Seals, Form Controls, and Tokens.
              </p>
            </div>
          </div>

          <Button
            variant={isOpen ? "outline" : "gold"}
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Hide Component Library" : "Inspect All UI Components"}
          </Button>
        </div>

        {/* Expandable Kitchen Sink Content */}
        {isOpen && (
          <div className="mt-8 flex flex-col gap-10 animate-fadeIn">
            
            {/* 1. Brand Symbols & Seals */}
            <Card variant="glass" padding="lg">
              <h4 className="font-serif text-base uppercase tracking-widest text-brand-gold font-bold mb-6 pb-2 border-b border-brand-border">
                1. Bespoke Brand Symbols & Insignia
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                <div className="p-4 rounded bg-brand-black border border-brand-border flex flex-col items-center gap-3 text-center">
                  <BrandLogo size="md" />
                  <span className="text-[11px] text-brand-muted font-mono">BrandLogo.tsx</span>
                </div>

                <div className="p-4 rounded bg-brand-black border border-brand-border flex flex-col items-center gap-3 text-center">
                  <MoustacheIcon size={48} />
                  <span className="text-[11px] text-brand-muted font-mono">MoustacheIcon.tsx</span>
                  <span className="text-[10px] text-brand-gold font-bold">Mooch Ko Tao Guarantee</span>
                </div>

                <div className="p-4 rounded bg-brand-black border border-brand-border flex flex-col items-center gap-3 text-center">
                  <CaneIcon size={44} />
                  <span className="text-[11px] text-brand-muted font-mono">CaneIcon.tsx</span>
                  <span className="text-[10px] text-brand-gold font-bold">Inspector Cane Emblem</span>
                </div>

                <div className="p-4 rounded bg-brand-black border border-brand-border flex flex-col items-center gap-3 text-center">
                  <ChallengeSeal size="sm" />
                  <span className="text-[11px] text-brand-muted font-mono">ChallengeSeal.tsx</span>
                </div>
              </div>
            </Card>

            {/* 2. Button Primitives */}
            <Card variant="glass" padding="lg">
              <h4 className="font-serif text-base uppercase tracking-widest text-brand-gold font-bold mb-6 pb-2 border-b border-brand-border">
                2. Button Variants & States
              </h4>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="gold" size="md">
                  Gold Action
                </Button>
                <Button variant="outline" size="md">
                  Outline Neutral
                </Button>
                <Button variant="ghost" size="md">
                  Ghost Minimal
                </Button>
                <Button variant="challenge" size="md" rightIcon={<MoustacheIcon size={18} />}>
                  Mera Challenge
                </Button>
                <Button variant="danger" size="md">
                  Anti-Shapper Alert
                </Button>
                <Button variant="gold" size="md" isLoading>
                  Loading State
                </Button>
                <Button variant="gold" size="sm">
                  Small Button
                </Button>
                <Button variant="gold" size="lg">
                  Large VIP Button
                </Button>
              </div>
            </Card>

            {/* 3. Badge Primitives */}
            <Card variant="glass" padding="lg">
              <h4 className="font-serif text-base uppercase tracking-widest text-brand-gold font-bold mb-6 pb-2 border-b border-brand-border">
                3. Badges & Status Indicators
              </h4>
              <div className="flex flex-wrap gap-3 items-center">
                <Badge variant="gold" size="md" pulse>
                  Poore Pakistan Ko Challenge
                </Badge>
                <Badge variant="shapper" size="md">
                  Anti-Shapper Verified
                </Badge>
                <Badge variant="dark" size="md" icon={<CaneIcon size={16} />}>
                  Inspected with the Cane
                </Badge>
                <Badge variant="success" size="md">
                  Grade 60 Steel Certified
                </Badge>
                <Badge variant="outline" size="sm">
                  Rawalpindi / Islamabad
                </Badge>
              </div>
            </Card>

            {/* 4. Card Stylings */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="default" hasFacetedCorner padding="md">
                <span className="text-[11px] font-mono text-brand-gold block mb-2">Variant: default</span>
                <h5 className="font-serif text-lg font-bold text-brand-ivory mb-2">Architectural Card</h5>
                <p className="text-xs text-brand-muted">
                  Matte dark backdrop with faceted golden corner cutouts and subtle top border shimmer.
                </p>
              </Card>

              <Card variant="gold-rim" padding="md">
                <span className="text-[11px] font-mono text-brand-gold block mb-2">Variant: gold-rim</span>
                <h5 className="font-serif text-lg font-bold text-brand-ivory mb-2">Gold Rim Medallion</h5>
                <p className="text-xs text-brand-muted">
                  Warm charcoal surface gradient framed with fine metallic gold border reflections.
                </p>
              </Card>

              <Card variant="challenge" padding="md">
                <span className="text-[11px] font-mono text-brand-gold block mb-2">Variant: challenge</span>
                <h5 className="font-serif text-lg font-bold text-brand-ivory mb-2">Challenge Statement</h5>
                <p className="text-xs text-brand-muted">
                  High-contrast highlight container for viral quotes, guarantees, and critical notices.
                </p>
              </Card>
            </div>

            {/* 5. Form Controls Preview */}
            <Card variant="glass" padding="lg">
              <h4 className="font-serif text-base uppercase tracking-widest text-brand-gold font-bold mb-6 pb-2 border-b border-brand-border">
                5. Form Controls (Input, Select, Textarea)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Input
                  label="Sample Text Input"
                  placeholder="Enter plot location..."
                  helperText="Gold active focus ring and subtle charcoal background"
                />
                <Input
                  label="Error Validation State"
                  defaultValue="Invalid input value"
                  error="Please enter a valid Pakistani or International contact number"
                />
                <Select
                  label="Dropdown Select"
                  options={[
                    { value: "opt1", label: "Option 1: 1 Kanal Villa" },
                    { value: "opt2", label: "Option 2: 10 Marla Estate" },
                  ]}
                  helperText="Custom arrow icon with dark styling"
                />
              </div>
            </Card>

          </div>
        )}

      </div>
    </section>
  );
};
