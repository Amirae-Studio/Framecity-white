import { redirect } from "next/navigation";

// Patron uploads need an account, and the studio no longer has sign-in.
export default function PatronCustomPage() {
  redirect("/studio");
}
