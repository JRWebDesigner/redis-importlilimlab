import Link from 'next/link'
import {motion} from 'framer-motion'
import { Button } from '@/components/ui/button';

export default function CTA(){
  return(
    <motion.section 
        className="py-16 bg-lime-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Listo para equipar tu laboratorio?
          </motion.h2>
          <motion.p 
            className="text-xl text-lime-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contáctanos para obtener información detallada sobre precios y especificaciones de nuestros equipos.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="secondary" className="bg-white text-lime-600 hover:bg-gray-100">
              <Link href="https://wa.link/s7ujnz" className="w-full h-full flex items-center">Consultar por WhatsApp</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
  )
}
