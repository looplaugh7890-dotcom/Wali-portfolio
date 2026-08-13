'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from './ThemeProvider';

function Laptop() {
  const { currentTheme } = useTheme();
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.15 + (hovered ? 0.2 : 0);
    groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.03 - 0.1;
  });

  const brassColor = currentTheme.primaryHex;
  const brassDim = currentTheme.dimHex;
  const darkColor = '#15130F';
  const screenGlow = '#1a1710';

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Base / Keyboard */}
      <mesh position={[0, -0.05, 0]} castShadow>
        <boxGeometry args={[3.2, 0.12, 2.2]} />
        <meshStandardMaterial color={darkColor} metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Keyboard area detail */}
      <mesh position={[0, 0.01, 0.15]}>
        <boxGeometry args={[2.6, 0.02, 1.2]} />
        <meshStandardMaterial color="#1E1B15" metalness={0.3} roughness={0.5} />
      </mesh>

      {/* Keyboard keys */}
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 7 }).map((_, col) => (
          <mesh
            key={`${row}-${col}`}
            position={[-0.9 + col * 0.3, 0.03, -0.2 + row * 0.28]}
          >
            <boxGeometry args={[0.22, 0.015, 0.2]} />
            <meshStandardMaterial color="#2A2519" metalness={0.4} roughness={0.6} />
          </mesh>
        ))
      )}

      {/* Trackpad */}
      <mesh position={[0, 0.02, 0.75]}>
        <boxGeometry args={[1.0, 0.01, 0.65]} />
        <meshStandardMaterial color="#1E1B15" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Hinge */}
      <mesh position={[0, 0.12, -1.05]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.06, 3.0, 16]} />
        <meshStandardMaterial color={brassDim} metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Screen panel */}
      <group position={[0, 1.1, -1.1]} rotation={[-0.25, 0, 0]}>
        {/* Screen frame */}
        <mesh castShadow>
          <boxGeometry args={[3.1, 2.0, 0.08]} />
          <meshStandardMaterial color={darkColor} metalness={0.6} roughness={0.3} />
        </mesh>

        {/* Screen display */}
        <mesh position={[0, 0, 0.05]}>
          <planeGeometry args={[2.7, 1.7]} />
          <meshStandardMaterial
            color={screenGlow}
            emissive={brassColor}
            emissiveIntensity={hovered ? 0.15 : 0.06}
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>

        {/* Code lines on screen */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh key={`line-${i}`} position={[-0.8 + (i % 3) * 0.1, 0.55 - i * 0.17, 0.06]}>
            <planeGeometry args={[0.8 + Math.random() * 1.0, 0.06]} />
            <meshStandardMaterial
              color={brassColor}
              emissive={brassColor}
              emissiveIntensity={hovered ? 0.3 : 0.15}
              transparent
              opacity={0.6 - i * 0.05}
            />
          </mesh>
        ))}

        {/* Camera dot */}
        <mesh position={[0, 0.92, 0.05]}>
          <circleGeometry args={[0.03, 16]} />
          <meshStandardMaterial
            color={brassColor}
            emissive={brassColor}
            emissiveIntensity={0.4}
          />
        </mesh>
      </group>

      {/* Brass accent strip on base edge */}
      <mesh position={[0, 0.0, 1.1]}>
        <boxGeometry args={[3.2, 0.04, 0.02]} />
        <meshStandardMaterial
          color={brassColor}
          metalness={0.9}
          roughness={0.1}
          emissive={brassColor}
          emissiveIntensity={hovered ? 0.2 : 0.05}
        />
      </mesh>
    </group>
  );
}

function Scene() {
  const { currentTheme } = useTheme();
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#F5F1E8" />
      <pointLight position={[-3, 2, 2]} intensity={0.4} color={currentTheme.primaryHex} />
      <pointLight position={[3, -1, 3]} intensity={0.3} color={currentTheme.primaryHex} />
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Laptop />
      </Float>
      <Environment preset="night" />
    </>
  );
}

export function LaptopModel() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 2, 5], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
