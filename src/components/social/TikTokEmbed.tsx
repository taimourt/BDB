"use client";

import React, { useEffect, useRef, useState } from "react";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { BRAND_INFO } from "@/data/brandData";

interface TikTokEmbedProps {
  type?: "creator" | "video";
  videoId?: string;
  videoUrl?: string;
  creatorHandle?: string;
  maxWidth?: number | string;
  minHeight?: number | string;
  className?: string;
  caption?: string;
  title?: string;
}

export const TikTokEmbed: React.FC<TikTokEmbedProps> = ({
  type = "creator",
  videoId,
  videoUrl,
  creatorHandle = "blackdiamondbuilders",
  maxWidth = 720,
  minHeight = 580,
  className = "",
  caption,
  title,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  // Normalize handle
  const cleanHandle = creatorHandle.replace(/^@/, "");
  const targetUrl = videoUrl || (videoId ? `https://www.tiktok.com/@${cleanHandle}/video/${videoId}` : `https://www.tiktok.com/@${cleanHandle}`);
  const isVideo = type === "video" || Boolean(videoId);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setLoadError(false);

    // Timeout to detect if TikTok script or embed is blocked (e.g. by adblockers, ISP firewall, or offline)
    const timeoutTimer = setTimeout(() => {
      if (isMounted) {
        setIsLoading(false);
      }
    }, 4500);

    const loadTikTokScript = () => {
      const existingScript = document.getElementById("tiktok-embed-script") as HTMLScriptElement;

      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "tiktok-embed-script";
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        script.onload = () => {
          if (isMounted) {
            setIsLoading(false);
          }
        };
        script.onerror = () => {
          if (isMounted) {
            setLoadError(true);
            setIsLoading(false);
          }
        };
        document.body.appendChild(script);
      } else {
        // If script is already in document, re-trigger TikTok's mounting
        try {
          const win = window as unknown as { tiktokEmbed?: { load?: () => void } };
          if (win.tiktokEmbed && typeof win.tiktokEmbed.load === "function") {
            win.tiktokEmbed.load();
          }
        } catch {
          // Fallback silently
        }
        setIsLoading(false);
      }
    };

    // Load after component mounts in DOM
    const timer = setTimeout(loadTikTokScript, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      clearTimeout(timeoutTimer);
    };
  }, [type, videoId, videoUrl, cleanHandle]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full mx-auto flex flex-col items-center justify-center ${className}`}
      style={{ maxWidth }}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div
          className="w-full rounded-2xl bg-brand-charcoal/90 border border-brand-gold/30 p-8 flex flex-col items-center justify-center text-center animate-pulse transition-opacity"
          style={{ minHeight }}
        >
          <div className="w-16 h-16 rounded-full bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold mb-4 shadow-[0_0_20px_rgba(200,169,81,0.2)]">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.48c1.64-1.63 2.18-3.92 2.18-6.16V8.14a8.16 8.16 0 0 0 4.85 1.57v-3.4a4.85 4.85 0 0 1-1.26.38z" />
            </svg>
          </div>
          <span className="font-serif text-brand-ivory font-bold text-base mb-1">
            Loading Live TikTok Feed...
          </span>
          <span className="text-xs font-mono text-brand-gold mb-4">
            @{cleanHandle}
          </span>
          <div className="flex items-center gap-2 text-xs text-brand-muted">
            <CaneIcon size={16} />
            <span>Connecting to official jobsite walkthroughs</span>
          </div>
        </div>
      )}

      {/* Embed Container */}
      <div className={`w-full flex justify-center ${isLoading ? "hidden" : "block"}`}>
        {isVideo ? (
          <blockquote
            className="tiktok-embed"
            cite={targetUrl}
            data-video-id={videoId}
            style={{ maxWidth: "605px", minWidth: "320px", width: "100%", margin: "0 auto" }}
          >
            <section>
              <a
                target="_blank"
                rel="noopener noreferrer"
                title={`@${cleanHandle}`}
                href={`https://www.tiktok.com/@${cleanHandle}?refer=embed`}
              >
                @{cleanHandle}
              </a>
              {title && <p>{title}</p>}
              {caption && <p>{caption}</p>}
            </section>
          </blockquote>
        ) : (
          <blockquote
            className="tiktok-embed"
            cite={`https://www.tiktok.com/@${cleanHandle}`}
            data-unique-id={cleanHandle}
            data-embed-from="oembed"
            data-embed-type="creator"
            style={{ maxWidth: "780px", minWidth: "288px", width: "100%", margin: "0 auto" }}
          >
            <section>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.tiktok.com/@${cleanHandle}?refer=creator_embed`}
              >
                @{cleanHandle}
              </a>
            </section>
          </blockquote>
        )}
      </div>

      {/* Fallback / Direct Link Bar (always available for reliability) */}
      <div className="w-full mt-4 pt-4 border-t border-brand-border/40 flex flex-wrap items-center justify-between gap-3 text-xs text-brand-muted px-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-brand-ivory font-medium">
            Official Channel: @{cleanHandle}
          </span>
          <span className="hidden sm:inline text-brand-gold font-mono">
            • 171K+ Followers • 6.1M+ Likes
          </span>
        </div>

        <a
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-surface hover:bg-brand-surface/80 border border-brand-border hover:border-brand-gold text-brand-gold font-semibold transition-all shadow-sm"
        >
          <span>Open on TikTok</span>
          <span className="text-xs">↗</span>
        </a>
      </div>

      {/* Offline/Blocked Banner if script errors out */}
      {loadError && (
        <div className="mt-4 p-4 rounded-xl bg-brand-charcoal/80 border border-amber-500/40 text-center max-w-md mx-auto">
          <p className="text-xs text-brand-ivory font-medium mb-2">
            TikTok player preview is blocked by your browser privacy settings or network.
          </p>
          <a
            href={BRAND_INFO.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-lg bg-brand-gold text-brand-black text-xs font-semibold uppercase tracking-wider hover:brightness-110 transition-all"
          >
            Watch directly on TikTok (@{cleanHandle}) ↗
          </a>
        </div>
      )}
    </div>
  );
};
