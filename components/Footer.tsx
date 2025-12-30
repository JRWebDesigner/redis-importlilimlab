"use client"
import Link from 'next/link'
import { motion } from 'framer-motion';
import { 
  Beaker, 
} from 'lucide-react';

export default function Footer(){
  return(
          <motion.footer 
        className="bg-gray-800 text-white py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Beaker className="w-8 h-8 text-green-400" />
                <span className="text-xl font-bold">Import Lilimlab</span>
              </div>
              <p className="text-gray-300">
                Equipamiento e instalación de equipos y suministros de laboratorio.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Menu</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/" className="hover:text-green-400 transition-colors">Inicio</Link></li>
                <li><Link href="/servicios" className="hover:text-green-400 transition-colors">Sobre Nosotros</Link></li>
                <li><Link href="/productos" className="hover:text-green-400 transition-colors">Productos</Link></li>
                <li><Link href="/contacto" className="hover:text-green-400 transition-colors">Contactos</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Lun - Vie: 9:00 - 19:00 <br />
Cerrado fin de semana</li>
                <li>Email: info@importlilimlab.com</li>
                <li>WhatsApp:+591 76265987</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Import Lilimlab. Todos los derechos reservados.</p>
          </div>
        </div>
      </motion.footer>
  )
}
