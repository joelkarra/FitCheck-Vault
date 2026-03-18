import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ShoppingCart, Share2, Heart, ExternalLink } from 'lucide-react';
import { OUTFITS } from '../data';
import { cn } from '../lib/utils';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const outfit = OUTFITS.find((o) => o.id === id);

  if (!outfit) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-serif mb-4">Outfit not found</h2>
        <Link to="/" className="text-stone-900 underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors mb-8 group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Back to Collection
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Main Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl"
        >
          <img
            src={outfit.mainImage}
            alt={outfit.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-6 right-6 flex flex-col gap-3">
            <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-stone-900 hover:bg-white transition-colors">
              <Heart size={18} />
            </button>
            <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-stone-900 hover:bg-white transition-colors">
              <Share2 size={18} />
            </button>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-stone-400 mb-2 block">
              {outfit.category} Collection
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4 leading-tight">
              {outfit.title}
            </h1>
            <p className="text-stone-500 text-lg font-light leading-relaxed">
              {outfit.description}
            </p>
          </div>

          {/* Fit Breakdown */}
          <div className="mb-12">
            <h3 className="text-xl font-serif font-medium mb-6 flex items-center gap-2">
              <div className="w-6 h-[1px] bg-stone-900" />
              Fit Breakdown
            </h3>
            
            <div className="space-y-6">
              {outfit.items.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-4 rounded-2xl bg-white border border-stone-100 hover:border-stone-300 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="w-20 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-grow">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400">
                      {item.label}
                    </span>
                    <h4 className="text-stone-900 font-medium">{item.name}</h4>
                  </div>
                  <a
                    href={item.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-stone-900 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-stone-800 transition-colors"
                  >
                    Buy Now
                    <ExternalLink size={14} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pinterest Save */}
          <button className="flex items-center justify-center gap-3 w-full py-4 rounded-full border-2 border-[#E60023] text-[#E60023] font-semibold hover:bg-[#E60023] hover:text-white transition-all group">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
              className="group-hover:scale-110 transition-transform"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.16-.1-.95-.19-2.4.04-3.43.21-.93 1.34-5.69 1.34-5.69s-.34-.68-.34-1.69c0-1.58.92-2.76 2.06-2.76 0.97 0 1.44.73 1.44 1.61 0 0.98-.62 2.44-.94 3.8-.27 1.13.56 2.06 1.68 2.06 2.01 0 3.56-2.12 3.56-5.18 0-2.71-1.95-4.6-4.72-4.6-3.22 0-5.11 2.41-5.11 4.91 0 0.97.37 2.01.84 2.58.09.11.1.21.07.32-.08.33-.26 1.06-.3 1.2-.05.21-.16.25-.37.15-1.39-.65-2.26-2.67-2.26-4.3 0-3.5 2.54-6.71 7.33-6.71 3.85 0 6.83 2.74 6.83 6.4 0 3.82-2.41 6.9-5.75 6.9-1.12 0-2.18-.58-2.54-1.27l-.69 2.63c-.25.96-.92 2.16-1.37 2.9C10.06 23.83 11.01 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
            </svg>
            Save to Pinterest
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
