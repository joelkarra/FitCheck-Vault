import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Outfit } from '../data';

interface ProductCardProps {
  outfit: Outfit;
}

export const ProductCard: React.FC<ProductCardProps> = ({ outfit }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <Link to={`/outfit/${outfit.id}`} className="block aspect-[3/4] overflow-hidden">
        <img
          src={outfit.mainImage}
          alt={outfit.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white text-stone-900 px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform">
            View Fit
          </span>
        </div>
      </Link>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400">
            {outfit.category}
          </span>
          <button className="text-stone-300 hover:text-[#E60023] transition-colors">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
          </button>
        </div>
        <h3 className="text-lg font-serif font-medium mb-1 group-hover:text-stone-600 transition-colors">
          {outfit.title}
        </h3>
        <p className="text-stone-500 text-sm line-clamp-2 font-light">
          {outfit.description}
        </p>
      </div>
    </motion.div>
  );
};
