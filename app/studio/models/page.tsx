import { StudioHeader } from "@/components/studio/StudioHeader";
import { StudioPicker } from "@/components/studio/StudioPicker";

import { fetchStudioCities, fetchStudioBuildings } from "@/app/studio/actions";

export const metadata = {
  title: "Curated models - FrameCity Studio",
};

export default async function StudioModelsPage() {
  const [cities, buildings] = await Promise.all([fetchStudioCities(), fetchStudioBuildings()]);

  return (
    <div className="studio-backdrop flex min-h-dvh flex-col text-cream">
      <StudioHeader />

      <main className="flex flex-1 flex-col">
        <StudioPicker initialCities={cities} initialBuildings={buildings} />
      </main>
    </div>
  );
}
