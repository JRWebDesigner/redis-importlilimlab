"use client"
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link'
export default function CTASection() {
  return (
    <motion.section 
      className="py-16 bg-green-600"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          ¿No encuentras lo que buscas?
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Contamos con una amplia red de fabricantes mundiales. Contáctanos para productos específicos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://wa.link/s7ujnz" target='_blank'>
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Solicitar Cotización
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
