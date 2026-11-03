import { brand } from "@/lib/brand";
import { StudioHome } from "@/components/studio/StudioHome";

export const metadata = {
  title: `Studio - ${brand.name}`,
};

export default function StudioPage() {
  return <StudioHome />;
}
