import { ExploreWorld } from "@/components/explore/ExploreWorld";

export const metadata = {
  title: "Explore World — FrameCity Studio",
};

export default function ExplorePage() {
  return <ExploreWorld user={null} hasAccess={false} />;
}
