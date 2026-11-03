import { redirect } from "next/navigation";

// The studio is the landing page; middleware sends signed-out visitors to /login.
export default function Home() {
  redirect("/studio");
}
