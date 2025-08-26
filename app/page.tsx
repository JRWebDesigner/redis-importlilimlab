'use client';
import Link from 'next/link'
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import { Autoplay, EffectCards } from 'swiper/modules';

import { 
  Beaker,
  Microscope, 
  FlaskConical, 
  Thermometer,
  Award,
  Users,
  Clock,
  CheckCircle,
  Target,
  Eye
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6}
};

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

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5}
};

export default function HomePage() {
  const products = [
    {
      title: "Equipos de Análisis",
      icon: Microscope,
      items: ["Microscopios", "Espectrofotómetros", "Balanzas analíticas", "pH metros"]
    },
    {
      title: "Material de Vidrio",
      icon: FlaskConical,
      items: ["Matraces", "Pipetas", "Buretas", "Probetas graduadas"]
    },
    {
      title: "Instrumentos de Medición",
      icon: Thermometer,
      items: ["Termómetros", "Calibradores", "Medidores", "Sensores"]
    },
    {
      title: "Reactivos y Químicos",
      icon: Beaker,
      items: ["Reactivos analíticos", "Estándares", "Soluciones buffer", "Indicadores"]
    }
  ];

  const features = [
    {
      title: "Calidad Garantizada",
      description: "Productos certificados con estándares internacionales de calidad",
      icon: Award
    },
    {
      title: "Soporte Técnico",
      description: "Equipo especializado para instalación y mantenimiento",
      icon: Users
    },
    {
      title: "Entrega Rápida",
      description: "Tiempos de entrega optimizados para tu laboratorio",
      icon: Clock
    },
    {
      title: "Garantía Extendida",
      description: "Respaldo completo en todos nuestros equipos",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-lime-50 to-white overflow-hidden">
        {/* Background Image */}
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
                <SwiperSlide className="w-full h-64 object-cover rounded-xl p-4 bg-blue-500">
                  <img
                    src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Equipos de laboratorio"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </SwiperSlide>
                 <SwiperSlide className="w-full h-64 object-cover rounded-xl p-4 bg-green-500">
                  <img
                    src="/img2.jpg"
                    alt="Equipos de laboratorio"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </SwiperSlide>
                 <SwiperSlide className="w-full h-64 object-cover rounded-xl p-4 bg-orange-500">
                  <img
                    src="/img3.jpg"
                    alt="Equipos de laboratorio"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </SwiperSlide>
              </Swiper>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegir Import Lilimlab?</h2>
            <p className="text-lg text-gray-600">Contamos con el soporte de fabricantes de prestigio mundial</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center group hover:transform hover:scale-105 transition-transform duration-300"
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                    <IconComponent className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Productos</h2>
            <p className="text-lg text-gray-600">Equipamiento científico y analítico de la más alta calidad</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-green-100 hover:border-green-300 h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full mt-4 border-green-600 text-green-600 hover:bg-green-50">
                      Ver Productos
                    </Button>
                  </CardContent>
                </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-lime-100 h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Nuestra Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Proveer equipamiento científico y analítico de la más alta calidad, 
                  brindando soluciones integrales para laboratorios con el respaldo 
                  de fabricantes de prestigio mundial y un servicio técnico especializado.
                </p>
              </CardContent>
            </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-lime-100 h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Nuestra Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Ser la empresa líder en la comercialización de instrumental científico 
                  y analítico, reconocida por la excelencia en nuestros productos y 
                  servicios, contribuyendo al desarrollo científico y tecnológico del país.
                </p>
              </CardContent>
            </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-lime-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Listo para equipar tu laboratorio?
          </motion.h2>
          <motion.p 
            className="text-xl text-lime-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contáctanos para obtener información detallada sobre precios y especificaciones de nuestros equipos.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="secondary" className="bg-white text-lime-600 hover:bg-gray-100">
              <Link href="https://wa.link/ryfuv1" className="w-full h-full flex items-center">Consultar por WhatsApp</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
}
