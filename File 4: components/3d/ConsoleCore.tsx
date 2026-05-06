'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

export default function ConsoleCore() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[1.8, 64, 64]}>
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.95}
          roughness={0.1}
          emissive="#D4AF37"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  );
}
