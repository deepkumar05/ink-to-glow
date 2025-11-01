import { motion } from 'framer-motion';
import { cars } from '@/data/cars';
import { Trophy } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PerformanceSection = () => {
  const maxHP = Math.max(...cars.map(car => car.specs.horsepower));

  return (
    <section className="relative min-h-screen bg-[hsl(var(--matte-black))] py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4">
            PERFORMANCE METRICS
          </h2>
          <p className="text-xl text-[hsl(var(--text-secondary))]">
            Raw power, measured and compared
          </p>
        </motion.div>

        {/* Performance Bars */}
        <div className="max-w-6xl mx-auto space-y-8">
          {cars.map((car, index) => (
            <PerformanceBar
              key={car.id}
              car={car}
              maxHP={maxHP}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PerformanceBarProps {
  car: typeof cars[0];
  maxHP: number;
  delay: number;
}

const PerformanceBar = ({ car, maxHP, delay }: PerformanceBarProps) => {
  const barRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const percentage = (car.specs.horsepower / maxHP) * 100;
  const isLeader = car.specs.horsepower === maxHP;

  useEffect(() => {
    if (!barRef.current || !countRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate bar width
            gsap.to(barRef.current, {
              width: `${percentage}%`,
              duration: 1.5,
              delay: delay,
              ease: 'power2.out'
            });

            // Animate number count
            gsap.to(countRef.current, {
              innerHTML: car.specs.horsepower,
              duration: 1.5,
              delay: delay,
              snap: { innerHTML: 1 },
              ease: 'power2.out'
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(barRef.current);

    return () => observer.disconnect();
  }, [percentage, delay, car.specs.horsepower]);

  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Label */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-bold">{car.name}</h3>
          {isLeader && (
            <Trophy className="w-5 h-5" style={{ color: `rgb(${car.themeColorRGB})` }} />
          )}
        </div>
        <div className="flex items-center gap-4 text-sm text-[hsl(var(--text-secondary))]">
          <span ref={countRef}>0</span>
          <span>HP</span>
        </div>
      </div>

      {/* Bar Container */}
      <div className="relative h-4 bg-[hsl(var(--secondary))] rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="absolute inset-y-0 left-0 rounded-full transition-all"
          style={{
            width: '0%',
            backgroundColor: `rgb(${car.themeColorRGB})`,
            boxShadow: `0 0 20px rgba(${car.themeColorRGB}, 0.5)`
          }}
        />
      </div>
    </motion.div>
  );
};

export default PerformanceSection;
