import { brand } from "@/lib/brand";
import { StudioHeader } from "@/components/studio/StudioHeader";

/** The city photo, and one big pane of glass the page content sits in. */
export function StudioShell({ email, children }: { email: string; children: React.ReactNode }) {
  return (
    <div className="studio-backdrop flex min-h-dvh flex-col p-2.5 text-cream md:p-6">
      <div className="glass-frame flex flex-1 flex-col rounded-[28px] md:rounded-[36px]">
        <StudioHeader email={email} />
        {children}
      </div>
      <p className="m-0 pt-3 text-center text-[11.5px] text-cream/45">
        © {new Date().getFullYear()} {brand.name}
        {brand.supportEmail && (
          <>
            {" · "}
            <a href={`mailto:${brand.supportEmail}`} className="text-cream/60 no-underline hover:text-cream">
              {brand.supportEmail}
            </a>
          </>
        )}
      </p>
    </div>
  );
}
