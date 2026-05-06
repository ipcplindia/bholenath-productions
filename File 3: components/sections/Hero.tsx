'use client';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import ConsoleCore from '../3d/ConsoleCore';
import { siteConfig } from '@/config/site.config';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#030305]">
      {/* Background video placeholder - replace later with your 8K console video */}
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#111118_0%,#030305_70%)] z-0"></div>
      
      {/* 3D Divine AI Console */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }} style={{ background: 'transparent' }}>
          <ConsoleCore />
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} color="#D4AF37" intensity={3} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-7xl md:text-8xl font-bold tracking-[-4px] gold-sheen text-white">
            {siteConfig.name}
          </h1>
          <p className="text-4xl md:text-5xl text-gold mt-2 tracking-widest">{siteConfig.tagline}</p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-2xl text-[#F6F1E7] max-w-2xl mx-auto"
          >
            {siteConfig.presentation}
          </motion.p>
          
          <p className="mt-12 text-sm tracking-[2px] text-[#A7AAB4] font-light">
            {siteConfig.founder}
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-16 px-10 py-6 bg-gold text-[#030305] font-semibold text-lg rounded-2xl flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-gold/50 transition-all"
          >
            ENTER THE DIVINE CONSOLE
            <span className="text-2xl">→</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll prompt */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gold text-xs tracking-[3px] flex flex-col items-center"
      >
        SCROLL TO ACTIVATE
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold to-transparent mt-3"></div>
      </motion.div>
    </section>
  );
}
