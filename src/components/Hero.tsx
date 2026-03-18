import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1920&h=1080"
          alt="Fashion Collection"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-beige-50/50 via-transparent to-beige-50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs uppercase tracking-[0.3em] font-semibold text-stone-500 mb-4 block"
        >
          Curated Modest Fashion
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-6"
        >
          Modest Fashion, <br />
          <span className="italic">Styled Beautifully</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
        >
          Discover elegant outfits curated for you. We help you find complete looks and shop them easily through trusted platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button className="bg-stone-900 text-white px-8 py-4 rounded-full flex items-center gap-2 mx-auto group hover:bg-stone-800 transition-all hover:scale-105">
            Explore Collection
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
