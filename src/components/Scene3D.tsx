import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function FloatingGeometry({ position, color, rotationSpeed = 1 }: { 
  position: [number, number, number]; 
  color: string; 
  rotationSpeed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * rotationSpeed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * rotationSpeed) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[0.3, 1]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.7}
        roughness={0.1}
        metalness={0.8}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

function AnimatedSphere({ position, color, scale = 1 }: { 
  position: [number, number, number]; 
  color: string; 
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.scale.setScalar(scale + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.6}
        wireframe
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={particlesRef} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

const Scene3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        className="w-full h-full"
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#8b5cf6" />
        <pointLight position={[10, -10, 5]} intensity={0.3} color="#3b82f6" />
        
        <ParticleField />
        
        {/* Floating geometric shapes */}
        <FloatingGeometry position={[-4, 2, -2]} color="#8b5cf6" rotationSpeed={1.2} />
        <FloatingGeometry position={[4, -1, -3]} color="#3b82f6" rotationSpeed={0.8} />
        <FloatingGeometry position={[-2, -3, -1]} color="#06b6d4" rotationSpeed={1.5} />
        <FloatingGeometry position={[3, 3, -2]} color="#8b5cf6" rotationSpeed={0.9} />
        
        {/* Animated spheres */}
        <AnimatedSphere position={[-5, -2, -4]} color="#3b82f6" scale={0.8} />
        <AnimatedSphere position={[5, 2, -5]} color="#8b5cf6" scale={1.2} />
        <AnimatedSphere position={[0, -4, -3]} color="#06b6d4" scale={1.0} />
        <AnimatedSphere position={[-3, 4, -6]} color="#3b82f6" scale={0.9} />
      </Canvas>
    </div>
  );
};

export default Scene3D;