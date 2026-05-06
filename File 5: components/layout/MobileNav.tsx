'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)} className="md:hidden text-gold">
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center gap-8 text-3xl"
          >
            <a href="#" className="text-gold" onClick={() => setOpen(false)}>UNIVERSE</a>
            <a href="#" className="text-gold" onClick={() => setOpen(false)}>FILMS</a>
            <a href="#" className="text-gold" onClick={() => setOpen(false)}>MUSIC</a>
            <a href="#" className="text-gold" onClick={() => setOpen(false)}>AI CONSOLE</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
