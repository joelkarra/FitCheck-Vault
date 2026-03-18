import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-stone-100 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="inline-block mb-6">
            <Logo className="items-start" />
          </Link>
          <p className="text-stone-500 max-w-md font-light leading-relaxed">
            Fitcheck Vault is a curated collection of modest and stylish outfits for women. We help you discover complete looks and shop them easily through trusted platforms.
          </p>
        </div>

        <div>
          <h4 className="font-serif font-medium mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-stone-500">
            <li><Link to="/" className="hover:text-stone-900 transition-colors">Home</Link></li>
            <li><Link to="/shop" className="hover:text-stone-900 transition-colors">Shop All</Link></li>
            <li><Link to="/categories" className="hover:text-stone-900 transition-colors">Categories</Link></li>
            <li><Link to="/about" className="hover:text-stone-900 transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-medium mb-6">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-stone-100 flex items-center justify-center text-stone-400 hover:bg-stone-900 hover:text-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-stone-100 flex items-center justify-center text-stone-400 hover:bg-stone-900 hover:text-white transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-stone-100 flex items-center justify-center text-stone-400 hover:bg-stone-900 hover:text-white transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-stone-50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-stone-400">
          © {new Date().getFullYear()} Fitcheck Vault. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-stone-400">
          <a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
