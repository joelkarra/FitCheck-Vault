import React from 'react';
import { cn } from '../lib/utils';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onSelectCategory }) => {
  const categories = [
    'All',
    'Casual',
    'Party',
    'Office',
    'Traditional',
    'Minimal'
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
            selectedCategory === category
              ? "bg-stone-900 text-white border-stone-900 shadow-lg scale-105"
              : "bg-white text-stone-500 border-stone-100 hover:border-stone-300 hover:text-stone-900"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
