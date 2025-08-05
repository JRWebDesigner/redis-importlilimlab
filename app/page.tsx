'use client';
import Link from 'next/link'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Microscope, 
  FlaskConical, 
  TestTube, 
  Zap, 
  Globe, 
  Award, 
  Truck, 
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  CheckCircle
} from 'lucide-react';

export default function Home() {
  const products = [
    {
      category: "Microscopios",
      description: "Microscopios ópticos y electrónicos de alta precisión",
      icon: Microscope,
      items: ["Microscopios biológicos", "Microscopios estéreo", "Microscopios digitales", "Accesorios y lentes"]
    },
    {
      category: "Equipos de Análisis",
      description: "Instrumentos analíticos de última generación",
      icon: FlaskConical,
      items: ["Espectrofotómetros", "Cromatógrafos", "Balanzas analíticas", "pH metros"]
    },
    {
      category: "Material de Vidrio",
      description: "Cristalería de laboratorio de calidad premium",
      icon: TestTube,
      items: ["Matraces y vasos", "Pipetas y buretas", "Tubos de ensayo", "Placas petri"]
    },
    {
      category: "Equipos Eléctricos",
      description: "Instrumentos eléctricos y electrónicos especializados",
      icon: Zap,
      items: ["Centrífugas", "Incubadoras", "Autoclaves", "Agitadores magnéticos"]
    }
  ];

  const services = [
    {
      icon: Globe,
      title: "Fabricantes de Prestigio Mundial",
      description: "Contamos con el respaldo de los mejores fabricantes internacionales de equipamiento científico."
    },
    {
      icon: Truck,
      title: "Envío Directo desde Fábricas",
      description: "Ofrecemos la posibilidad de enviar equipos directamente desde las fábricas para mayor eficiencia."
    },
    {
      icon: GraduationCap,
      title: "Capacitación y Entrenamiento",
      description: "Brindamos capacitación especializada según las necesidades de cada equipo y especialidad."
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description: "Todos nuestros productos cuentan con garantía y soporte técnico especializado."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-green-50 to-green-500">
        <img src="/banner.jpg" className="absolute w-full h-full object-cover opacity-30" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Equipamiento e Instalación de
              <span className="text-green-700"> Laboratorios</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Nos dedicamos íntegramente a la comercialización de instrumental científico y analítico, 
              con el respaldo de fabricantes de prestigio mundial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3" onClick={() => window.location.href = '/productos'}>
                Ver Catálogo
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3" onClick={() => window.location.href = '/contacto'}>
                Contactar
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Alcance Mundial</h3>
                <p className="text-gray-600">Fabricantes de prestigio internacional</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Envío Directo</h3>
                <p className="text-gray-600">Desde las fábricas hasta su laboratorio</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Capacitación</h3>
                <p className="text-gray-600">Entrenamiento especializado incluido</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section id="productos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Catálogo de Productos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de equipamiento científico y analítico para laboratorios
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-green-100 hover:border-green-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <CardTitle className="text-green-800">{product.category}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
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

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Brindamos un servicio integral desde la selección hasta la instalación y capacitación
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Acerca de ImportLiliMLab
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Somos una empresa especializada en la importación y comercialización de equipamiento 
                científico y analítico de alta calidad. Nos dedicamos íntegramente a brindar 
                soluciones integrales para laboratorios.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fabricantes de Prestigio Mundial</h4>
                    <p className="text-gray-600">Trabajamos con las mejores marcas internacionales</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Envío Directo</h4>
                    <p className="text-gray-600">Desde las fábricas hasta su ubicación</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Capacitación Especializada</h4>
                    <p className="text-gray-600">Entrenamiento según especialidades</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Calidad Garantizada</h3>
                <p className="text-gray-600 mb-6">
                  Todos nuestros productos cuentan con garantía internacional y soporte técnico especializado
                </p>
                <Badge className="bg-green-600 text-white px-4 py-2">
                  +15 años de experiencia
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Estamos aquí para ayudarte con tus necesidades de equipamiento de laboratorio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">info@importlilimlab.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
              <p className="text-gray-300">Ciudad, País</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <Microscope className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">ImportLiliMLab</span>
              </div>
              <p className="text-gray-300">
                Especialistas en equipamiento científico y analítico para laboratorios.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Productos</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Microscopios</li>
                <li>Equipos de Análisis</li>
                <li>Material de Vidrio</li>
                <li>Equipos Eléctricos</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Importación</li>
                <li>Instalación</li>
                <li>Capacitación</li>
                <li>Soporte Técnico</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-300">
                <li>+1 (555) 123-4567</li>
                <li>info@importlilimlab.com</li>
                <li>Ciudad, País</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 ImportLiliMLab. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
