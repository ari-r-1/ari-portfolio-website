import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Mathematical Symbol Components using simple geometry
function MathSymbol({ position, symbol, color = "#0ea5e9" }: {
  position: [number, number, number];
  symbol: 'sigma' | 'pi' | 'delta' | 'integral' | 'infinity' | 'alpha' | 'beta' | 'gamma' | 'lambda' | 'theta';
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      meshRef.current.position.y = position[1] + Math.sin(time * 0.8 + position[0]) * 0.4;
      meshRef.current.position.x = position[0] + Math.cos(time * 0.6 + position[2]) * 0.3;
      meshRef.current.rotation.y = time * 0.3;
      meshRef.current.rotation.z = Math.sin(time * 0.4) * 0.15;
    }
  });

  // Different geometries for different symbols
  const getGeometry = () => {
    switch (symbol) {
      case 'sigma':
        return <torusGeometry args={[0.3, 0.1, 8, 16]} />;
      case 'pi':
        return <cylinderGeometry args={[0.1, 0.1, 0.6, 8]} />;
      case 'delta':
        return <coneGeometry args={[0.2, 0.4, 3]} />;
      case 'integral':
        return <torusGeometry args={[0.2, 0.05, 8, 16]} />;
      case 'alpha':
        return <octahedronGeometry args={[0.2]} />;
      case 'beta':
        return <icosahedronGeometry args={[0.15]} />;
      case 'gamma':
        return <dodecahedronGeometry args={[0.18]} />;
      case 'lambda':
        return <tetrahedronGeometry args={[0.2]} />;
      case 'theta':
        return <torusKnotGeometry args={[0.15, 0.05, 50, 8]} />;
      default:
        return <sphereGeometry args={[0.15, 16, 16]} />;
    }
  };

  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: color,
    transparent: true,
    opacity: 0.9,
    roughness: 0.2,
    metalness: 0.6
  }), [color]);

  return (
    <mesh ref={meshRef} position={position} material={material}>
      {getGeometry()}
    </mesh>
  );
}

// Data Visualization Nodes  
function DataNode({ position, size = 0.15, color = "#64748b" }: { 
  position: [number, number, number]; 
  size?: number;
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      meshRef.current.position.y = position[1] + Math.sin(time * 1.2 + position[0]) * 0.5;
      meshRef.current.position.x = position[0] + Math.cos(time * 0.8 + position[2]) * 0.4;
      meshRef.current.rotation.y = time * 0.4;
      meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.3;
      
      const scale = 1 + Math.sin(time * 2.5 + position[0]) * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: color,
    transparent: true,
    opacity: 0.8
  }), [color]);

  return (
    <mesh ref={meshRef} position={position} material={material}>
      <sphereGeometry args={[size, 16, 16]} />
    </mesh>
  );
}

// Statistical Chart Cubes
function StatCube({ position, color = "#475569" }: { 
  position: [number, number, number]; 
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      const scale = 1.2 + Math.sin(time * 2 + position[0] * 3) * 0.6;
      meshRef.current.scale.y = scale;
      meshRef.current.rotation.x = time * 0.15;
      meshRef.current.rotation.y = time * 0.25;
    }
  });

  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: color,
    transparent: true,
    opacity: 0.8,
    wireframe: true
  }), [color]);

  return (
    <mesh ref={meshRef} position={position} material={material}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
    </mesh>
  );
}

const Scene3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }} className="w-full h-full">
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.6} />
        <pointLight position={[-6, 4, 3]} intensity={0.4} color="#0ea5e9" />
        
        {/* Enhanced floating mathematical symbols */}
        <MathSymbol position={[-5, 3, -4]} symbol="sigma" color="#0ea5e9" />
        <MathSymbol position={[4, 2, -5]} symbol="pi" color="#14b8a6" />
        <MathSymbol position={[-3, -1, -3]} symbol="delta" color="#8b5cf6" />
        <MathSymbol position={[5, -2, -6]} symbol="integral" color="#f59e0b" />
        <MathSymbol position={[-4, 4, -7]} symbol="infinity" color="#ef4444" />
        <MathSymbol position={[3, 4, -3]} symbol="alpha" color="#06b6d4" />
        <MathSymbol position={[-2, 1, -8]} symbol="beta" color="#10b981" />
        <MathSymbol position={[6, 0, -4]} symbol="gamma" color="#f97316" />
        <MathSymbol position={[-5, -2, -5]} symbol="lambda" color="#a855f7" />
        <MathSymbol position={[2, -3, -7]} symbol="theta" color="#ec4899" />
        
        {/* Data visualization nodes */}
        <DataNode position={[-4, 2, -3]} size={0.15} color="#64748b" />
        <DataNode position={[3, -1, -4]} size={0.18} color="#0ea5e9" />
        <DataNode position={[-2, -2, -2]} size={0.12} color="#64748b" />
        <DataNode position={[4, 3, -3]} size={0.16} color="#14b8a6" />
        <DataNode position={[-5, -1, -5]} size={0.13} color="#64748b" />
        <DataNode position={[5, 1, -6]} size={0.17} color="#0ea5e9" />
        
        {/* Statistical chart cubes */}
        <StatCube position={[-3, 3, -5]} color="#475569" />
        <StatCube position={[2, -3, -3]} color="#475569" />
        <StatCube position={[4, -1, -7]} color="#6366f1" />
        <StatCube position={[-4, -1, -2]} color="#059669" />
      </Canvas>
    </div>
  );
};

export default Scene3D;