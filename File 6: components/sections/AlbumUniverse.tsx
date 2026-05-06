'use client';
import { motion } from 'framer-motion';
import { releases } from '@/data/releases';

export default function AlbumUniverse() {
  return (
    <section className="py-24 bg-[#030305]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center text-gold mb-16"
        >
          MERE PITA BHOLENATH JI ALBUM UNIVERSE
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {releases.filter(r => r.featured).map((release) => (
            <motion.div
              key={release.id}
              whileHover={{ rotate: 3, scale: 1.08 }}
              className="glass w-64 rounded-3xl p-6 text-center"
            >
              <div className="text-gold text-xs mb-2">{release.album}</div>
              <h3 className="text-xl font-semibold">{release.title}</h3>
              <div className="mt-8 h-2 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
