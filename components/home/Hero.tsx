"use client"
import Link from 'next/link'
import { Button } from '@/components/ui/button'

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Autoplay, EffectCards } from 'swiper/modules';

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6}
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6}
};

const sliders = [
  'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800', 
  '/img2.jpg',
  '/img3.jpg'
]

export default function Hero(){
  return(
      <section className="relative py-20 bg-gradient-to-br from-lime-50 to-white overflow-hidden">
        <div className="absolute inset-0 z-10">
          <img
            src="/banner.jpg"
            alt="Laboratory equipment background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-lime-50/60 to-white/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInLeft}>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Import <span className="text-lime-500">Lilimlab</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Una empresa de equipamiento e instalación de equipos y suministros de laboratorio. 
                Estamos dedicados íntegramente a la comercialización de instrumental científico y analítico.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white">
                  <Link href="/productos" className="w-full h-full flex items-center justify-center">Ver Productos</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50">
                  <Link href="/contacto" className="w-full h-full flex items-center justify-center">Contactar Ahora</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div className="relative" {...fadeInRight}>
              <div className="">
                
              </div>
              <Swiper
                effect={'cards'}
                grabCursor={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, EffectCards]}
                className="bg-green-950 rounded-2xl shadow-2xl p-8"
              >
                {sliders.map((slide, key) => (
                  <SwiperSlide key={key} className="w-full h-64 object-cover rounded-xl p-4 bg-green-500 bg-opacity-50">
                    <img
                      src={slide}
                      alt="Equipos de laboratorio"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </section>    
  );
}      


