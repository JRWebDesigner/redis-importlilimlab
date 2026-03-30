'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react'

export default function CTA(){
  return(
    <section className="relative w-full py-24 overflow-hidden bg-white">
      {/* Fondo dinámico con gradiente */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(132,204,22,0.05),transparent_60%)]"></div>
      </div>

      {/* Elementos decorativos animados */}
      <motion.div
        className="absolute top-0 -left-40 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
        animate={{
          y: [-30, 30, -30],
          x: [-20, 20, -20],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <div className="w-full h-full bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 -right-40 w-80 h-80 rounded-full blur-3xl opacity-5 pointer-events-none"
        animate={{
          y: [30, -30, 30],
          x: [20, -20, 20],
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      >
        <div className="w-full h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
      </motion.div>

      {/* Líneas decorativas */}
      <motion.div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-lime-500 to-transparent rounded-full blur-lg"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scaleX: [0.8, 1.2, 0.8],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      ></motion.div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-500/30 bg-lime-500/10 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-lime-400" />
            <span className="text-sm font-semibold text-lime-300">Listo para comenzar</span>
          </motion.div>

          {/* Título principal */}
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            ¿Listo para equipar tu laboratorio?
          </motion.h2>

          {/* Línea decorativa */}
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>

          {/* Descripción */}
          <motion.p 
          className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }} >
          
            Contáctanos para obtener información detallada sobre precios, especificaciones y soluciones personalizadas para tu laboratorio.
          </motion.p>

          {/* Stats rápidos */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 py-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              { number: "500+", label: "Productos" },
              { number: "15+", label: "Años" },
              { number: "24/7", label: "Soporte" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="p-4 rounded-xl border border-lime-500/20 bg-lime-500/5 backdrop-blur-sm hover:bg-lime-500/10 transition-all"
                whileHover={{ scale: 1.05, borderColor: "rgba(132, 204, 22, 0.5)" }}
              >
                <p className="text-2xl font-bold text-lime-400">{stat.number}</p>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Botones */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Botón primario - WhatsApp */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white font-bold text-base shadow-lg shadow-lime-500/50 hover:shadow-lime-500/75 transition-all duration-300 group"
              >
                <Link href="https://wa.link/s7ujnz" className="w-full h-full flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Consultar por WhatsApp</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            {/* Botón secundario - Contacto */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-lime-500/50 text-lime-300 hover:bg-lime-500/10 hover:border-lime-400 font-bold text-base backdrop-blur-sm transition-all duration-300 group"
              >
                <Link href="/contacto" className="w-full h-full flex items-center justify-center gap-2">
                  <span>Formulario de Contacto</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Texto adicional */}
          <motion.p
            className="text-sm text-gray-400 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            ⏱️ Respuesta rápida en menos de 24 horas • 🌍 Cobertura nacional e internacional
          </motion.p>
        </motion.div>
      </div>

      {/* Línea decorativa inferior */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-500 to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      ></motion.div>
    </section>
  )
}
