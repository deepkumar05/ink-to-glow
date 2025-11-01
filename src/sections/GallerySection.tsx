import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cars } from '@/data/cars';
import CarCard from '@/components/CarCard';
import { useTheme } from '@/contexts/ThemeContext';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCar, setSelectedCar] = useState<typeof cars[0] | null>(null);
  const { updateTheme } = useTheme();

  const handleCarClick = (index: number) => {
    setActiveIndex(index);
    updateTheme(cars[index].themeColor, cars[index].themeColorRGB);
  };

  const handlePrev = () => {
    const newIndex = activeIndex === 0 ? cars.length - 1 : activeIndex - 1;
    handleCarClick(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex === cars.length - 1 ? 0 : activeIndex + 1;
    handleCarClick(newIndex);
  };

  const activeCar = cars[activeIndex];

  return (
    <section id="gallery" className="relative min-h-screen bg-[hsl(var(--deep-gray))] py-20">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4">
          THE COLLECTION
        </h2>
        <div 
          className="w-24 h-1 mx-auto rounded-full"
          style={{ backgroundColor: `rgb(var(--theme-rgb))` }}
        />
      </motion.div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cars.map((car, index) => (
            <CarCard
              key={car.id}
              car={car}
              isActive={index === activeIndex}
              onClick={() => handleCarClick(index)}
            />
          ))}
        </div>

        {/* Active Car Details */}
        <motion.div
          className="glass-panel p-8 md:p-12 max-w-5xl mx-auto"
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            borderColor: `rgba(${activeCar.themeColorRGB}, 0.5)`,
            boxShadow: `0 0 40px rgba(${activeCar.themeColorRGB}, 0.2)`
          }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Image */}
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={activeCar.image}
                alt={activeCar.name}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right: Details */}
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[4px] text-[hsl(var(--text-muted))] mb-2">
                  {activeCar.brand}
                </p>
                <h3 className="text-4xl md:text-5xl font-black mb-4">
                  {activeCar.model}
                </h3>
                <p className="text-lg text-[hsl(var(--text-secondary))] italic">
                  {activeCar.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs uppercase text-[hsl(var(--text-muted))]">Power</p>
                  <p className="text-2xl font-bold theme-text">{activeCar.specs.horsepower} HP</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase text-[hsl(var(--text-muted))]">Torque</p>
                  <p className="text-2xl font-bold">{activeCar.specs.torque}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase text-[hsl(var(--text-muted))]">0-100 km/h</p>
                  <p className="text-2xl font-bold theme-text">{activeCar.specs.zeroToHundred}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase text-[hsl(var(--text-muted))]">Top Speed</p>
                  <p className="text-2xl font-bold">{activeCar.specs.topSpeed}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase text-[hsl(var(--text-muted))]">Engine</p>
                  <p className="text-lg font-semibold">{activeCar.specs.engine}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase text-[hsl(var(--text-muted))]">Price</p>
                  <p className="text-lg font-semibold theme-text">{activeCar.specs.price}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4 pt-4">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full border-2 transition-smooth hover:scale-110"
                  style={{ borderColor: `rgb(var(--theme-rgb))` }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex-1 text-center">
                  <span className="text-sm text-[hsl(var(--text-muted))]">
                    {activeIndex + 1} / {cars.length}
                  </span>
                </div>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full border-2 transition-smooth hover:scale-110"
                  style={{ borderColor: `rgb(var(--theme-rgb))` }}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
