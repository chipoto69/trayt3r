"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(
  () => import("./Scene.client").then((mod) => mod.Scene),
  {
    ssr: false,
    loading: () => (
      <div className="aspect-[4/3] w-full bg-background-elevated animate-pulse flex items-center justify-center">
        <div className="text-foreground-muted text-sm">Loading 3D viewer...</div>
      </div>
    ),
  }
);

interface ThreeViewerProps {
  modelUrl?: string | null;
}

export function ThreeViewer({ modelUrl }: ThreeViewerProps) {
  return <Scene modelUrl={modelUrl} />;
}
