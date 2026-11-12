"use client";

import React from "react";
import { SocialVideo } from "@/types/socialTypes";
import { CaneIcon } from "@/components/branding/CaneIcon";

interface VideoCardProps {
  video: SocialVideo;
  onPlay: (video: SocialVideo) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onPlay }) => {
  return (
    <article className="group flex flex-col justify-between rounded-2xl bg-brand-charcoal/80 border border-brand-border/60 hover:border-brand-gold/50 transition-all duration-300 overflow-hidden hover:shadow-[0_8px_30px_rgba(200,169,81,0.12)]">
      {/* Top Media Preview Area */}
      <div
        onClick={() => onPlay(video)}
        className="relative aspect-video w-full bg-gradient-to-br from-brand-surface via-brand-dark to-brand-charcoal overflow-hidden flex items-center justify-center cursor-pointer group/thumb"
      >
        {/* Abstract Architectural Background Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c8a951_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Brand Cane Watermark */}
        <div className="absolute top-3 right-3 opacity-30 group-hover:opacity-70 transition-opacity">
          <CaneIcon size={24} />
        </div>

        {/* Category & Platform Badges */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
          <span className="px-2.5 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wider bg-brand-black/80 text-brand-gold border border-brand-gold/30 backdrop-blur-sm">
            {video.category.replace(/-/g, " ")}
          </span>
          <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-[#fe2c55]/90 text-white font-bold shadow">
            TikTok
          </span>
        </div>

        {/* Center Play Button Overlay */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPlay(video);
          }}
          aria-label={`Watch video: ${video.title}`}
          className="relative z-10 w-14 h-14 rounded-full bg-brand-gold/90 hover:bg-brand-gold text-brand-black flex items-center justify-center shadow-xl group-hover/thumb:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-brand-gold/30 pl-1"
        >
          <span className="text-xl">▶</span>
        </button>

        {/* Duration / Date Footer on Media */}
        <div className="absolute bottom-2 right-3 z-10 flex items-center gap-2">
          {video.duration && (
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-brand-black/80 text-brand-ivory border border-white/10">
              {video.duration}
            </span>
          )}
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] text-brand-muted mb-2">
            <span className="font-mono text-brand-gold">{video.date}</span>
            <span className="truncate max-w-[150px]">{video.constructionTopic}</span>
          </div>

          <h3 className="text-sm sm:text-base font-serif font-bold text-brand-ivory group-hover:text-brand-gold-light transition-colors line-clamp-2 mb-2">
            {video.title}
          </h3>

          <p className="text-xs text-brand-muted line-clamp-3 leading-relaxed mb-4">
            {video.caption}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-brand-border/40 flex items-center justify-between gap-2">
          <button
            onClick={() => onPlay(video)}
            className="text-xs font-semibold text-brand-gold hover:text-brand-gold-light transition-colors flex items-center gap-1.5 focus:outline-none"
          >
            <span>Watch Details</span>
            <span>→</span>
          </button>

          <a
            href={video.serviceLeadCta.href}
            className="text-[11px] px-3 py-1.5 rounded-lg bg-brand-surface hover:bg-brand-surface/80 text-brand-ivory/90 hover:text-brand-ivory border border-brand-border transition-colors font-medium truncate"
          >
            {video.serviceLeadCta.label}
          </a>
        </div>
      </div>
    </article>
  );
};
