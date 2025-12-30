"use client"
import { useState } from 'react';
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Categorys from '@/components/home/Categorys'
import MisionVision from '@/components/home/MisionVision'
import CTA from '@/components/home/CTA'

export default function HomePage() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      {/* Banner de cambio de número */}
      {showBanner && (
        <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-black py-3 px-4 z-50 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex-1 text-center">
              <span className="font-semibold">⚠️ IMPORTANTE:</span> Estamos cambiando nuestro número de celular. Nuevo contacto: 
              <a href="tel:59176265987" className="mx-1 font-bold text-blue-700 hover:text-blue-800 underline">
                +591 76265987
              </a>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              className="ml-4 text-black hover:text-gray-800 font-bold"
              aria-label="Cerrar aviso"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      
      {/* Espacio para que el contenido no quede oculto bajo el banner fijo */}
      {showBanner && <div className="pt-14"></div>}
      
      <Hero />
      <Features />
      <Categorys />
      <MisionVision />
      <CTA />
    </div>
  );
}
