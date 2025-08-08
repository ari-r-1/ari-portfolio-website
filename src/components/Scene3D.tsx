import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function DataNode({ position, size = 0.15, color = "#64748b" }: { 
  position: [number, number, number]; 
  size?: number;
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Enhanced floating motion with more dynamic movement
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2 + position[0]) * 0.4;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.8 + position[2]) * 0.3;
      meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * 0.6 + position[1]) * 0.2;
      // Enhanced rotation
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
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

function DataCube({ position, color = "#475569" }: { 
  position: [number, number, number]; 
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Enhanced breathing and rotation
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5 + position[0] * 2) * 0.2;
      meshRef.current.scale.setScalar(scale);
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.25, 0.25, 0.25]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.6}
        roughness={0.4}
        metalness={0.2}
        wireframe
      />
    </mesh>
  );
}

function FloatingGrid() {
  const gridRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      // Enhanced wave motion
      gridRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
      gridRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
      gridRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <mesh ref={gridRef} position={[0, -2, -6]}>
      <planeGeometry args={[10, 10, 25, 25]} />
      <meshStandardMaterial 
        color="#374151" 
        transparent 
        opacity={0.2}
        wireframe
      />
    </mesh>
  );
}

function DataParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(400 * 3);
    for (let i = 0; i < 400; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      // Enhanced rotation and breathing
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.2;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      particlesRef.current.scale.setScalar(scale);
    }
  });

  return (
    <points ref={particlesRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={400}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#64748b"
        size={0.03}
        sizeAttenuation={true}
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
        camera={{ position: [0, 0, 6], fov: 55 }}
        className="w-full h-full"
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.4} color="#f8fafc" />
        <directionalLight position={[5, 5, 5]} intensity={0.4} color="#ffffff" />
        <pointLight position={[-5, 3, 2]} intensity={0.3} color="#0ea5e9" />
        <pointLight position={[5, -3, -2]} intensity={0.2} color="#14b8a6" />
        
        <DataParticles />
        <FloatingGrid />
        
        <DataNode position={[-3, 1, -2]} size={0.12} color="#64748b" />
        <DataNode position={[2, -1, -3]} size={0.15} color="#0ea5e9" />
        <DataNode position={[-1, -2, -1]} size={0.10} color="#64748b" />
        <DataNode position={[3, 2, -2]} size={0.13} color="#14b8a6" />
        <DataNode position={[-4, -1, -4]} size={0.11} color="#64748b" />
        <DataNode position={[4, 1, -5]} size={0.14} color="#0ea5e9" />
        <DataNode position={[0, 3, -3]} size={0.12} color="#14b8a6" />
        <DataNode position={[-2, 0, -6]} size={0.10} color="#64748b" />
        
        <DataCube position={[-2, 2, -4]} color="#475569" />
        <DataCube position={[1, -3, -2]} color="#475569" />
        <DataCube position={[3, -1, -6]} color="#475569" />
        <DataCube position={[-3, -1, -1]} color="#6366f1" />
      </Canvas>
    </div>
  );
};

export default Scene3D;