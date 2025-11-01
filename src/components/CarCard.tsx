import { motion } from 'framer-motion';
import { Car } from '@/data/cars';

interface CarCardProps {
  car: Car;
  isActive: boolean;
  onClick: () => void;
}

const CarCard = ({ car, isActive, onClick }: CarCardProps) => {
  return (
    <motion.div
      onClick={onClick}
      className={`glass-panel p-6 cursor-pointer transition-all duration-400 ${
        isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-50'
      }`}
      whileHover={{ scale: isActive ? 1.02 : 0.92 }}
      style={{
        borderColor: isActive ? `rgba(${car.themeColorRGB}, 0.5)` : undefined,
        boxShadow: isActive ? `0 0 30px rgba(${car.themeColorRGB}, 0.3)` : undefined
      }}
    >
      {/* Car Image */}
      <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Car Info */}
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[3px] text-[hsl(var(--text-muted))]">
          {car.brand}
        </p>
        
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          {car.model}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-[hsl(var(--text-secondary))]">
          <span>{car.specs.horsepower} HP</span>
          <span>•</span>
          <span>{car.specs.zeroToHundred}</span>
          <span>•</span>
          <span>{car.specs.price}</span>
        </div>

        {/* Color Indicator */}
        <div className="flex items-center justify-end pt-2">
          <div
            className="w-4 h-4 rounded-full border-2 border-white"
            style={{ backgroundColor: car.themeColor }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
