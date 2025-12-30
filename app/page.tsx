"use client"
import { useState, useEffect } from 'react';
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Categorys from '@/components/home/Categorys'
import MisionVision from '@/components/home/MisionVision'
import CTA from '@/components/home/CTA'
import { X } from 'lucide-react';

export default function HomePage() {
  const [showModal, setShowModal] = useState(true);

  // Opcional: Cerrar modal con tecla ESC
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    
    if (showModal) {
      document.addEventListener('keydown', handleEscKey);
      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  return (
    <div className="min-h-screen bg-white">
      {/* Overlay oscuro que difumina el fondo */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          {/* Modal en el centro */}
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all"
            onClick={(e: React.MouseEvent) => e.stopPropagation()} // Prevenir cierre al hacer clic dentro
          >
            {/* Encabezado del modal */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">!</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Aviso Importante</h3>
                  <p className="text-sm text-gray-500">Actualización de contacto</p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
                aria-label="Cerrar aviso"
              >
                <X size={24} />
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Estamos cambiando de número</h2>
                <p className="text-gray-600 mb-6">
                  Para brindarte un mejor servicio, hemos actualizado nuestro número de contacto.
                </p>
              </div>

              {/* Número destacado */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 text-center mb-6 border border-blue-100">
                <p className="text-sm text-gray-500 mb-2">Nuevo número de contacto:</p>
                <a 
                  href="tel:59176265987" 
                  className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition-colors block"
                >
                  +591 762 65987
                </a>
                <p className="text-sm text-gray-500 mt-2">Disponible las 24 horas</p>
              </div>

              {/* Información adicional */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">WhatsApp disponible en el mismo número</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Atención personalizada inmediata</p>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex space-x-4">
                <button
                  onClick={() => {
                    window.location.href = 'tel:59176265987';
                  }}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Llamar ahora</span>
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  Continuar al sitio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contenido principal */}
      <div className={`${showModal ? 'opacity-30' : 'opacity-100'} transition-opacity duration-300`}>
        <Hero />
        <Features />
        <Categorys />
        <MisionVision />
        <CTA />
      </div>
    </div>
  );
}
