'use client';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site.config';

export default function StudioIdentityStrip() {
  return (
    <section className="py-8 bg-[#111118] border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-sm tracking-widest text-[#A7AAB4]">
        <motion.div whileHover={{ color: '#D4AF37' }} className="flex items-center gap-3">
          <span className="text-gold text-xl">◉</span>
          BHOLENATH PRODUCTIONS
        </motion.div>
        <motion.div whileHover={{ color: '#D4AF37' }} className="flex items-center gap-3">
          <span className="text-gold text-xl">◉</span>
          SHIVAYONIC MUSIC
        </motion.div>
        <motion.div whileHover={{ color: '#D4AF37' }} className="flex items-center gap-3">
          <span className="text-gold text-xl">◉</span>
          SHIVAYONIC STUDIOS
        </motion.div>
        <motion.div whileHover={{ color: '#D4AF37' }} className="flex items-center gap-3">
          <span className="text-gold text-xl">◉</span>
          {siteConfig.presentation}
        </motion.div>
      </div>
    </section>
  );
}
