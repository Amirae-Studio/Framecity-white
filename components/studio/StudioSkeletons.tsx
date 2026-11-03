// Skeleton screens for the studio routes' loading.tsx files. Each mirrors the
// layout of the page it stands in for, so nothing jumps when the page arrives.

import { twMerge } from "tailwind-merge";

function Bone({ className = "" }: { className?: string }) {
  return <div className={twMerge("animate-pulse rounded-full bg-cream/[0.07]", className)} />;
}

/** Mirrors StudioShell: the city backdrop, a glass frame and its nav row. */
function ShellSkeleton({ children }: { children: React.ReactNode }) {
  return (
    <div className="studio-backdrop flex min-h-dvh flex-col p-2.5 md:p-6">
      <div className="glass-frame flex flex-1 flex-col rounded-[28px] md:rounded-[36px]">
        <div className="flex items-center justify-between gap-3 px-4 pt-4 md:px-8 md:pt-6">
          <Bone className="h-9 w-36" />
          <div className="flex gap-2">
            <Bone className="h-14 w-16 rounded-2xl md:w-[76px]" />
            <Bone className="h-14 w-16 rounded-2xl md:w-[76px]" />
            <Bone className="h-14 w-16 rounded-2xl md:w-[76px]" />
          </div>
          <Bone className="h-10 w-10" />
        </div>
        {children}
      </div>
    </div>
  );
}

/** h-16 bar with a back pill and title used by explore and the configurator. */
function AppHeaderSkeleton() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-3 border-b border-cream/[0.09] px-4 md:px-6">
      <div className="flex items-center gap-4">
        <Bone className="h-9 w-20" />
        <div className="space-y-1.5">
          <Bone className="h-2 w-20" />
          <Bone className="h-4 w-40" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Bone className="hidden h-8 w-48 md:block" />
        <Bone className="h-8 w-8" />
      </div>
    </header>
  );
}

export function StudioHomeSkeleton() {
  return (
    <ShellSkeleton>
      <div className="grid flex-1 grid-cols-1 gap-5 px-4 pb-4 pt-8 md:grid-cols-[minmax(0,400px)_1fr_minmax(0,300px)] md:px-8 md:pb-8 md:pt-10">
        <div className="flex flex-col gap-7">
          <div>
            <Bone className="mb-3 h-3 w-32" />
            <Bone className="mb-4 h-16 w-64 rounded-xl md:h-24" />
            <Bone className="mb-4 h-4 w-40" />
            <Bone className="h-4 w-72 max-w-full" />
          </div>
          <Bone className="h-[260px] rounded-3xl" />
        </div>
        <div className="hidden md:block" />
        <div className="hidden flex-col gap-5 md:flex">
          <Bone className="h-[170px] rounded-3xl" />
          <Bone className="h-[250px] rounded-3xl" />
        </div>
      </div>
    </ShellSkeleton>
  );
}

export function StudioModelsSkeleton() {
  return (
    <ShellSkeleton>
      <div className="mx-auto w-full max-w-[1200px] px-6 py-12 md:py-16">
        <Bone className="mb-7 h-3 w-20" />
        <Bone className="mb-8 h-2 w-64" />
        <Bone className="mb-3 h-12 w-72 rounded-xl md:h-14" />
        <Bone className="mb-11 h-4 w-96 max-w-full" />
        <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }, (_, i) => (
            <Bone key={i} className="h-[104px] rounded-2xl" />
          ))}
        </div>
      </div>
    </ShellSkeleton>
  );
}

export function StudioExploreSkeleton() {
  return (
    <div className="flex h-dvh flex-col bg-base">
      <AppHeaderSkeleton />
      <div className="relative flex-1 animate-pulse bg-cream/[0.04]">
        <Bone className="absolute left-4 top-4 h-11 w-[min(420px,calc(100%-2rem))] rounded-2xl" />
      </div>
    </div>
  );
}

export function StudioConfigureSkeleton() {
  return (
    <div className="flex min-h-dvh flex-col bg-base">
      <AppHeaderSkeleton />
      <div className="relative flex-1 lg:h-[calc(100dvh-64px)]">
        <div className="flex flex-col gap-3 p-4 lg:absolute lg:bottom-5 lg:left-5 lg:top-5 lg:flex-row lg:p-0">
          <Bone className="h-14 w-full rounded-2xl lg:h-72 lg:w-14" />
          <Bone className="h-64 w-full rounded-2xl lg:h-full lg:w-[310px]" />
        </div>
      </div>
    </div>
  );
}
