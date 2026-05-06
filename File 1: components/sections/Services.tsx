'use client';
import { motion } from 'framer-motion';
import { services } from '@/data/services'; // will create in next step

export default function Services() {
  return (
    <section className="py-24 bg-[#07070B]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-gold text-center mb-16 tracking-tighter"
        >
          SERVICES
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl hover:border-gold/50 transition-colors"
            >
              <div className="text-4xl mb-6">🔥</div>
              <h3 className="text-2xl font-semibold text-white">{service}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
