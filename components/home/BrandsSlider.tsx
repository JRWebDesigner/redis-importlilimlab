'use client'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { brands } from '@/lib/brands'
import { Sparkles } from 'lucide-react'

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

export default function BrandsSlider() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Fondo dinámico */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-lime-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(132,204,22,0.08),transparent_60%)]"></div>
      </div>

      {/* Elementos decorativos */}
      <motion.div
        className="absolute top-1/2 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        animate={{
          x: [-50, 50, -50],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="w-full h-full bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/2 -right-40 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
        animate={{
          x: [50, -50, 50],
        }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
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
            <span className="text-sm font-semibold text-lime-300">Partners Globales</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-300 mb-4">
            Marcas que Trabajamos
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full mx-auto mb-6"
            animate={{
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          ></motion.div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Colaboramos con las <span className="text-lime-300 font-semibold">mejores marcas</span> del mundo en equipamiento científico
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: '!bg-lime-500',
            }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 24,
              },
            }}
            className="pb-12"
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={brand.id}>
                <motion.div
                  className="group relative h-64 rounded-2xl overflow-hidden backdrop-blur-xl border border-lime-500/20 bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-6 hover:border-lime-400/50 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center"
                  whileHover={{
                    borderColor: "rgba(132, 204, 22, 0.5)",
                    boxShadow: "0 20px 40px rgba(132, 204, 22, 0.1)",
                    y: -10,
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {/* Efecto de fondo */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-lime-500/5 to-transparent"></div>
                  </div>

                  {/* Logo grande */}
                  <motion.div
                    className="text-6xl mb-4 filter group-hover:brightness-125 transition-all"
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                    }}
                  >
                    {brand.logo}
                  </motion.div>
                  {/* Borde animado */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-lime-400 to-emerald-400 opacity-0 group-hover:opacity-20 -z-10 blur-sm"
                    animate={{
                      borderColor: ["rgba(132, 204, 22, 0)", "rgba(132, 204, 22, 0.3)", "rgba(132, 204, 22, 0)"],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Estilos personalizados para pagination */}
        <style>{`
          .swiper-pagination-bullet {
            background-color: rgba(132, 204, 22, 0.3);
            width: 10px;
            height: 10px;
          }
          .swiper-pagination-bullet-active {
            background-color: rgb(132, 204, 22);
          }
        `}</style>
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
