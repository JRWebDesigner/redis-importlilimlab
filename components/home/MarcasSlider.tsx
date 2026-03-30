'use client'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import { Sparkles } from 'lucide-react'
import { brands } from '@/lib/brands'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function MarcasSlider() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-white">
      {/* Fondo dinámico */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(132,204,22,0.04),transparent_60%)]"></div>
      </div>

      {/* Elementos decorativos */}
      <motion.div
        className="absolute top-1/2 -left-40 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
        animate={{
          y: [-30, 30, -30],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <div className="w-full h-full bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full"></div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 -right-40 w-80 h-80 rounded-full blur-3xl opacity-5 pointer-events-none"
        animate={{
          y: [30, -30, 30],
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      >
        <div className="w-full h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
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
            <span className="text-sm font-semibold text-lime-300">Marcas Confiables</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-300 mb-4">
            Las Mejores Marcas
          </h2>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full mx-auto mb-6"
            animate={{
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          ></motion.div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trabajamos con las marcas líderes en equipamiento científico a nivel mundial
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 16 },
              640: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="w-full"
          >
            {brands.slice(0, 8).map((brand, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className="h-full"
                >
                  <motion.div
                    className="group relative h-48 rounded-2xl overflow-hidden backdrop-blur-xl border border-lime-500/30 bg-white flex items-center justify-center hover:border-lime-500/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                    whileHover={{
                      borderColor: "rgba(132, 204, 22, 0.6)",
                      boxShadow: "0 20px 40px rgba(132, 204, 22, 0.08)",
                    }}
                  >
                    {/* Efecto de fondo */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-t from-lime-500/5 to-transparent"></div>
                    </div>

                    {/* Contenido */}
                    <div className="relative z-10 text-center space-y-3 w-full h-full flex flex-col items-center justify-center">
                      <motion.img
                        src={brand.logo}
                        alt={brand.name}
                        className="h-24 object-contain filter group-hover:brightness-110 transition-all duration-300"
                        whileHover={{
                          scale: 1.1,
                        }}
                      />
                      <p className="text-sm font-semibold text-gray-700 group-hover:text-lime-600 transition-colors">
                        {brand.name}
                      </p>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          className="text-center mt-8 text-sm text-gray-600"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ← Desliza para ver más marcas →
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
