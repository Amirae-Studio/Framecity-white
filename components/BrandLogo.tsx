import Image from "next/image";
import { ImagePlus } from "lucide-react";
import { brand } from "@/lib/brand";

/** Partner logo from lib/brand.ts, or a "your logo here" slot until one is set. */
export function BrandLogo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  if (brand.logoSrc) {
    return (
      <Image
        src={brand.logoSrc}
        alt={brand.name}
        width={brand.logoWidth}
        height={brand.logoHeight}
        priority={priority}
        className={`h-8 w-auto ${className}`}
      />
    );
  }

  return (
    <span
      className={`inline-flex h-9 items-center gap-2 rounded-full border border-dashed border-cream/30 bg-panel/50 px-3.5 text-cream/65 backdrop-blur-sm ${className}`}
    >
      <ImagePlus size={15} strokeWidth={1.75} />
      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] max-[419px]:hidden">Your logo here</span>
    </span>
  );
}
