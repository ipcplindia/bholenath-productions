'use client';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site.config';
import { Youtube, Instagram, Music } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-gold/30"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-[#030305] font-bold text-xl">ॐ</div>
          <div>
            <span className="text-2xl font-bold tracking-tighter text-gold">{siteConfig.name}</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-gold transition-colors">UNIVERSE</a>
          <a href="#" className="hover:text-gold transition-colors">FILMS</a>
          <a href="#" className="hover:text-gold transition-colors">MUSIC</a>
          <a href="#" className="hover:text-gold transition-colors">AI CONSOLE</a>
          <a href="#" className="hover:text-gold transition-colors">SERVICES</a>
        </div>

        <div className="flex items-center gap-4">
          <a href={siteConfig.youtube} target="_blank" className="text-gold hover:scale-110 transition-transform"><Youtube size={22} /></a>
          <a href={siteConfig.youtubeMusic} target="_blank" className="text-gold hover:scale-110 transition-transform"><Music size={22} /></a>
          <a href={siteConfig.instagram} target="_blank" className="text-gold hover:scale-110 transition-transform"><Instagram size={22} /></a>
        </div>
      </div>
    </motion.nav>
  );
}
