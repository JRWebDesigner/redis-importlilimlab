'use client'
import { motion, Variants } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Link from 'next/link'

const categorys = [
  {
    title: "Reactivos Quimicos",
    background: "/marcas/marca12.jpg",
    color: "from-blue-900/90 via-blue-600/70 to-blue-400/50",
    hoverColor: "hover:text-blue-600"
  },
  {
    title: "Estudio de Suelos",
    background: "/marcas/marca2.jpg",
    color: "from-amber-900/90 via-amber-600/70 to-amber-400/50",
    hoverColor: "hover:text-amber-600"
  },
  {
    title: "Envasadoras",
    background: "/marcas/marca4.jpg",
    color: "from-red-900/90 via-red-600/70 to-red-400/50",
    hoverColor: "hover:text-red-600"
  },
  {
    title: "Balanzas",
    background: "/marcas/marca5.jpg",
    color: "from-purple-900/90 via-purple-600/70 to-purple-400/50",
    hoverColor: "hover:text-purple-600"
  },
  {
    title: "Dispositivos",
    background: "/marcas/marca7.jpg",
    color: "from-teal-900/90 via-teal-600/70 to-teal-400/50",
    hoverColor: "hover:text-teal-600"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} satisfies Variants;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
} satisfies Variants;

export default function Categorys(){
  return(
    <section className="relative w-full py-24 overflow-hidden bg-white">
      {/* Fondo dinámico */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(132,204,22,0.05),transparent_60%)]"></div>
      </div>

      {/* Elementos decorativos flotantes */}
      <motion.div
        className="absolute top-1/4 -left-40 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
        animate={{
          y: [-20, 20, -20],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="w-full h-full bg-gradient-to-r from-lime-400 to-green-400 rounded-full"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full blur-3xl opacity-5 pointer-events-none"
        animate={{
          y: [20, -20, 20],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <div className="w-full h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
      </motion.div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid 2x3 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 md:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card del título - Primera celda (superior izquierda) */}
          <motion.div 
            variants={itemVariants}
            className="h-[250px]"
          >
            <motion.div
              className="group relative h-full rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-lime-600 to-emerald-600 flex flex-col items-center justify-center p-8"
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">Servicios</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4">
                Nuestros Servicios
              </h2>
              <motion.div
                className="h-1 w-24 bg-white rounded-full mx-auto mb-6"
                animate={{
                  scaleX: [0.8, 1.2, 0.8],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              <p className="text-lg text-white text-center">
                Equipamiento científico de alta calidad
              </p>
            </motion.div>
          </motion.div>

          {/* Primeras 3 categorías (posiciones 2, 3 del grid) */}
          {categorys.slice(0, 3).map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="h-[250px]"
            >
              <motion.div
                className="group relative h-full rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <img
                  src={category.background}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${category.color} group-hover:opacity-80 transition-all duration-300`}></div>
                <div className="relative z-10 h-full flex flex-col items-start justify-start p-8">
                  <motion.h3
                    className="text-3xl md:text-4xl font-black text-white text-left mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {category.title}
                  </motion.h3>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href={`https://wa.me/59176265987?text=Hola%20deseo%20más%20información%20sobre%20${category.title}`} target="_blank" rel="noopener noreferrer">
                      <button className={`px-10 py-3 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-lg ${category.hoverColor}`}>
                        Contactar
                      </button>
                    </a>
                  </motion.div>
                </div>
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.3), transparent)',
                  }}
                ></motion.div>
              </motion.div>
            </motion.div>
          ))}

          {/* Siguientes 2 categorías (fila 2, posiciones 1 y 2 del grid) */}
          {categorys.slice(3, 5).map((category, index) => (
            <motion.div 
              key={index + 3} 
              variants={itemVariants}
              className="h-[250px]"
            >
              <motion.div
                className="group relative h-full rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <img
                  src={category.background}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${category.color} group-hover:opacity-80 transition-all duration-300`}></div>
                <div className="relative z-10 h-full flex flex-col items-start justify-start p-8">
                  <motion.h3
                    className="text-3xl md:text-4xl font-black text-white text-left mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {category.title}
                  </motion.h3>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href={`https://wa.me/59176265987?text=Hola%20deseo%20más%20información%20sobre%20${category.title}`} target="_blank" rel="noopener noreferrer">
                      <button className={`px-10 py-3 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-lg ${category.hoverColor}`}>
                        Contactar
                      </button>
                    </a>
                  </motion.div>
                </div>
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.3), transparent)',
                  }}
                ></motion.div>
              </motion.div>
            </motion.div>
          ))}
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
