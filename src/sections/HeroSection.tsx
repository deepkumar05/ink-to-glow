import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import ScrollIndicator from '@/components/ScrollIndicator';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';

const Car3DPlaceholder = () => {
  return (
    <mesh rotation={[0, Math.PI / 4, 0]}>
      <boxGeometry args={[4, 1, 2]} />
      <meshStandardMaterial 
        color={`rgb(var(--theme-rgb))`}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
};

const HeroSection = () => {
  const { currentThemeRGB } = useTheme();

  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[hsl(var(--matte-black))]" />
      
      {/* Radial gradient overlay with theme color */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at center, rgba(${currentThemeRGB}, 0.3) 0%, transparent 70%)`
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full h-screen flex items-center justify-between px-8 md:px-20">
        {/* Left: Text Content */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            UNLEASH THE MACHINE
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-[hsl(var(--text-secondary))] mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Experience Automotive Excellence
          </motion.p>
          
          <motion.button
            onClick={scrollToGallery}
            className="group relative px-12 py-4 text-black font-bold uppercase text-sm tracking-wider overflow-hidden transition-smooth"
            style={{ backgroundColor: `rgb(${currentThemeRGB})` }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative z-10">Explore Models</span>
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ 
                boxShadow: `0 0 30px rgba(${currentThemeRGB}, 0.8)`
              }}
            />
          </motion.button>
        </motion.div>

        {/* Center/Right: 3D Car Display */}
        <motion.div
          className="hidden lg:block w-[800px] h-[600px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Backdrop glow */}
          <motion.div
            className="absolute left-1/2 top-2/3 -translate-x-1/2 w-[400px] h-[200px] rounded-full blur-[80px] pointer-events-none"
            style={{ backgroundColor: `rgba(${currentThemeRGB}, 0.6)` }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          <Canvas>
            <PerspectiveCamera makeDefault position={[5, 2, 5]} fov={50} />
            
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} intensity={1.2} angle={Math.PI / 6} />
            <spotLight position={[-10, 5, -5]} intensity={0.6} />
            <pointLight position={[0, -2, 0]} color={`rgb(${currentThemeRGB})`} intensity={0.8} />
            
            <Suspense fallback={null}>
              <Car3DPlaceholder />
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
        </motion.div>
      </div>

      {/* Interaction Hint */}
      <motion.div
        className="hidden lg:block absolute bottom-20 right-16 glass-panel px-5 py-3 text-sm text-[hsl(var(--text-muted))]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        whileHover={{ opacity: 1 }}
      >
        🖱️ Drag to rotate • Scroll to zoom
      </motion.div>

      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
