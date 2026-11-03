// Every studio route (and its loading skeleton) shares the glass palette.
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <div className="theme-glass">{children}</div>;
}
