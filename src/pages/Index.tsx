import { ThemeProvider } from '@/contexts/ThemeContext';
import HeroSection from '@/sections/HeroSection';
import GallerySection from '@/sections/GallerySection';
import PerformanceSection from '@/sections/PerformanceSection';
import ContactSection from '@/sections/ContactSection';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="overflow-x-hidden">
        <HeroSection />
        <GallerySection />
        <PerformanceSection />
        <ContactSection />
      </div>
    </ThemeProvider>
  );
};

export default Index;
