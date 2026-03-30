'use client'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function MisionVision(){
  const sections = [
    {
      title: "Nuestra Misión",
      emoji: "",
      description: "Proveer equipamiento científico y analítico de la más alta calidad, brindando soluciones integrales para laboratorios con el respaldo de fabricantes de prestigio mundial y un servicio técnico especializado.",
      color: "from-lime-400 to-emerald-400"
    },
    {
      title: "Nuestra Visión",
      emoji: "",
      description: "Ser la empresa líder en la comercialización de instrumental científico y analítico, reconocida por la excelencia en nuestros productos y servicios, contribuyendo al desarrollo científico y tecnológico del país.",
      color: "from-emerald-400 to-teal-400"
    }
  ];

  return(
    <section className="relative w-full py-24 overflow-hidden bg-white">
      {/* Fondo dinámico */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(132,204,22,0.04),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_70%,rgba(16,185,129,0.03),transparent_50%)]"></div>
      </div>

      {/* Elementos decorativos */}
      <motion.div
        className="absolute top-1/3 left-0 w-96 h-96 rounded-full blur-3xl opacity-8 pointer-events-none"
        animate={{
          x: [-50, 50, -50],
          y: [-30, 30, -30],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="w-full h-full bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        animate={{
          x: [50, -50, 50],
          y: [30, -30, 30],
        }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      >
        <div className="w-full h-full bg-gradient-to-r from-teal-400 to-emerald-300 rounded-full"></div>
      </motion.div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-500/30 bg-lime-500/10 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-lime-400" />
            <span className="text-sm font-semibold text-lime-300">Nuestros Valores</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-300">
            Misión & Visión
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -15,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="group relative h-full rounded-2xl overflow-hidden backdrop-blur-xl border border-lime-500/30 bg-white p-8 hover:border-lime-500/50 transition-all duration-300 shadow-sm hover:shadow-lg"
                whileHover={{
                  borderColor: "rgba(132, 204, 22, 0.6)",
                  boxShadow: "0 20px 60px rgba(132, 204, 22, 0.1)",
                }}
              >
                {/* Efecto de fondo */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-lime-500/5 to-transparent"></div>
                </div>

                {/* Contenido */}
                <div className="relative z-10 space-y-6">
                  {/* Título con línea decorativa */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-emerald-600 mb-3">
                      {section.title}
                    </h3>
                    <motion.div
                      className={`h-1 w-16 rounded-full bg-gradient-to-r ${section.color}`}
                      animate={{
                        scaleX: [0.8, 1.2, 0.8],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    ></motion.div>
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors">
                    {section.description}
                  </p>

                  {/* Puntos destacados con animación */}
                  <motion.div
                    className="flex gap-2 pt-4"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-lime-400 to-emerald-400"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                          scale: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      ></motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Borde animado */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-lime-400 to-emerald-400 opacity-0 group-hover:opacity-20 -z-10 blur-sm"
                  animate={{
                    borderColor: ["rgba(132, 204, 22, 0)", "rgba(132, 204, 22, 0.3)", "rgba(132, 204, 22, 0)"],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
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
