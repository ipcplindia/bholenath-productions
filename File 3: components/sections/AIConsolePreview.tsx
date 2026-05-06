'use client';
import { motion } from 'framer-motion';

export default function AIConsolePreview() {
  return (
    <section className="py-24 bg-[#030305] border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-gold mb-8"
        >
          AI FILM CONSOLE PREVIEW
        </motion.h2>
        <motion.p className="max-w-lg mx-auto text-[#F6F1E7] mb-12">
          Real-time divine storytelling engine. Generate cinematic worlds with sacred sound.
        </motion.p>
        <div className="glass mx-auto max-w-md rounded-3xl p-8 text-left font-mono text-sm">
          <div className="flex justify-between text-gold mb-4">
            <span>CONSOLE v1.0</span>
            <span className="animate-pulse">● LIVE</span>
          </div>
          <div className="h-px bg-gold/30 my-4"></div>
          <div className="text-cyan">Prompt: "Create Mahakal warrior cinematic with Shivayonic score"</div>
          <div className="mt-6 text-emerald">GENERATING... 87% • Divine energy detected</div>
        </div>
      </div>
    </section>
  );
}
