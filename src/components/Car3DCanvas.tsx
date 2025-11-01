import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';

interface Car3DCanvasProps {
  currentThemeRGB: string;
}

const Car3DPlaceholder = ({ themeRGB }: { themeRGB: string }) => {
  return (
    <mesh rotation={[0, Math.PI / 4, 0]}>
      <boxGeometry args={[4, 1, 2]} />
      <meshStandardMaterial 
        color={`rgb(${themeRGB})`}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
};

export const Car3DCanvas = ({ currentThemeRGB }: Car3DCanvasProps) => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[5, 2, 5]} fov={50} />
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} intensity={1.2} angle={Math.PI / 6} />
      <spotLight position={[-10, 5, -5]} intensity={0.6} />
      <pointLight position={[0, -2, 0]} color={`rgb(${currentThemeRGB})`} intensity={0.8} />
      
      <Suspense fallback={null}>
        <Car3DPlaceholder themeRGB={currentThemeRGB} />
        <Environment preset="city" />
      </Suspense>
      
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        minDistance={3}
        maxDistance={10}
        dampingFactor={0.05}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};
