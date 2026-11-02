"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Folder, Globe2, Layers } from "lucide-react";
import { ConnectStudioModal } from "@/components/ConnectStudioModal";

const ease = [0.22, 1, 0.36, 1] as const;

export function StudioHome({
  hasAccess = false,
  email = "",
  isPatron = false,
  patronFolders = [],
}: {
  hasAccess?: boolean;
  email?: string;
  isPatron?: boolean;
  patronFolders?: string[];
}) {
  const [connectModalOpen, setConnectModalOpen] = useState(!hasAccess);

  // One folder opens straight in the configurator; several get a chooser.
  const patronHref =
    patronFolders.length > 1
      ? "/studio/models?view=custom"
      : patronFolders.length === 1
        ? `/studio/configure?type=patron&location=${encodeURIComponent(patronFolders[0])}`
        : "/studio/configure?type=patron";

  return (
    <div className="mx-auto w-full max-w-[1000px] px-6 py-14 md:py-20">
      <ConnectStudioModal
        isOpen={connectModalOpen}
        onClose={() => setConnectModalOpen(false)}
        email={email}
      />

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease }}
        className="m-0 mb-8 font-display text-[40px] font-normal leading-[1.03] md:text-[52px]"
      >
        Studio
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease, delay: 0.05 }}
        className="grid grid-cols-1 gap-[14px] md:grid-cols-[1.6fr_1fr]"
      >
        {/* Curated — the main path */}
        <Link
          href="/studio/models"
          className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-2xl border border-[var(--accent)]/50 p-7 text-cream no-underline transition-colors duration-300 hover:border-[var(--accent)]"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-[1.04]"
            style={{ backgroundImage: "url(/hero-city.jpg)" }}
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          <div className="relative">
            <span
              className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full"
              style={{ background: "var(--accent)", color: "#000" }}
            >
              <Layers size={18} />
            </span>
            <div className="font-display text-[30px] font-medium leading-tight text-white">Curated</div>
            <div className="mt-1 flex items-center justify-between gap-4 text-[14px] text-white/70">
              <span>Hand-modelled for high detail and better prints.</span>
              <ArrowRight
                size={18}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: "var(--accent)" }}
              />
            </div>
          </div>
        </Link>

        <div className="flex flex-col gap-[14px]">
          {/* Custom — any place on the map */}
          <Link
            href="/studio/explore"
            className="group flex flex-1 flex-col justify-end rounded-2xl border border-cream/[0.14] bg-panel p-7 text-cream no-underline transition-colors duration-300 hover:border-cream/40"
          >
            <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80">
              <Globe2 size={18} />
            </span>
            <div className="flex items-center gap-2.5">
              <span className="font-display text-[26px] font-medium leading-tight">Custom</span>
              <span
                className="rounded-full border px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em]"
                style={{ color: "var(--accent)", borderColor: "rgba(var(--accent-rgb), 0.45)" }}
              >
                Beta
              </span>
            </div>
            <div className="mt-1 flex items-center justify-between gap-4 text-[14px] text-cream/55">
              <span>Any place on the map, generated from open data.</span>
              <ArrowRight
                size={18}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: "var(--accent)" }}
              />
            </div>
          </Link>

          {isPatron && (
            <Link
              href={patronHref}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-cream/[0.14] bg-panel px-7 py-5 text-cream no-underline transition-colors duration-300 hover:border-cream/40"
            >
              <span className="flex items-center gap-3">
                <Folder size={17} style={{ color: "var(--accent)" }} />
                <span className="text-[15px]">Your patron models</span>
              </span>
              <ArrowRight
                size={18}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: "var(--accent)" }}
              />
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
}
