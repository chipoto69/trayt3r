"use client";

import { useRef } from "react";
import { Mesh } from "three";

export function PlaceholderModel() {
  const meshRef = useRef<Mesh>(null);

  const legPositions: [number, number, number][] = [
    [-0.85, 0, -0.35],
    [0.85, 0, -0.35],
    [-0.85, 0, 0.35],
    [0.85, 0, 0.35],
  ];

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0.45, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 0.1, 1]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
      </mesh>

      {legPositions.map((pos, i) => (
        <mesh key={i} position={pos} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 0.8, 16]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
        </mesh>
      ))}
    </group>
  );
}
