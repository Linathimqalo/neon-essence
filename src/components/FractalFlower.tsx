import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FractalFlower = () => {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 3;
      const angle = (i / 2000) * Math.PI * 2 * 8; // Create spiral pattern
      const height = (Math.sin(angle * 0.5) * 0.5 + Math.random() * 0.2) * 2;
      
      // Create fractal flower pattern
      const petalRadius = radius * (1 + 0.3 * Math.sin(angle * 5));
      
      positions[i3] = Math.cos(angle) * petalRadius;
      positions[i3 + 1] = height;
      positions[i3 + 2] = Math.sin(angle) * petalRadius;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00d4ff"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

export default FractalFlower;