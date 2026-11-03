import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { SignOutButton } from "@/components/SignOutButton";
import { ThemeToggle } from "@/components/ThemeToggle";

/** Brand + account bar shared by the studio home and the curated picker. */
export function StudioHeader({ email }: { email: string }) {
  return (
    <header className="sticky top-0 z-30 bg-base/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/studio" className="inline-flex shrink-0 no-underline">
          <BrandLogo priority />
        </Link>
        <div className="flex min-w-0 items-center gap-3">
          <span className="hidden min-w-0 items-center gap-2.5 rounded-full border border-cream/15 py-1 pl-1 pr-3.5 sm:flex">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[12px] font-semibold uppercase text-white">
              {email.charAt(0)}
            </span>
            <span className="truncate font-mono text-[11px] text-cream/70">{email}</span>
          </span>
          <ThemeToggle />
          <SignOutButton />
        </div>
      </div>
    </header>
  );
}
