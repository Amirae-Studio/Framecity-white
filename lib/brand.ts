// White-label branding for the studio. Each partner swaps these values (and
// drops their logo into /public) — nothing else in the studio needs to change.

export const brand = {
  /** Partner name shown in the header, intro copy and page title. */
  name: "Your Brand",
  /** Path under /public, e.g. "/partner-logo.svg". null shows the placeholder. */
  logoSrc: null as string | null,
  /** Intrinsic logo size, used for aspect ratio only. */
  logoWidth: 320,
  logoHeight: 96,
  /** Short line under the studio heading. */
  tagline: "Pick any place on Earth, shape it in 3D, and print your own piece of the skyline at home.",
  /** Contact for the footer; null hides it. */
  supportEmail: null as string | null,
};
