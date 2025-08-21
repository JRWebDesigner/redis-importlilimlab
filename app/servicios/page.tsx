'use client';

import Link from 'next/link'
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Target,
  Eye,
  Trophy,
  TrendingUp,
  Award,
  Users,
  CheckCircle,
  Shield,
  Heart,
  Phone
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
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
  transition: { duration: 0.5, ease: "easeOut" }
};

export default function AboutUsPage() {
  const companyPillars = [
    {
      icon: Trophy,
      title: "Éxito Competitivo",
      description: "Integración organizacional y especialización por áreas",
      details: [
        "Percepción de necesidades futuras de clientes",
        "Capital humano con conocimiento técnico especializado",
        "Soluciones eficientes para la toma de decisiones",
        "Organización integrada y especializada"
      ]
    },
    {
      icon: TrendingUp,
      title: "Competitividad",
      description: "Alto rendimiento con costos optimizados",
      details: [
        "Experiencia en productos de alta tecnología",
        "Mejor compromiso entre rendimiento y costo",
        "Precios de mercado competitivos",
        "Productos importados con gran rendimiento"
      ]
    },
    {
      icon: Target,
      title: "Misión",
      description: "Importación y distribución de equipos, consumibles y reactivos químicos",
      details: [
        "Cobertura a nivel nacional",
        "Atención personalizada en venta, postventa y asesoría técnica",
        "Equipo especializado y altamente comprometido",
        "Satisfacción de necesidades en sector industrial, analítico e investigación"
      ]
    },
    {
      icon: Eye,
      title: "Visión",
      description: "Liderazgo en distribución de productos químicos en Bolivia",
      details: [
        "Aportar al quehacer diario del país",
        "Contribuir al desarrollo científico-tecnológico",
        "Otorgar servicio de excelencia a clientes",
        "Ser referente en el mercado boliviano"
      ]
    }
  ];

  const qualityServices = [
    {
      icon: Award,
      title: "Calidad de Servicio",
      description: "Factor diferenciador que nos ha permitido ser la preferencia de muchos"
    },
    {
      icon: Users,
      title: "Orientación al Cliente",
      description: "Perseverancia y visión para satisfacer y superar expectativas"
    },
    {
      icon: Shield,
      title: "Política de Calidad",
      description: "Entrega de productos de calidad con logística eficiente desde el proveedor hasta su entrega"
    }
  ];

  const qualityDetails = [
    {
      step: "01",
      title: "Infraestructura de Distribución",
      description: "Cadena de distribución desde el punto de origen hasta la entrega final"
    },
    {
      step: "02",
      title: "Cumplimiento Normativo",
      description: "Cumplimiento con requisitos legales y reglamentarios aplicables al producto"
    },
    {
      step: "03",
      title: "Entrega a Tiempo",
      description: "Entregas puntuales con altos estándares de calidad"
    },
    {
      step: "04",
      title: "Satisfacción del Cliente",
      description: "Compromiso con la satisfacción de expectativas de clientes y partes interesadas"
    },
    {
      step: "05",
      title: "Liderazgo de Mercado",
      description: "Posición líder en los diferentes mercados en que participamos"
    },
    {
      step: "06",
      title: "Recursos y Perseverancia",
      description: "Recursos para satisfacer y superar las expectativas del cliente"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-green-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-green-600 hover:text-green-700">Inicio</a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Sobre Nosotros</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conozca más sobre n-innovations biosupply bol. ltda., nuestra misión, visión y compromiso con la calidad
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pilares Fundamentales</h2>
            <p className="text-lg text-gray-600">Los valores que nos definen como empresa</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {companyPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{pillar.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pillar.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Quality Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compromiso con la Calidad</h2>
            <p className="text-lg text-gray-600">Nuestro diferenciador en el mercado</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {qualityServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div key={index} className="text-center" variants={scaleIn}>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Quality Details */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Compromiso de Calidad</h2>
            <p className="text-lg text-gray-600">Un enfoque integral para garantizar la excelencia en nuestro servicio</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {qualityDetails.map((step, index) => (
              <motion.div key={index} className="relative" variants={scaleIn}>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < qualityDetails.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-green-300"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
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
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesita más información sobre nosotros?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de especialistas está listo para responder sus preguntas y brindarle la información que necesite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="https://wa.link/tgsbjm" className="w-full h-full flex items-center">Solicitar Catalogo</Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
