'use client'
import { motion } from 'framer-motion'
import { brands } from '@/lib/brands'
import { Sparkles, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function MarcasPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Mantiene fondo oscuro */}
      <section className="relative w-full py-24 overflow-hidden">
        {/* Fondo dinámico */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-lime-950"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(132,204,22,0.1),transparent_60%)]"></div>
        </div>

        {/* Elementos decorativos */}
        <motion.div
          className="absolute top-1/4 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
          animate={{
            y: [-20, 20, -20],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="w-full h-full bg-gradient-to-r from-lime-400 to-green-400 rounded-full"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
          animate={{
            y: [20, -20, 20],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          <div className="w-full h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
        </motion.div>

        {/* Contenido */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-500/30 bg-lime-500/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-lime-400" />
              <span className="text-sm font-semibold text-lime-300">Nuestros Aliados</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-300">
              Marcas que Trabajamos
            </h1>

            <motion.div
              className="h-1 w-32 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full mx-auto"
              animate={{
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Trabajamos con las <span className="text-lime-300 font-semibold">mejores marcas mundiales</span> en equipamiento científico
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid de Marcas */}
      <section className="relative w-full py-24 overflow-hidden bg-white">
        {/* Fondo */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(132,204,22,0.05),transparent_50%)]"></div>
        </div>

        {/* Contenido */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                variants={itemVariants}
                whileHover={{
                  y: -15,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.a
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative h-64 rounded-2xl overflow-hidden backdrop-blur-xl border border-lime-500/30 bg-white p-6 hover:border-lime-500/50 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center shadow-md hover:shadow-lg"
                  whileHover={{
                    borderColor: "rgba(132, 204, 22, 0.6)",
                    boxShadow: "0 20px 40px rgba(132, 204, 22, 0.1)",
                  }}
                >
                  {/* Efecto de fondo */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-lime-500/5 to-transparent"></div>
                  </div>

                  {/* Contenido - Solo Imagen/Logo */}
                  <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                    {/* Logo grande */}
                    <motion.div
                      className="w-40 h-40 flex items-center justify-center"
                      whileHover={{
                        scale: 1.1,
                      }}
                    >
                      <img 
                        src={brand.logo}
                        alt={brand.name}
                        className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                      />
                    </motion.div>

                    {/* Nombre */}
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-lime-600 transition-colors text-center">
                      {brand.name}
                    </h3>
                  </div>

                  {/* Borde animado */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-lime-400 to-emerald-400 opacity-0 group-hover:opacity-20 -z-10 blur-sm"
                    animate={{
                      borderColor: ["rgba(132, 204, 22, 0)", "rgba(132, 204, 22, 0.3)", "rgba(132, 204, 22, 0)"],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-24 overflow-hidden bg-white">
        {/* Fondo */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(132,204,22,0.05),transparent_60%)]"></div>
        </div>

        {/* Contenido */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.h2 
            className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-emerald-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            ¿Necesitas alguna marca específica?
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contáctanos para solicitar productos de cualquier marca o acceder a soluciones personalizadas.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white font-bold shadow-lg shadow-lime-500/50 hover:shadow-lime-500/75 transition-all"
              >
                <Link href="/contacto" className="flex items-center gap-2">
                  Contactarte Aquí
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Línea decorativa */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-500 to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      ></motion.div>
    </main>
  )
}
