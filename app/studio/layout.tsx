// Every studio route (and its loading skeleton) shares the dusk palette.
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <div className="theme-dusk">{children}</div>;
}
