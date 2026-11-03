"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Download, X } from "lucide-react";
import { brand } from "@/lib/brand";

/** Shown in place of any download: this studio is view-only. */
export function MainSiteModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="main-site-title"
            initial={{ scale: 0.94, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[420px] rounded-3xl border border-cream/15 bg-panel p-7 text-cream shadow-[0_32px_80px_-20px_rgba(0,0,0,0.6)]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-cream/50 transition-colors hover:bg-cream/10 hover:text-cream"
            >
              <X size={16} />
            </button>

            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent-text)]">
              <Download size={20} />
            </span>
            <div className="mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--accent-text)]">
              View-only studio
            </div>
            <h2 id="main-site-title" className="m-0 mt-2 font-display text-[28px] font-medium leading-tight">
              Download on the main website
            </h2>
            <p className="m-0 mt-3 text-[14px] leading-relaxed text-cream/70">
              You can explore and customise every model here, but files can only be downloaded from the main
              website.
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href={brand.mainSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] py-3 text-[14px] font-medium text-white no-underline transition-transform hover:scale-[1.02]"
              >
                Go to main website
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-cream/20 py-3 text-[13.5px] text-cream/70 transition-colors hover:bg-cream/5 hover:text-cream"
              >
                Keep exploring
              </button>
            </div>
            <p className="m-0 mt-4 text-center font-mono text-[10.5px] text-cream/40">
              {brand.mainSiteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
