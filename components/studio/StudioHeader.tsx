"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Layers, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { SignOutButton } from "@/components/SignOutButton";
import { ThemeToggle } from "@/components/ThemeToggle";

const nav = [
  { href: "/studio", label: "Studio", icon: House },
  { href: "/studio/models", label: "Curated", icon: Layers },
  { href: "/studio/explore", label: "Map", icon: MapPin },
];

/** Brand, nav pills and account, sitting along the top of the glass frame. */
export function StudioHeader({ email }: { email: string }) {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between gap-3 px-4 pt-4 md:px-8 md:pt-6">
      <Link href="/studio" className="inline-flex shrink-0 no-underline">
        <BrandLogo priority />
      </Link>

      <nav className="flex items-center gap-1 md:gap-2">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`flex flex-col items-center gap-1 rounded-2xl px-3 py-2 text-[11.5px] no-underline transition-colors duration-300 md:min-w-[76px] md:px-4 md:py-2.5 md:text-[12.5px] ${
                active ? "glass-glow" : "text-cream/75 hover:bg-white/[0.06] hover:text-cream"
              }`}
            >
              <Icon size={19} strokeWidth={1.6} />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="flex shrink-0 items-center gap-2 md:gap-3">
        <ThemeToggle className="hidden sm:flex" />
        <Link
          href="/account"
          title={email}
          className="flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-semibold uppercase text-white no-underline ring-2 ring-white/40"
          style={{ background: "linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 40%, #000))" }}
        >
          {email.charAt(0)}
        </Link>
        <span className="hidden lg:inline">
          <SignOutButton />
        </span>
      </div>
    </header>
  );
}
