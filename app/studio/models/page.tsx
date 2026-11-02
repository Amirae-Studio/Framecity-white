import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Logo } from "@/components/Logo";
import { SignOutButton } from "@/components/SignOutButton";
import { StudioPicker } from "@/components/studio/StudioPicker";

import { fetchStudioCities, fetchStudioBuildings, checkPatronAccess, getPatronSubfolders } from "@/app/studio/actions";

export const metadata = {
  title: "Curated models - FrameCity Studio",
};

export default async function StudioModelsPage({
  searchParams,
}: {
  searchParams: Promise<{ view?: string }>;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/studio/models");

  const email = user.email ?? "your account";
  // Independent lookups — run them together rather than one after another.
  const [cities, buildings, { isPatron, username: patronUsername }] = await Promise.all([
    fetchStudioCities(),
    fetchStudioBuildings(),
    checkPatronAccess(),
  ]);
  const patronFolders = isPatron && patronUsername ? await getPatronSubfolders(patronUsername) : [];
  const { view } = await searchParams;

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
        <StudioPicker
          initialCities={cities}
          initialBuildings={buildings}
          isPatron={isPatron}
          patronUsername={patronUsername}
          initialPatronFolders={patronFolders}
          initialView={view === "custom" && isPatron ? "custom" : "handmade"}
        />
      </main>
    </div>
  );
}