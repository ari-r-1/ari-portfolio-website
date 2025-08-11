import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Hook to detect device type for responsive optimizations
function useDeviceType() {
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width < 768) setDeviceType('mobile');
      else if (width < 1024) setDeviceType('tablet');
      else setDeviceType('desktop');
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  return deviceType;
}

// Mathematical Symbol Components with responsive sizing
function MathSymbol({ position, symbol, color = "#0ea5e9", deviceType }: {
  position: [number, number, number];
  symbol: 'sigma' | 'pi' | 'delta' | 'integral' | 'infinity' | 'alpha' | 'beta' | 'gamma' | 'lambda' | 'theta';
  color?: string;
  deviceType: 'mobile' | 'tablet' | 'desktop';
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Responsive scale based on device
  const getScale = () => {
    switch (deviceType) {
      case 'mobile': return 0.7;
      case 'tablet': return 0.85;
      default: return 1;
    }
  };

  // Responsive animation speed
  const getAnimationSpeed = () => {
    switch (deviceType) {
      case 'mobile': return 0.6; // Slower for better performance
      case 'tablet': return 0.8;
      default: return 1;
    }
  };
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      const speed = getAnimationSpeed();
      
      meshRef.current.position.y = position[1] + Math.sin(time * 0.8 * speed + position[0]) * 0.4;
      meshRef.current.position.x = position[0] + Math.cos(time * 0.6 * speed + position[2]) * 0.3;
      meshRef.current.rotation.y = time * 0.3 * speed;
      meshRef.current.rotation.z = Math.sin(time * 0.4 * speed) * 0.15;
      
      // Apply responsive scale
      const scale = getScale();
      meshRef.current.scale.setScalar(scale);
    }
  });

  // Responsive geometry sizes
  const getGeometry = () => {
    const sizeMultiplier = deviceType === 'mobile' ? 0.8 : 1;
    
    switch (symbol) {
      case 'sigma':
        return <torusGeometry args={[0.3 * sizeMultiplier, 0.1 * sizeMultiplier, 8, 16]} />;
      case 'pi':
        return <cylinderGeometry args={[0.1 * sizeMultiplier, 0.1 * sizeMultiplier, 0.6 * sizeMultiplier, 8]} />;
      case 'delta':
        return <coneGeometry args={[0.2 * sizeMultiplier, 0.4 * sizeMultiplier, 3]} />;
      case 'integral':
        return <torusGeometry args={[0.2 * sizeMultiplier, 0.05 * sizeMultiplier, 8, 16]} />;
      case 'alpha':
        return <octahedronGeometry args={[0.2 * sizeMultiplier]} />;
      case 'beta':
        return <icosahedronGeometry args={[0.15 * sizeMultiplier]} />;
      case 'gamma':
        return <dodecahedronGeometry args={[0.18 * sizeMultiplier]} />;
      case 'lambda':
        return <tetrahedronGeometry args={[0.2 * sizeMultiplier]} />;
      case 'theta':
        return <torusKnotGeometry args={[0.15 * sizeMultiplier, 0.05 * sizeMultiplier, 50, 8]} />;
      default:
        return <sphereGeometry args={[0.15 * sizeMultiplier, 16, 16]} />;
    }
  };

  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: color,
    transparent: true,
    opacity: deviceType === 'mobile' ? 0.7 : 0.9, // Slightly more transparent on mobile
    roughness: 0.2,
    metalness: 0.6
  }), [color, deviceType]);

  return (
    <mesh ref={meshRef} position={position} material={material}>
      {getGeometry()}
    </mesh>
  );
}

