"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { StudioHeader } from "@/components/studio/StudioHeader";
import { brand } from "@/lib/brand";

const ease = [0.22, 1, 0.36, 1] as const;

const paths = [
  {
    href: "/studio/models",
    image: "/hero-city.jpg",
    imagePosition: "50% 55%",
    tag: "Recommended",
    title: "Curated cities",
    body: "Hand-modelled districts and landmarks with high detail, tuned for clean prints.",
  },
  {
    href: "/studio/explore",
    image: "/studio/golden-skyline.webp",
    imagePosition: "50% 40%",
    tag: "Beta",
    title: "Anywhere on the map",
    body: "Draw a frame over any place on Earth and generate it from open map data.",
  },
];

const steps = [
  { title: "Pick a place", body: "Start from a curated skyline or search anywhere on the map." },
  { title: "Shape it in 3D", body: "Choose size, frame and finish in the live configurator." },
  { title: "Print it", body: "Get the print-ready 3MF file from the main website." },
];

export function StudioHome() {
  return (
    <div className="studio-backdrop flex min-h-dvh flex-col text-cream">
      <StudioHeader />

      {/* Hero — the skyline at last light, copy set low over the streets */}
      <section className="px-3 pt-3 md:px-5">
        <div className="on-media relative flex min-h-[580px] flex-col justify-end overflow-hidden rounded-[28px] md:h-[min(84dvh,820px)]">
          <Image
            src="/studio/dusk-skyline.webp"
            alt="Manhattan at last light, the Empire State Building catching the sun"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_35%] transition-[filter] duration-500"
            style={{ filter: "var(--hero-filter)" }}
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#120d0c]/90 via-[#120d0c]/35 to-transparent" />
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-screen"
            style={{ background: "radial-gradient(70% 55% at 20% 100%, var(--glow), transparent 70%)" }}
          />

          <div className="relative grid gap-8 p-6 md:grid-cols-[1fr_auto] md:items-end md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-3 py-1 font-mono text-[10.5px] font-bold uppercase tracking-[0.24em] text-white/90 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                {brand.name} Studio
              </span>
              <h1 className="m-0 mt-4 font-display text-[46px] font-normal leading-[0.98] tracking-[-0.01em] text-white md:text-[88px]">
                Every skyline
                <br />
                <em className="font-normal text-[#f2b98c]">has a golden hour.</em>
              </h1>
              <p className="mt-5 max-w-[500px] text-[15px] leading-relaxed text-white/80 md:text-[17px]">
                {brand.tagline}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/studio/models"
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-[var(--accent)] px-6 text-[14px] font-medium text-white no-underline shadow-[0_14px_34px_-12px_rgba(236,138,79,0.8)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Browse curated cities
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/studio/explore"
                  className="inline-flex h-12 items-center rounded-full border border-white/35 bg-white/10 px-6 text-[14px] font-medium text-white no-underline backdrop-blur-md transition-colors duration-300 hover:bg-white/20"
                >
                  Pick any place
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden border-l border-white/25 pl-5 font-mono text-[10.5px] uppercase leading-[1.9] tracking-[0.18em] text-white/65 md:block"
            >
              <div className="text-white">Manhattan, NY</div>
              <div>40.7484° N</div>
              <div>73.9857° W</div>
              <div className="mt-2 text-[var(--accent)]">● Last light</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Starting points — editorial rows */}
      <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 pb-20 pt-16 md:pt-24">
        <div className="mb-10 grid gap-4 md:grid-cols-[1fr_1fr] md:items-end">
          <h2 className="m-0 font-display text-[36px] font-normal leading-[1.05] md:text-[52px]">
            Where does your
            <br />
            <em className="text-glow">city begin?</em>
          </h2>
          <p className="m-0 max-w-[420px] text-[15px] leading-relaxed text-cream/60 md:justify-self-end">
            Two ways in. Both end in the same 3D studio, ready to frame and print.
          </p>
        </div>

        <div className="border-t border-cream/15">
          {paths.map((p, i) => (
            <motion.div
              key={p.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
            >
              <Link
                href={p.href}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-cream/15 py-6 text-cream no-underline md:grid-cols-[64px_220px_1fr_auto] md:gap-8 md:py-8"
              >
                <span className="hidden font-display text-[28px] italic text-cream/40 md:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative block h-[72px] w-[96px] overflow-hidden rounded-xl md:h-[130px] md:w-[220px] md:rounded-2xl">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="220px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    style={{ objectPosition: p.imagePosition }}
                  />
                </span>
                <span className="min-w-0">
                  <span className="flex flex-wrap items-center gap-3">
                    <span className="font-display text-[26px] font-medium leading-tight transition-colors duration-300 group-hover:text-[var(--accent-text)] md:text-[40px]">
                      {p.title}
                    </span>
                    <span className="rounded-full border border-[var(--accent)]/45 px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--accent-text)]">
                      {p.tag}
                    </span>
                  </span>
                  <span className="mt-1.5 hidden max-w-[520px] text-[14.5px] leading-relaxed text-cream/60 sm:block">
                    {p.body}
                  </span>
                </span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cream/20 transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </motion.div>
          ))}

        </div>

        <ol className="m-0 mt-20 grid list-none grid-cols-1 gap-10 p-0 sm:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title}>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[var(--accent-text)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-[var(--accent)]/60 to-transparent" />
              </div>
              <div className="font-display text-[24px] font-medium">{step.title}</div>
              <div className="mt-1.5 text-[14px] leading-relaxed text-cream/60">{step.body}</div>
            </li>
          ))}
        </ol>
      </main>

      <footer className="border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start justify-between gap-2 px-6 py-6 text-[12px] text-cream/50 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </span>
          {brand.supportEmail && (
            <a href={`mailto:${brand.supportEmail}`} className="text-cream/60 no-underline hover:text-cream">
              {brand.supportEmail}
            </a>
          )}
        </div>
      </footer>
    </div>
  );
}
