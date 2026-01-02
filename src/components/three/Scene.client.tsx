"use client";

import { Canvas } from "@react-three/fiber";
import { Stage, PresentationControls, Float } from "@react-three/drei";
import { Suspense } from "react";
import { PlaceholderModel } from "./PlaceholderModel.client";

interface SceneProps {
  modelUrl?: string | null;
}

export function Scene({ modelUrl }: SceneProps) {
  return (
    <div className="aspect-[4/3] w-full bg-background-elevated">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 2, 5], fov: 45 }}
        shadows
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <Stage
            environment="city"
            intensity={0.5}
            shadows={{ type: "contact", opacity: 0.5, blur: 2 }}
          >
            <PresentationControls
              global
              polar={[-Math.PI / 4, Math.PI / 4]}
              azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
              <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
                <PlaceholderModel />
              </Float>
            </PresentationControls>
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  );
}
