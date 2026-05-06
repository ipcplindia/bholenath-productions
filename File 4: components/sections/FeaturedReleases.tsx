'use client';
import { motion } from 'framer-motion';
import { releases } from '@/data/releases';
import Image from 'next/image';

export default function FeaturedReleases() {
  return (
    <section className="py-24 bg-[#07070B]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-gold text-center mb-16 tracking-tighter"
        >
          FEATURED RELEASES
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {releases.map((release) => (
            <motion.div
              key={release.id}
              whileHover={{ y: -12, scale: 1.03 }}
              className="glass rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64">
                <Image
                  src={release.thumbnail}
                  alt={release.title}
                  fill
                  className="object-cover transition-all group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-gold text-xs tracking-widest">{release.category}</div>
                  <h3 className="text-2xl font-semibold text-white mt-1">{release.title}</h3>
                  <p className="text-sm text-[#F6F1E7]/80 mt-2 line-clamp-2">{release.description}</p>
                </div>
              </div>
              <div className="px-6 py-5 flex items-center justify-between text-sm">
                <span className="text-[#A7AAB4]">{release.duration} • {release.mood}</span>
                <a href={release.youtubeUrl} target="_blank" className="text-gold hover:underline flex items-center gap-1">
                  WATCH ON YOUTUBE →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
