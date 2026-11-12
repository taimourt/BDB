"use client";

import React, { useEffect, useState } from "react";
import { SocialVideo } from "@/types/socialTypes";
import { TikTokEmbed } from "./TikTokEmbed";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";

interface VideoModalProps {
  video: SocialVideo | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (video) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [video, onClose]);

  if (!video) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(video.videoUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-brand-dark border-2 border-brand-gold/50 rounded-3xl p-6 sm:p-8 shadow-2xl text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-brand-border">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-brand-gold/20 text-brand-gold border border-brand-gold/30">
                {video.category.replace(/-/g, " ")}
              </span>
              <span className="text-[10px] font-mono text-brand-muted bg-brand-surface px-2 py-0.5 rounded">
                🎵 Official TikTok Reel
              </span>
            </div>
            <h2 id="video-modal-title" className="text-lg sm:text-xl font-serif font-bold text-brand-ivory leading-snug">
              {video.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close video player"
            className="p-2 text-brand-muted hover:text-brand-ivory rounded-lg hover:bg-brand-surface transition-colors shrink-0 text-lg"
          >
            ✕
          </button>
        </div>

        {/* Live TikTok Interactive Player */}
        <div className="my-6">
          <TikTokEmbed
            type="video"
            videoUrl={video.videoUrl}
            videoId={video.id.startsWith("vid-") ? undefined : video.id}
            title={video.title}
            caption={video.caption}
            maxWidth={540}
            minHeight={420}
          />
        </div>

        {/* Video Narrative & Engineering Standard */}
        <div className="p-4 rounded-xl bg-brand-charcoal/70 border border-brand-border/60 mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-gold mb-1.5">
            <MoustacheIcon size={18} />
            <span>Furqan Butt&apos;s Engineering Audit Note</span>
          </div>
          <p className="text-xs text-brand-muted leading-relaxed">
            {video.caption}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-brand-border">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-black font-semibold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <span>Watch on TikTok</span>
              <span>↗</span>
            </a>

            <button
              onClick={handleCopy}
              className="px-3 py-2.5 rounded-xl bg-brand-surface hover:bg-brand-surface/80 border border-brand-border text-brand-ivory text-xs transition-colors"
              aria-label="Copy video URL"
            >
              {copied ? "✓ Copied" : "📋 Share"}
            </button>
          </div>

          <a
            href={video.serviceLeadCta.href}
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-brand-surface hover:bg-brand-surface/80 text-brand-ivory border border-brand-border font-medium text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5"
          >
            <CaneIcon size={14} />
            <span>{video.serviceLeadCta.label}</span>
          </a>
        </div>

        {/* Topic Footer */}
        <div className="mt-4 pt-3 flex flex-wrap items-center justify-between text-[11px] text-brand-muted gap-2 border-t border-brand-border/40 font-mono">
          <span>Standard: <strong className="text-brand-ivory">{video.constructionTopic}</strong></span>
          <span>{video.date} {video.duration && `• ${video.duration}`}</span>
        </div>
      </div>
    </div>
  );
};
