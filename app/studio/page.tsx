import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { brand } from "@/lib/brand";
import { StudioHome } from "@/components/studio/StudioHome";

import { checkPatronAccess, getPatronSubfolders } from "@/app/studio/actions";

export const metadata = {
  title: `Studio - ${brand.name}`,
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
    <StudioHome
      hasAccess={hasAccess}
      email={email}
      isPatron={isPatron}
      patronFolders={patronFolders}
    />
  );
}
