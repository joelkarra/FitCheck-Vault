import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Categories = () => {
  const categories = [
    {
      name: 'Casual Fits',
      desc: 'Effortless style for your everyday adventures.',
      image: 'https://picsum.photos/seed/cat-casual/800/1000',
      count: 124
    },
    {
      name: 'Party Wear',
      desc: 'Elegant silhouettes for your special occasions.',
      image: 'https://picsum.photos/seed/cat-party/800/1000',
      count: 86
    },
    {
      name: 'Office Wear',
      desc: 'Professional and polished modest attire.',
      image: 'https://picsum.photos/seed/cat-office/800/1000',
      count: 92
    },
    {
      name: 'Traditional / Ethnic',
      desc: 'Celebrating heritage with a modern modest twist.',
      image: 'https://picsum.photos/seed/cat-ethnic/800/1000',
      count: 110
    },
    {
      name: 'Minimal / Everyday',
      desc: 'Clean lines and neutral tones for a timeless look.',
      image: 'https://picsum.photos/seed/cat-minimal/800/1000',
      count: 145
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-stone-400 mb-4 block">
          Browse by Mood
        </span>
        <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6">Categories</h1>
        <p className="text-stone-500 font-light max-w-2xl mx-auto text-lg">
          Explore our collections organized by occasion and style preference.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent flex flex-col justify-end p-8">
              <span className="text-white/60 text-xs uppercase tracking-widest font-bold mb-2">
                {cat.count} Outfits
              </span>
              <h3 className="text-white text-3xl font-serif font-medium mb-2">{cat.name}</h3>
              <p className="text-white/70 text-sm font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                {cat.desc}
              </p>
              <Link
                to={`/shop?category=${cat.name.split(' ')[0]}`}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-stone-900 self-end transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500"
              >
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
