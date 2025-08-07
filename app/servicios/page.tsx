'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Microscope, 
  Globe, 
  Truck, 
  GraduationCap,
  Award,
  Settings,
  Users,
  Clock,
  CheckCircle,
  Phone
} from 'lucide-react';

export default function ServiciosPage() {
  const mainServices = [
    {
      icon: Globe,
      title: "Fabricantes de Prestigio Mundial",
      description: "Contamos con el respaldo de los mejores fabricantes internacionales de equipamiento científico.",
      details: [
        "Red global de fabricantes certificados",
        "Productos con estándares internacionales",
        "Garantía directa de fábrica",
        "Actualizaciones tecnológicas constantes"
      ]
    },
    {
      icon: Truck,
      title: "Envío Directo desde Fábricas",
      description: "Ofrecemos la posibilidad de enviar equipos directamente desde las fábricas para mayor eficiencia.",
      details: [
        "Reducción de tiempos de entrega",
        "Menor manipulación del producto",
        "Costos optimizados de logística",
        "Seguimiento en tiempo real"
      ]
    },
    {
      icon: GraduationCap,
      title: "Capacitación y Entrenamiento",
      description: "Brindamos capacitación especializada según las necesidades de cada equipo y especialidad.",
      details: [
        "Entrenamiento personalizado",
        "Certificación de operadores",
        "Manuales en español",
        "Soporte técnico continuo"
      ]
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description: "Todos nuestros productos cuentan con garantía y soporte técnico especializado.",
      details: [
        "Garantía internacional extendida",
        "Servicio técnico especializado",
        "Repuestos originales disponibles",
        "Mantenimiento preventivo"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Settings,
      title: "Instalación y Puesta en Marcha",
      description: "Servicio completo de instalación y configuración de equipos en sus instalaciones."
    },
    {
      icon: Users,
      title: "Consultoría Técnica",
      description: "Asesoramiento especializado para la selección del equipamiento más adecuado."
    },
    {
      icon: Clock,
      title: "Mantenimiento Preventivo",
      description: "Programas de mantenimiento para asegurar el óptimo funcionamiento de los equipos."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consulta Inicial",
      description: "Analizamos sus necesidades específicas y requerimientos técnicos."
    },
    {
      step: "02",
      title: "Selección de Equipos",
      description: "Recomendamos los equipos más adecuados según su presupuesto y aplicación."
    },
    {
      step: "03",
      title: "Cotización Detallada",
      description: "Proporcionamos cotización completa incluyendo equipos, instalación y capacitación."
    },
    {
      step: "04",
      title: "Importación y Logística",
      description: "Gestionamos todo el proceso de importación y entrega en sus instalaciones."
    },
    {
      step: "05",
      title: "Instalación y Capacitación",
      description: "Instalamos los equipos y capacitamos a su personal para su uso óptimo."
    },
    {
      step: "06",
      title: "Soporte Continuo",
      description: "Brindamos soporte técnico y mantenimiento para asegurar el funcionamiento óptimo."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ImportLiliMLab</h1>
                <p className="text-sm text-green-600">Equipamiento Científico</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-green-600 transition-colors">Inicio</a>
              <a href="/productos" className="text-gray-700 hover:text-green-600 transition-colors">Productos</a>
              <a href="/servicios" className="text-green-600 font-semibold">Servicios</a>
              <a href="/contacto" className="text-gray-700 hover:text-green-600 transition-colors">Contacto</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-green-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-green-600 hover:text-green-700">Inicio</a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Servicios</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos un servicio integral desde la consultoría inicial hasta el soporte técnico continuo
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicios Principales</h2>
            <p className="text-lg text-gray-600">Soluciones integrales para equipamiento de laboratorio</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicios Adicionales</h2>
            <p className="text-lg text-gray-600">Complementamos nuestra oferta con servicios especializados</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Proceso de Trabajo</h2>
            <p className="text-lg text-gray-600">Un enfoque sistemático para garantizar el éxito de su proyecto</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
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
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-green-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para comenzar su proyecto?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de especialistas está listo para ayudarle a encontrar la solución perfecta para su laboratorio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Contactar Ahora
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
