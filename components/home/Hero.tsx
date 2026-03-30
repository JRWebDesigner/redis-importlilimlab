"use client"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion, Variants } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCube, EffectCoverflow } from 'swiper/modules';
import { ArrowRight, Sparkles } from 'lucide-react';

const sliders = [
  '/lab1.jpg',
  '/lab2.jpg',
  '/lab3.webp'
]

// Animaciones sofisticadas
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
} satisfies Variants;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
} satisfies Variants;

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
} satisfies Variants;

const scaleVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
} satisfies Variants;

const rotateVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear" as const,
    },
  },
} satisfies Variants;

// Blob decorativo
const BlobDecoration = ({ position, delay }: { position: string, delay: number }) => (
  <motion.div
    className={`absolute ${position} rounded-full blur-3xl opacity-20 pointer-events-none`}
    variants={floatingVariants}
    animate="animate"
    transition={{ delay }}
  >
    <div className="w-96 h-96 bg-gradient-to-r from-lime-400 to-green-400 rounded-full"></div>
  </motion.div>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Fondo dinámico con degradado */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-lime-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(132,204,22,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(20,184,166,0.1),transparent_50%)]"></div>
      </div>

      {/* Elementos decorativos flotantes */}
      <BlobDecoration position="top-0 -left-40" delay={0} />
      <BlobDecoration position="bottom-0 -right-40" delay={1} />

      {/* Líneas decorativas animadas */}
      <motion.div
        className="absolute top-20 left-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-lime-500 to-transparent rounded-full blur-lg"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      ></motion.div>

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 lg:pt-32 lg:pb-32">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Lado izquierdo - Contenido de texto */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Badge superior */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-500/30 bg-lime-500/10 backdrop-blur-sm w-fit"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Sparkles className="w-4 h-4 text-lime-400" />
              <span className="text-sm font-semibold text-lime-300">Innovación en Laboratorio</span>
            </motion.div>

            {/* H1 mejorado */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-300 leading-tight">
                Import <br /> <span className="text-white">Lilimlab</span>
              </h1>
              <motion.div
                className="mt-2 h-1 w-24 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full"
                variants={scaleVariants}
                animate="animate"
              ></motion.div>
            </motion.div>

            {/* Descripción mejorada */}
            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md"
              variants={itemVariants}
            >
              Equipamiento profesional y soluciones avanzadas para laboratorios científicos.
              <span className="text-lime-300 font-semibold"> Precisión, calidad y excelencia</span> en cada instrumento.
            </motion.p>

            {/* Estadísticas */}
            <motion.div
              className="grid grid-cols-2 gap-4 py-6"
              variants={itemVariants}
            >
              {[
                { number: "500+", label: "Productos" },
                { number: "15+", label: "Años" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 rounded-lg border border-lime-500/20 bg-lime-500/5 backdrop-blur-sm hover:bg-lime-500/10 transition-all"
                  whileHover={{ scale: 1.05, borderColor: "rgba(132, 204, 22, 0.5)" }}
                >
                  <p className="text-2xl font-bold text-lime-400">{stat.number}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Botones mejorados */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white font-bold text-base shadow-lg shadow-lime-500/50 hover:shadow-lime-500/75 transition-all duration-300"
                >
                  <Link href="/productos" className="w-full h-full flex items-center justify-center gap-2">
                    <span>Ver Producto</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-lime-500/50 text-lime-300 hover:bg-lime-500/10 hover:border-lime-400 font-bold text-base backdrop-blur-sm transition-all duration-300"
                >
                  <Link href="/contacto" className="w-full h-full flex items-center justify-center gap-2">
                    <span>Contactar</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Lado derecho - Carrusel mejorado */}
          <motion.div
            className="relative h-full flex items-center justify-center py-8"
            variants={itemVariants}
          >
            {/* Elementos decorativos alrededor del carrusel */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-lime-500/10 to-emerald-500/5 backdrop-blur-xl border border-lime-500/20"
              animate={{
                borderColor: ["rgba(132, 204, 22, 0.2)", "rgba(16, 185, 129, 0.3)", "rgba(132, 204, 22, 0.2)"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>

            {/* Luz decorativa rotante */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-0 pointer-events-none"
              variants={rotateVariants}
              animate="animate"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-lime-500 via-transparent to-emerald-500 opacity-20"></div>
            </motion.div>

            {/* Carrusel principal */}
            <div className="relative z-10 w-full px-4">
              <Swiper
                effect={'cube'}
                grabCursor={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                modules={[Autoplay, EffectCube]}
                className="w-full"
              >
                {sliders.map((slide, key) => (
                  <SwiperSlide key={key} className="flex items-center justify-center">
                    <motion.div
                      className="w-full h-80 rounded-2xl overflow-hidden shadow-2xl shadow-lime-500/30 border border-lime-500/30"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src={slide}
                        alt="Equipos de laboratorio avanzados"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Indicadores circulares */}
              <motion.div
                className="flex justify-center gap-3 mt-8"
                variants={itemVariants}
              >
                {sliders.map((_, idx) => (
                  <motion.div
                    key={idx}
                    className="w-2 h-2 rounded-full bg-lime-500/40 hover:bg-lime-400 transition-all"
                    whileHover={{ scale: 1.5 }}
                  ></motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Línea inferior decorativa */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-500 to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      ></motion.div>
    </section>   
  );
}
