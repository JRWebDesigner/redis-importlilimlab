'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Microscope, 
  FlaskConical, 
  TestTube, 
  Zap, 
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';

export default function ProductosPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const featuredProducts = [
    {
      id: 1,
      name: "Microscopio Biológico Trinocular BM-180T",
      category: "Microscopios",
      price: "$2,850",
      description: "Microscopio biológico trinocular profesional con iluminación LED, ideal para laboratorios de investigación y educación superior.",
      features: [
        "Objetivos acromáticos 4x, 10x, 40x, 100x",
        "Oculares WF10x/18mm",
        "Iluminación LED de 3W con control de intensidad",
        "Condensador Abbe N.A. 1.25 con diafragma iris",
        "Platina mecánica de 140x130mm",
        "Enfoque coaxial macro y micrométrico"
      ],
      specifications: {
        "Magnificación": "40x - 1000x",
        "Sistema óptico": "Infinito corregido",
        "Tubo": "Trinocular 30°",
        "Iluminación": "LED 3W",
        "Peso": "8.5 kg"
      },
      images: [
        "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8942977/pexels-photo-8942977.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 2,
      name: "Espectrofotómetro UV-Vis SP-2000",
      category: "Equipos de Análisis",
      price: "$4,200",
      description: "Espectrofotómetro UV-Visible de doble haz con software avanzado para análisis cuantitativo y cualitativo de alta precisión.",
      features: [
        "Rango espectral: 190-1100 nm",
        "Ancho de banda espectral: 1.8 nm",
        "Exactitud fotométrica: ±0.002 Abs",
        "Software PC con base de datos integrada",
        "Compartimento de muestras termostatizado",
        "Lámpara de deuterio y tungsteno"
      ],
      specifications: {
        "Rango espectral": "190-1100 nm",
        "Resolución": "1.8 nm",
        "Exactitud": "±0.002 Abs",
        "Reproducibilidad": "±0.001 Abs",
        "Dimensiones": "650x450x280 mm"
      },
      images: [
        "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3735780/pexels-photo-3735780.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8942978/pexels-photo-8942978.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    }
  ];

  const ProductCarousel = ({ images, productName }: { images: string[], productName: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
      <div className="relative">
        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={`${productName} - Imagen ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  const ProductDetailModal = ({ product }: { product: typeof featuredProducts[0] }) => (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-green-800">{product.name}</DialogTitle>
        <DialogDescription className="text-lg text-gray-600">
          {product.description}
        </DialogDescription>
      </DialogHeader>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        <div>
          <ProductCarousel images={product.images} productName={product.name} />
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <Badge className="bg-green-100 text-green-800">{product.category}</Badge>
              <span className="text-3xl font-bold text-green-600">{product.price}</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Características Principales</h4>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Especificaciones Técnicas</h4>
            <div className="bg-gray-50 rounded-lg p-4">
              <dl className="space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <dt className="font-medium text-gray-700">{key}:</dt>
                    <dd className="text-gray-600">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button className="flex-1 bg-green-600 hover:bg-green-700">
              Solicitar Cotización
            </Button>
            <Button variant="outline" className="flex-1 border-green-600 text-green-600 hover:bg-green-50">
              Más Información
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-green-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-green-600 hover:text-green-700">Inicio</a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Productos</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestros Productos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre nuestra amplia gama de equipamiento científico y analítico de los mejores fabricantes mundiales
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Productos Destacados</h2>
            <p className="text-lg text-gray-600">Equipos de alta calidad con especificaciones técnicas detalladas</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-green-100 text-green-800">{product.category}</Badge>
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Ver Detalles Completos
                      </Button>
                    </DialogTrigger>
                    <ProductDetailModal product={product} />
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Categorías de Productos</h2>
            <p className="text-lg text-gray-600">Explora nuestras diferentes líneas de equipamiento</p>
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
                    <Button variant="outline" className="w-full mt-4 border-green-600 text-green-600 hover:bg-green-50">
                      Ver Productos
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contamos con una amplia red de fabricantes mundiales. Contáctanos para productos específicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              Solicitar Cotización
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Contactar Especialista
            </Button>
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
