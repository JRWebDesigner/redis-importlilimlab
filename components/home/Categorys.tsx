'use client'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Link from 'next/link'

const categorys = [
  {
    title: "Reactivos Quimicos",
    background: "/marcas/marca12.jpg"
  },
  {
    title: "Estudio de Suelos",
    background: "/marcas/marca2.jpg"
  },
  {
    title: "Envubadoras",
    background: "/marcas/marca4.jpg"
  },
  {
    title: "Balanzas",
    background: "/marcas/marca5.jpg"
  },
  {
    title: "Dispositivos",
    background: "/marcas/marca7.jpg"
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
        {/* Encabezado */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-full border border-lime-500/30 bg-lime-500/10 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-lime-400" />
            <span className="text-sm font-semibold text-lime-300">Nuestras Categorías</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-emerald-600 mb-4">
            Nuestras Categorías
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-lime-500 to-emerald-500 rounded-full mx-auto mb-6"
            animate={{
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          ></motion.div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora nuestras categorías de equipamiento científico
          </p>
        </motion.div>

        {/* Grid 2 columnas - Primeras 4 categorías */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8 px-4 md:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categorys.slice(0, 4).map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="h-[250px]"
            >
              <motion.div
                className="group relative h-full rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                {/* Imagen de fondo */}
                <img
                  src={category.background}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Capa de gradiente verde oscuro a claro */}
                <div className="absolute inset-0 bg-gradient-to-b from-green-900/90 via-green-600/70 to-green-400/50 group-hover:from-green-900/80 group-hover:via-green-600/60 group-hover:to-green-400/40 transition-all duration-300"></div>

                {/* Contenido */}
                <div className="relative z-10 h-full flex flex-col items-center justify-start p-8">
                  {/* Título alineado a izquierda */}
                  <motion.h3
                    className="text-3xl md:text-4xl font-black text-white text-left mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {category.title}
                  </motion.h3>

                  {/* Botón elegante y minimalista */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href={`https://wa.me/59176265987?text=Hola%20deseo%20más%20información%20sobre%20${category.name}`} target="_blank" rel="noopener noreferrer">
                      <button className="px-10 py-3 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-green-600 transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-lg">
                        Contactar
                      </button>
                    </a>
                  </motion.div>
                </div>

                {/* Efecto shine hover */}
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

        {/* Categoría 5 - Centrada sola */}
        <motion.div 
          className="max-w-2xl md:max-w-xl mx-auto px-4 md:px-0"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="h-[250px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -10 }}
          >
            {/* Categoría 5 */}
            <div
              className="group relative h-full rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={categorys[4].background}
                alt={categorys[4].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-green-900/90 via-green-600/70 to-green-400/50 group-hover:from-green-900/80 group-hover:via-green-600/60 group-hover:to-green-400/40 transition-all duration-300"></div>
              <div className="relative z-10 h-full flex flex-col items-start justify-start p-8">
                <h3 className="text-3xl md:text-4xl font-black text-white text-left mb-4">
                  {categorys[4].title}
                </h3>
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contacto">
                    <button className="px-10 py-3 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-green-600 transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-lg">
                      Contactar
                    </button>
                  </Link>
                </motion.div>
              </div>
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.3), transparent)',
                }}
              ></motion.div>
            </div>
          </motion.div>
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

