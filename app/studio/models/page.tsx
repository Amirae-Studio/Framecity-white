import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { StudioHeader } from "@/components/studio/StudioHeader";
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
    <div className="studio-backdrop flex min-h-dvh flex-col text-cream">
      <StudioHeader email={email} />

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