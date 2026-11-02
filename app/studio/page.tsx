import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Logo } from "@/components/Logo";
import { SignOutButton } from "@/components/SignOutButton";
import { StudioHome } from "@/components/studio/StudioHome";

import { checkPatronAccess, getPatronSubfolders } from "@/app/studio/actions";

export const metadata = {
  title: "The Studio - FrameCity",
};

export default async function StudioPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/studio");

  // Independent lookups — run them together rather than one after another.
  const [{ data: profile }, { isPatron, username: patronUsername }] = await Promise.all([
    supabase.from("profiles").select("has_access").eq("id", user.id).single(),
    checkPatronAccess(),
  ]);

  const email = user.email ?? "your account";
  const hasAccess = Boolean(profile?.has_access);
  const patronFolders = isPatron && patronUsername ? await getPatronSubfolders(patronUsername) : [];

  return (
    <div className="flex min-h-dvh flex-col bg-base">
      <header className="flex items-center justify-between border-b border-cream/[0.09] px-6 py-[18px] md:px-[52px]">
        <Link href="/" className="inline-flex">
          <Logo className="theme-logo h-8" priority />
        </Link>
        <div className="flex items-center gap-5">
          <span className="hidden font-mono text-[11px] text-cream/40 sm:inline">
            {email}
          </span>
          <SignOutButton />
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <StudioHome
          hasAccess={hasAccess}
          email={email}
          isPatron={isPatron}
          patronFolders={patronFolders}
        />
      </main>
    </div>
  );
}