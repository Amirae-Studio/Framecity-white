import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { brand } from "@/lib/brand";

/** Brand bar shared by the studio home and the curated picker. */
export function StudioHeader() {
  return (
    <header className="sticky top-0 z-30 bg-base/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/studio" className="inline-flex shrink-0 no-underline">
          <BrandLogo priority />
        </Link>
        <div className="flex min-w-0 items-center gap-3">
          <span className="hidden items-center gap-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 font-mono text-[10.5px] font-bold uppercase tracking-[0.14em] text-[var(--accent-text)] sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            View only
          </span>
          <ThemeToggle />
          <a
            href={brand.mainSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 whitespace-nowrap text-[13px] text-cream/70 no-underline transition-colors hover:text-cream"
          >
            Main website
            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