// Data Visualization Nodes with responsive behavior
function DataNode({ position, size = 0.15, color = "#64748b", deviceType }: { 
  position: [number, number, number]; 
  size?: number;
  color?: string;
  deviceType: 'mobile' | 'tablet' | 'desktop';
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const responsiveSize = size * (deviceType === 'mobile' ? 0.8 : 1);
  const animationSpeed = deviceType === 'mobile' ? 0.6 : 1;
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      meshRef.current.position.y = position[1] + Math.sin(time * 1.2 * animationSpeed + position[0]) * 0.5;
      meshRef.current.position.x = position[0] + Math.cos(time * 0.8 * animationSpeed + position[2]) * 0.4;
      meshRef.current.rotation.y = time * 0.4 * animationSpeed;
      meshRef.current.rotation.x = Math.sin(time * 0.5 * animationSpeed) * 0.3;
      
      const scale = 1 + Math.sin(time * 2.5 * animationSpeed + position[0]) * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: color,
    transparent: true,
    opacity: deviceType === 'mobile' ? 0.7 : 0.8
  }), [color, deviceType]);

  return (
    <mesh ref={meshRef} position={position} material={material}>
      <sphereGeometry args={[responsiveSize, deviceType === 'mobile' ? 12 : 16, deviceType === 'mobile' ? 12 : 16]} />
    </mesh>
  );
}

// Statistical Chart Cubes with performance optimizations
function StatCube({ position, color = "#475569", deviceType }: { 
  position: [number, number, number]; 
  color?: string;
  deviceType: 'mobile' | 'tablet' | 'desktop';
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const animationSpeed = deviceType === 'mobile' ? 0.5 : 1;
  const cubeSize = deviceType === 'mobile' ? 0.25 : 0.3;
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      const scale = 1.2 + Math.sin(time * 2 * animationSpeed + position[0] * 3) * 0.6;
      meshRef.current.scale.y = scale;
      meshRef.current.rotation.x = time * 0.15 * animationSpeed;
      meshRef.current.rotation.y = time * 0.25 * animationSpeed;
    }
  });

  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: color,
    transparent: true,
    opacity: deviceType === 'mobile' ? 0.7 : 0.8,
    wireframe: true
  }), [color, deviceType]);

  return (
    <mesh ref={meshRef} position={position} material={material}>
      <boxGeometry args={[cubeSize, cubeSize, cubeSize]} />
    </mesh>
  );
}

// Enhanced Data Particles with performance scaling
function DataParticles({ deviceType }: { deviceType: 'mobile' | 'tablet' | 'desktop' }) {
  const particlesRef = useRef<THREE.Points>(null);
  
  // Reduce particle count on mobile for better performance
  const particleCount = deviceType === 'mobile' ? 300 : deviceType === 'tablet' ? 500 : 800;
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [particleCount]);

  const animationSpeed = deviceType === 'mobile' ? 0.5 : 1;

  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.elapsedTime;
      particlesRef.current.rotation.y = time * 0.1 * animationSpeed;
      particlesRef.current.rotation.x = Math.sin(time * 0.08 * animationSpeed) * 0.3;
      const scale = 1 + Math.sin(time * 0.7 * animationSpeed) * 0.3;
      particlesRef.current.scale.setScalar(scale);
    }
  });

  const material = useMemo(() => new THREE.PointsMaterial({
    color: "#64748b",
    size: deviceType === 'mobile' ? 0.025 : 0.03,
    sizeAttenuation: true,
    transparent: true,
    opacity: deviceType === 'mobile' ? 0.5 : 0.7
  }), [deviceType]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(particlesPosition, 3));
    return geo;
  }, [particlesPosition]);

  return (
    <points ref={particlesRef} frustumCulled={false} material={material} geometry={geometry} />
  );
}

