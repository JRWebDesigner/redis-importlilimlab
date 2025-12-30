'use client';
import Hero from '@/components/contacto/Hero'
import Info from '@/components/contacto/Info'
import ContactForm from '@/components/contacto/ContactForm'


import Link from 'next/link'


import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

import { 
  Microscope, 
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';


export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Info />
      <ContactForm />

      

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-lime-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitas información sobre precios?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contáctanos por WhatsApp y uno de nuestros especialistas te proporcionará información detallada sobre precios y especificaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-900 hover:bg-gray-100">
              <Link href="https://wa.link/s7ujnz" className="w-full h-full flex items-center">Consultar por WhatsApp</Link>
            </Button>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
