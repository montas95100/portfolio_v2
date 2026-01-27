import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { useApp } from '../context/AppContext';

const GeometricShape = (props) => {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const { theme } = useApp();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  const color = theme === 'dark' ? '#3b82f6' : '#2563eb';
  const wireframeColor = theme === 'dark' ? '#facc15' : '#f59e0b';

  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={hovered ? 1.1 : 1}
    >
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={color}
        roughness={0.2}
        metalness={0.8}
        wireframe={true}
      />
      <mesh scale={[1.01, 1.01, 1.01]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={hovered ? wireframeColor : color}
          transparent
          opacity={0.1}
          depthWrite={false}
        />
      </mesh>
    </mesh>
  );
};

const Scene3D = () => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas dpr={[1, 1.5]}>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Float
          speed={2} 
          rotationIntensity={1.5} 
          floatIntensity={2} 
        >
          <GeometricShape position={[0, 0, 0]} />
        </Float>
        
        <ContactShadows 
          position={[0, -2, 0]} 
          opacity={0.4} 
          scale={10} 
          blur={2.5} 
          far={4}
          resolution={256} // Optimization: Lower resolution
          frames={1} // Optimization: Bake shadows once (static) or increase only if needed
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