const Scene3D = () => {
  const deviceType = useDeviceType();
  
  // Responsive camera settings
  const getCameraPosition = (): [number, number, number] => {
    switch (deviceType) {
      case 'mobile': return [0, 0, 10]; // Further back on mobile
      case 'tablet': return [0, 0, 9];
      default: return [0, 0, 8];
    }
  };

  const getFOV = () => {
    switch (deviceType) {
      case 'mobile': return 85; // Wider FOV for mobile
      case 'tablet': return 80;
      default: return 75;
    }
  };

  // Responsive lighting intensity
  const getLightingIntensity = () => {
    return deviceType === 'mobile' ? 0.3 : 0.4;
  };

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas 
        camera={{ position: getCameraPosition(), fov: getFOV() }} 
        className="w-full h-full"
        gl={{ 
          alpha: true, 
          antialias: deviceType !== 'mobile', // Disable antialiasing on mobile for performance
          powerPreference: "high-performance",
          precision: deviceType === 'mobile' ? 'lowp' : 'highp' // Lower precision on mobile
        }}
        dpr={deviceType === 'mobile' ? 1 : Math.min(window.devicePixelRatio, 2)} // Limit DPR on mobile
      >
        {/* Responsive lighting */}
        <ambientLight intensity={getLightingIntensity()} />
        <directionalLight position={[10, 10, 5]} intensity={getLightingIntensity() * 1.5} />
        <pointLight position={[-6, 4, 3]} intensity={getLightingIntensity()} color="#0ea5e9" />
        {deviceType !== 'mobile' && (
          <>
            <pointLight position={[6, -4, -3]} intensity={0.3} color="#14b8a6" />
            <pointLight position={[0, 6, -2]} intensity={0.2} color="#f59e0b" />
          </>
        )}
        
        {/* Data particles with device optimization */}
        <DataParticles deviceType={deviceType} />
        
        {/* Mathematical symbols - reduced count on mobile */}
        <MathSymbol position={[-5, 3, -4]} symbol="sigma" color="#0ea5e9" deviceType={deviceType} />
        <MathSymbol position={[4, 2, -5]} symbol="pi" color="#14b8a6" deviceType={deviceType} />
        <MathSymbol position={[-3, -1, -3]} symbol="delta" color="#8b5cf6" deviceType={deviceType} />
        <MathSymbol position={[5, -2, -6]} symbol="integral" color="#f59e0b" deviceType={deviceType} />
        <MathSymbol position={[-4, 4, -7]} symbol="infinity" color="#ef4444" deviceType={deviceType} />
        {deviceType !== 'mobile' && (
          <>
            <MathSymbol position={[3, 4, -3]} symbol="alpha" color="#06b6d4" deviceType={deviceType} />
            <MathSymbol position={[-2, 1, -8]} symbol="beta" color="#10b981" deviceType={deviceType} />
            <MathSymbol position={[6, 0, -4]} symbol="gamma" color="#f97316" deviceType={deviceType} />
            <MathSymbol position={[-5, -2, -5]} symbol="lambda" color="#a855f7" deviceType={deviceType} />
            <MathSymbol position={[2, -3, -7]} symbol="theta" color="#ec4899" deviceType={deviceType} />
          </>
        )}
        
        {/* Data visualization nodes - fewer on mobile */}
        <DataNode position={[-4, 2, -3]} size={0.15} color="#64748b" deviceType={deviceType} />
        <DataNode position={[3, -1, -4]} size={0.18} color="#0ea5e9" deviceType={deviceType} />
        <DataNode position={[-2, -2, -2]} size={0.12} color="#64748b" deviceType={deviceType} />
        <DataNode position={[4, 3, -3]} size={0.16} color="#14b8a6" deviceType={deviceType} />
        {deviceType !== 'mobile' && (
          <>
            <DataNode position={[-5, -1, -5]} size={0.13} color="#64748b" deviceType={deviceType} />
            <DataNode position={[5, 1, -6]} size={0.17} color="#0ea5e9" deviceType={deviceType} />
          </>
        )}
        
        {/* Statistical chart cubes - optimized count */}
        <StatCube position={[-3, 3, -5]} color="#475569" deviceType={deviceType} />
        <StatCube position={[2, -3, -3]} color="#6366f1" deviceType={deviceType} />
        {deviceType !== 'mobile' && (
          <>
            <StatCube position={[4, -1, -7]} color="#059669" deviceType={deviceType} />
            <StatCube position={[-4, -1, -2]} color="#dc2626" deviceType={deviceType} />
          </>
        )}
      </Canvas>
    </div>
  );
};

export default Scene3D;