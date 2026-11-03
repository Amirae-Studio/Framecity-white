"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Box, Folder, Globe2, Layers, MapPin, UserRound } from "lucide-react";
import { ConnectStudioModal } from "@/components/ConnectStudioModal";
import { StudioShell } from "@/components/studio/StudioShell";
import { brand } from "@/lib/brand";

const ease = [0.22, 1, 0.36, 1] as const;

// Street grid for the decorative map card — a handful of crooked lines.
const streets = [
  "M0 30 L60 42 L120 34 L190 50 L260 40",
  "M0 80 L50 74 L110 90 L170 82 L260 96",
  "M0 130 L70 122 L140 138 L200 128 L260 140",
  "M30 0 L40 50 L28 100 L44 160",
  "M95 0 L88 60 L104 120 L92 160",
  "M160 0 L170 46 L156 104 L168 160",
  "M220 0 L212 52 L228 110 L216 160",
  "M60 42 L110 90 M140 138 L190 50 M200 128 L228 110",
];

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

  const startHere = [
    { href: "/studio/models", image: "/hero-city.jpg", title: "Curated cities", meta: "Hand-modelled · high detail" },
    { href: "/studio/explore", image: "/studio/golden-skyline.webp", title: "Anywhere on the map", meta: "Open map data · Beta" },
    ...(isPatron
      ? [{ href: patronHref, image: "/studio/dusk-skyline.webp", title: "Your patron models", meta: "Private uploads" }]
      : []),
  ];

  return (
    <StudioShell email={email}>
      <ConnectStudioModal
        isOpen={connectModalOpen}
        onClose={() => setConnectModalOpen(false)}
        email={email}
      />

      <div className="grid flex-1 grid-cols-1 gap-5 px-4 pb-4 pt-8 md:grid-cols-[minmax(0,400px)_1fr_minmax(0,300px)] md:grid-rows-[1fr_auto] md:px-8 md:pb-8 md:pt-10">
        {/* Left — title and the list of ways in */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col gap-7"
        >
          <div>
            <div className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-cream/70">
              {brand.name} Studio
            </div>
            <h1 className="m-0 mt-2 font-display text-[60px] font-normal leading-[0.95] tracking-[-0.01em] md:text-[92px]">
              Your <em className="text-glow font-normal">City</em>
            </h1>
            <div className="mt-3 flex items-center gap-2 text-[16px] text-cream/85">
              <MapPin size={17} strokeWidth={1.6} />
              Anywhere on Earth
            </div>
            <p className="mt-4 max-w-[340px] text-[15px] leading-relaxed text-cream/75">{brand.tagline}</p>
          </div>

          <div className="glass rounded-3xl p-4 md:p-5">
            <div className="mb-3 flex items-center justify-between px-1">
              <span className="text-[16px] font-medium">Start here</span>
              <Link href="/studio/models" className="text-[12px] text-cream/60 no-underline hover:text-cream">
                View all
              </Link>
            </div>
            <ul className="m-0 flex list-none flex-col gap-1 p-0">
              {startHere.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-4 rounded-2xl p-2 text-cream no-underline transition-colors hover:bg-white/[0.06]"
                  >
                    <span className="relative h-[68px] w-[96px] shrink-0 overflow-hidden rounded-xl ring-1 ring-white/15">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="96px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[15px] leading-snug">{item.title}</span>
                      <span className="mt-1 block text-[12.5px] text-cream/55">{item.meta}</span>
                    </span>
                    <ArrowRight
                      size={16}
                      className="shrink-0 text-cream/40 transition-all group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Centre stays clear so the city shows through */}
        <div aria-hidden className="hidden md:block" />

        {/* Right — print card and map card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="flex flex-col gap-5"
        >
          <div className="glass rounded-3xl p-5">
            <div className="flex items-center justify-between text-[14px] text-cream/80">
              Print ready
              <ArrowUpRight size={15} className="text-cream/50" />
            </div>
            <div className="mt-4 flex items-center gap-4">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-2xl text-[var(--accent)]"
                style={{ filter: "drop-shadow(0 0 10px var(--glow))" }}
              >
                <Box size={38} strokeWidth={1.2} />
              </span>
              <div>
                <div className="font-display text-[40px] leading-none">.3mf</div>
                <div className="mt-1.5 text-[13px] text-cream/70">Layers kept separate</div>
              </div>
            </div>
            <div className="mt-3 text-[12.5px] text-cream/55">Ready for multi-colour printing</div>
          </div>

          <Link href="/studio/explore" className="glass group block overflow-hidden rounded-3xl p-5 text-cream no-underline">
            <div className="flex items-center justify-between text-[14px] text-cream/80">
              Explore map
              <ArrowUpRight
                size={15}
                className="text-cream/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>
            <div className="relative mt-4 overflow-hidden rounded-2xl bg-black/25 ring-1 ring-white/10">
              <svg viewBox="0 0 260 160" className="block h-auto w-full" aria-hidden>
                <g stroke="rgba(var(--ink-rgb),0.22)" strokeWidth="1" fill="none">
                  {streets.map((d) => (
                    <path key={d} d={d} />
                  ))}
                </g>
                <path
                  d="M58 118 C 90 112, 96 82, 128 80 S 170 60, 196 46"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  style={{ filter: "drop-shadow(0 0 5px var(--accent))" }}
                />
                <circle cx="58" cy="118" r="5" fill="#7cc4ff" style={{ filter: "drop-shadow(0 0 6px #7cc4ff)" }} />
                <path
                  d="M196 22 C186 22 180 29 180 37 C180 48 196 60 196 60 C196 60 212 48 212 37 C212 29 206 22 196 22 Z"
                  fill="var(--accent)"
                  style={{ filter: "drop-shadow(0 0 8px var(--accent))" }}
                />
                <circle cx="196" cy="37" r="5" fill="#fff" />
              </svg>
            </div>
            <div className="mt-3 text-[12.5px] text-cream/55">Draw a frame over any place and build it in 3D.</div>
          </Link>
        </motion.div>

        {/* Bottom — glass tiles, with the main action lit up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="grid grid-cols-2 gap-3 md:col-span-3 md:grid-cols-4 md:gap-4"
        >
          <Tile href="/studio/models" icon={<Layers size={24} strokeWidth={1.5} />} title="Curated" sub="Hand-modelled" />
          <Tile href="/studio/explore" icon={<Globe2 size={24} strokeWidth={1.5} />} title="Any place" sub="Open map data" />
          <Link
            href="/studio/models"
            className="glass-glow group col-span-2 flex items-center justify-center gap-3 rounded-3xl px-6 py-6 text-[19px] font-medium no-underline md:col-span-1 md:text-[21px]"
          >
            Start designing
            <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          {isPatron ? (
            <Tile href={patronHref} icon={<Folder size={24} strokeWidth={1.5} />} title="Patron" sub="Your models" />
          ) : (
            <Tile href="/account" icon={<UserRound size={24} strokeWidth={1.5} />} title="Account" sub="Downloads & access" />
          )}
        </motion.div>
      </div>
    </StudioShell>
  );
}

function Tile({ href, icon, title, sub }: { href: string; icon: React.ReactNode; title: string; sub: string }) {
  return (
    <Link
      href={href}
      className="glass flex items-center gap-4 rounded-3xl px-5 py-5 text-cream no-underline transition-transform duration-300 hover:-translate-y-0.5 md:px-6"
    >
      <span className="text-cream/85">{icon}</span>
      <span>
        <span className="block text-[16px] font-medium md:text-[17px]">{title}</span>
        <span className="block text-[12.5px] text-cream/60">{sub}</span>
      </span>
    </Link>
  );
}
