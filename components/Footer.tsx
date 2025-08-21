"use client"
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
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-green-400 transition-colors">Instalación</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Mantenimiento</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Calibración</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Soporte Técnico</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Lun - Vie: 9:00 - 19:00 <br />
Cerrado fin de semana</li>
                <li>Email: info@importlilimlab.com</li>
                <li>WhatsApp:+591 62437743</li>
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
