import { redirect } from "next/navigation";
import { fetchStudioCities, fetchStudioBuildings } from "@/app/studio/actions";
import { StudioConfigurator } from "@/components/studio/StudioConfigurator";

export const metadata = {
  title: "Configure your tile — FrameCity",
};

export default async function ConfigurePage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; city?: string; location?: string }>;
}) {
  const params = await searchParams;

  // Patron uploads need an account, and the studio no longer has sign-in.
  if (params.type === "patron") redirect("/studio");

  if (params.type === "building") {
    const dbBuildings = await fetchStudioBuildings();
    const building = dbBuildings.find(
      (b) => b.slug === params.location && b.available
    );
    if (!building) redirect("/studio");

    return (
      <StudioConfigurator
        type="building"
        city={{ slug: building.city_slug, name: building.city_name }}
        location={{
          slug: building.slug,
          name: building.name,
          area: building.area || "",
          coords: building.coords || "",
        }}
        user={null}
        hasAccess={false}
      />
    );
  }

  const dbCities = await fetchStudioCities();
  const city = dbCities.find((c) => c.slug === params.city && c.available);
  const location = city?.locations.find(
    (l) => l.slug === params.location && l.completed !== false
  );
  if (!city || !location) redirect("/studio");

  return (
    <StudioConfigurator
      type="city"
      city={{ slug: city.slug, name: city.name }}
      location={location}
      user={null}
      hasAccess={false}
    />
  );
}
