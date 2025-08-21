'use client';

import { motion } from 'framer-motion';
import Link from 'next/link'
export default function Header(){
  return(
      <motion.header 
        className="bg-white shadow-sm border-b border-green-100 p-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.png" className="w-[240px] h-auto" />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">Inicio</Link>
              <Link href="/productos" className="text-gray-700 hover:text-green-600 transition-colors">Productos</Link>
              <Link href="/servicios" className="text-gray-700 hover:text-green-600 transition-colors">Servicios</Link>
              <Link href="/contacto" className="text-gray-700 hover:text-green-600 transition-colors">Contacto</Link>
            </nav>
          </div>
        </div>
      </motion.header>
  )
}
