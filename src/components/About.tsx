import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Heart, Shield, Globe } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
            <img
              src="https://picsum.photos/seed/about-fashion/800/1000"
              alt="About Fitcheck Vault"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-beige-300 rounded-3xl -z-0 opacity-50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-stone-400 mb-4 block">
            Our Story
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-medium mb-8 leading-tight">
            Curating Elegance, <br />
            <span className="italic">One Fit at a Time</span>
          </h1>
          <p className="text-stone-500 text-lg font-light leading-relaxed mb-8">
            Fitcheck Vault was born from a simple observation: modest fashion is beautiful, but finding complete, styled looks can be a challenge. We wanted to create a sanctuary where elegance meets modesty, providing a curated experience for the modern woman.
          </p>
          <p className="text-stone-500 text-lg font-light leading-relaxed mb-10">
            We are not just an affiliate platform; we are your personal style vault. Every outfit is hand-picked, every accessory is thoughtfully paired, and every link leads to a trusted platform where you can bring the look to life.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-3xl font-serif font-medium mb-2">500+</h4>
              <p className="text-stone-400 text-sm uppercase tracking-widest font-bold">Curated Fits</p>
            </div>
            <div>
              <h4 className="text-3xl font-serif font-medium mb-2">50k+</h4>
              <p className="text-stone-400 text-sm uppercase tracking-widest font-bold">Style Lovers</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            icon: <Heart className="text-stone-900" />,
            title: "Curated with Love",
            desc: "Every piece is selected for its quality, style, and adherence to modest principles."
          },
          {
            icon: <Shield className="text-stone-900" />,
            title: "Trusted Platforms",
            desc: "We only link to reputable e-commerce sites like Amazon, Myntra, and Ajio."
          },
          {
            icon: <Globe className="text-stone-900" />,
            title: "Global Inspiration",
            desc: "Our styles draw from global trends while maintaining a timeless, elegant aesthetic."
          }
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-10 rounded-3xl bg-white border border-stone-100 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-12 h-12 bg-beige-100 rounded-2xl flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-serif font-medium mb-4">{feature.title}</h3>
            <p className="text-stone-500 font-light leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
