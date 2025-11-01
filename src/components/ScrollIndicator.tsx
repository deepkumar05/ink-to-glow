import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToGallery}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 cursor-pointer group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <motion.div
        className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-smooth"
        style={{ borderColor: `rgb(var(--theme-rgb))` }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 theme-text" />
      </motion.div>
    </motion.button>
  );
};

export default ScrollIndicator;
