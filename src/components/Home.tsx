import React from 'react';
import { motion } from 'motion/react';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { OUTFITS } from '../data';

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredOutfits = selectedCategory === 'All'
    ? OUTFITS
    : OUTFITS.filter(o => o.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Hero />

      <section id="shop" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">The Collection</h2>
          <p className="text-stone-500 font-light max-w-2xl mx-auto">
            Browse our curated selection of modest outfits, designed for the modern woman who values elegance and comfort.
          </p>
        </div>

        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="pinterest-grid">
          {filteredOutfits.map((outfit) => (
            <ProductCard key={outfit.id} outfit={outfit} />
          ))}
        </div>
      </section>

      {/* Aesthetic Instagram Section */}
      <section className="py-24 bg-beige-100 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-serif font-medium mb-2">Aesthetic Inspiration</h2>
              <p className="text-stone-500 font-light">Follow us for daily modest style guides</p>
            </div>
            <button className="text-stone-900 font-medium border-b border-stone-900 pb-1 hover:text-stone-500 hover:border-stone-500 transition-all">
              @fitcheckvault
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['style', 'fashion', 'modest', 'aesthetic'].map((seed, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden group">
                <img
                  src={`https://picsum.photos/seed/${seed}/600/600`}
                  alt="Inspiration"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
