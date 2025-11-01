import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from '@react-three/drei';
import { Suspense, Component, ErrorInfo, ReactNode } from 'react';
import * as THREE from 'three';

interface Car3DCanvasProps {
  currentThemeRGB: string;
}

class Model3DErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('3D Model loading error:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
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

const Car3DModel = ({ themeRGB, modelPath }: { themeRGB: string; modelPath?: string }) => {
  if (!modelPath) {
    return <Car3DPlaceholder themeRGB={themeRGB} />;
  }

  const { scene } = useGLTF(modelPath);
  
  const clonedScene = scene.clone();
  
  clonedScene.traverse((child) => {
    if (child instanceof THREE.Mesh && child.material) {
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      
      const updatedMaterials = materials.map(mat => {
        const clonedMat = mat.clone();
        clonedMat.color = new THREE.Color(`rgb(${themeRGB})`);
        if ('metalness' in clonedMat) {
          (clonedMat as THREE.MeshStandardMaterial).metalness = 0.9;
        }
        if ('roughness' in clonedMat) {
          (clonedMat as THREE.MeshStandardMaterial).roughness = 0.1;
        }
        return clonedMat;
      });
      
      child.material = Array.isArray(child.material) ? updatedMaterials : updatedMaterials[0];
    }
  });
  
  return (
    <primitive 
      object={clonedScene} 
      scale={[1, 1, 1]} 
      position={[0, -1, 0]} 
      rotation={[0, 0, 0]} 
    />
  );
};

export const Car3DCanvas = ({ currentThemeRGB }: Car3DCanvasProps) => {
  const modelPath = undefined;
  
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[5, 2, 5]} fov={50} />
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} intensity={1.2} angle={Math.PI / 6} />
      <spotLight position={[-10, 5, -5]} intensity={0.6} />
      <pointLight position={[0, -2, 0]} color={`rgb(${currentThemeRGB})`} intensity={0.8} />
      
      <Model3DErrorBoundary key={modelPath || 'no-model'} fallback={<Car3DPlaceholder themeRGB={currentThemeRGB} />}>
        <Suspense fallback={<Car3DPlaceholder themeRGB={currentThemeRGB} />}>
          <Car3DModel themeRGB={currentThemeRGB} modelPath={modelPath} />
          <Environment preset="city" />
        </Suspense>
      </Model3DErrorBoundary>
      
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
