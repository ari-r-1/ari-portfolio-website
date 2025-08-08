import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Mathematical Symbol Components using simple geometry
function MathSymbol({ position, symbol, color = "#0ea5e9" }: {
  position: [number, number, number];
  symbol: 'sigma' | 'pi' | 'delta' | 'integral' | 'infinity';
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      meshRef.current.position.y = position[1] + Math.sin(time * 0.8 + position[0]) * 0.3;
      meshRef.current.position.x = position[0] + Math.cos(time * 0.6 + position[2]) * 0.2;
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.rotation.z = Math.sin(time * 0.4) * 0.1;
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
      default:
        return <sphereGeometry args={[0.15, 16, 16]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {getGeometry()}
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.8}
        roughness={0.3}
        metalness={0.4}
        emissive={color}
        emissiveIntensity={0.1}
      />
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
      meshRef.current.position.y = position[1] + Math.sin(time * 1.2 + position[0]) * 0.4;
      meshRef.current.position.x = position[0] + Math.cos(time * 0.8 + position[2]) * 0.3;
      meshRef.current.rotation.y = time * 0.3;
      meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
      
      // Pulsing effect
      const scale = 1 + Math.sin(time * 2 + position[0]) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.8}
        roughness={0.3}
        metalness={0.1}
      />
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
      // Dynamic scaling like a bar chart
      const scale = 1 + Math.sin(time * 1.5 + position[0] * 2) * 0.4;
      meshRef.current.scale.y = scale;
      meshRef.current.rotation.x = time * 0.1;
      meshRef.current.rotation.y = time * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.7}
        roughness={0.4}
        metalness={0.2}
        wireframe
      />
    </mesh>
  );
}

// Floating Mathematical Grid
function MathGrid() {
  const gridRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      const time = state.clock.elapsedTime;
      gridRef.current.position.y = Math.sin(time * 0.4) * 0.3;
      gridRef.current.rotation.z = Math.sin(time * 0.3) * 0.08;
      gridRef.current.rotation.x = Math.cos(time * 0.2) * 0.05;
    }
  });

  return (
    <mesh ref={gridRef} position={[0, -2, -6]}>
      <planeGeometry args={[12, 12, 30, 30]} />
      <meshStandardMaterial 
        color="#374151" 
        transparent 
        opacity={0.15}
        wireframe
      />
    </mesh>
  );
}

// Data Connection Lines
function ConnectionLines() {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const connectionGeometry = useMemo(() => {
    const points = [];
    const connections = [
      [[-3, 1, -2], [2, -1, -3]],
      [[2, -1, -3], [3, 2, -2]],
      [[-1, -2, -1], [4, 1, -5]],
      [[0, 3, -3], [-2, 0, -6]]
    ];
    
    connections.forEach(([start, end]) => {
      points.push(new THREE.Vector3(...start));
      points.push(new THREE.Vector3(...end));
    });
    
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, []);

  useFrame((state) => {
    if (linesRef.current && linesRef.current.material) {
      const time = state.clock.elapsedTime;
      (linesRef.current.material as THREE.LineBasicMaterial).opacity = 0.2 + Math.sin(time * 0.8) * 0.1;
    }
  });

  return (
    <lineSegments ref={linesRef} geometry={connectionGeometry}>
      <lineBasicMaterial
        color="#0ea5e9"
        transparent
        opacity={0.2}
      />
    </lineSegments>
  );
}

// Data Particles representing data points
function DataParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.elapsedTime;
      particlesRef.current.rotation.y = time * 0.08;
      particlesRef.current.rotation.x = Math.sin(time * 0.05) * 0.2;
      const scale = 1 + Math.sin(time * 0.5) * 0.2;
      particlesRef.current.scale.setScalar(scale);
    }
  });

  return (
    <points ref={particlesRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={500}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#64748b"
        size={0.025}
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  );
}

const Scene3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        className="w-full h-full"
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        {/* Enhanced lighting for mathematical elements */}
        <ambientLight intensity={0.3} color="#f8fafc" />
        <directionalLight position={[8, 8, 5]} intensity={0.4} color="#ffffff" />
        <pointLight position={[-5, 3, 2]} intensity={0.3} color="#0ea5e9" />
        <pointLight position={[5, -3, -2]} intensity={0.2} color="#14b8a6" />
        <spotLight
          position={[0, 10, 0]}
          intensity={0.1}
          angle={Math.PI / 6}
          penumbra={1}
          color="#8b5cf6"
        />
        
        {/* Data particles background */}
        <DataParticles />
        
        {/* Connection lines */}
        <ConnectionLines />
        
        {/* Mathematical grid */}
        <MathGrid />
        
        {/* Floating mathematical symbols */}
        <MathSymbol position={[-4, 2, -3]} symbol="sigma" color="#0ea5e9" />
        <MathSymbol position={[3, 1, -4]} symbol="pi" color="#14b8a6" />
        <MathSymbol position={[-2, -1, -2]} symbol="delta" color="#8b5cf6" />
        <MathSymbol position={[4, -2, -5]} symbol="integral" color="#f59e0b" />
        <MathSymbol position={[-3, 3, -6]} symbol="infinity" color="#ef4444" />
        <MathSymbol position={[2, 3, -2]} symbol="sigma" color="#06b6d4" />
        
        {/* Data visualization nodes */}
        <DataNode position={[-3, 1, -2]} size={0.12} color="#64748b" />
        <DataNode position={[2, -1, -3]} size={0.15} color="#0ea5e9" />
        <DataNode position={[-1, -2, -1]} size={0.10} color="#64748b" />
        <DataNode position={[3, 2, -2]} size={0.13} color="#14b8a6" />
        <DataNode position={[-4, -1, -4]} size={0.11} color="#64748b" />
        <DataNode position={[4, 1, -5]} size={0.14} color="#0ea5e9" />
        <DataNode position={[0, 3, -3]} size={0.12} color="#14b8a6" />
        <DataNode position={[-2, 0, -6]} size={0.10} color="#64748b" />
        <DataNode position={[1, 0, -1]} size={0.08} color="#8b5cf6" />
        <DataNode position={[-1, 1, -4]} size={0.09} color="#8b5cf6" />
        
        {/* Statistical chart cubes */}
        <StatCube position={[-2, 2, -4]} color="#475569" />
        <StatCube position={[1, -3, -2]} color="#475569" />
        <StatCube position={[3, -1, -6]} color="#475569" />
        <StatCube position={[-3, -1, -1]} color="#6366f1" />
        <StatCube position={[2, 2, -5]} color="#6366f1" />
      </Canvas>
    </div>
  );
};

export default Scene3D;