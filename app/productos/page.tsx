'use client';

import { useState } from 'react';
import Link from 'next/link'
import { motion } from 'framer-motion';
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
              <div className="text-right">
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                  Consultar por WhatsApp
                </Button>
              </div>
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
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  );

  // NUEVO: Estado para filtro (sin paginación)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Obtener categorías únicas
  const categories = Array.from(new Set(featuredProducts.map(p => p.category)));

  // Filtrar productos por categoría
  const filteredProducts = selectedCategory
    ? featuredProducts.filter(p => p.category === selectedCategory)
    : featuredProducts;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <motion.div 
        className="bg-green-50 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-green-600 hover:text-green-700">Inicio</a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Productos</span>
          </div>
        </div>
      </motion.div>

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
              Nuestros Productos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre nuestra amplia gama de equipamiento científico y analítico de los mejores fabricantes mundiales
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtro de Categorías */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => { setSelectedCategory(null); }}
          >
            Todas
          </Button>
          {categories.map(cat => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              onClick={() => { setSelectedCategory(cat); }}
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Productos Destacados</h2>
            <p className="text-lg text-gray-600">Equipos de alta calidad con especificaciones técnicas detalladas</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={scaleIn}>
                <Card className="hover:shadow-xl transition-shadow duration-300 h-full">
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
                  </div>
                  <CardTitle className="text-xl md:text-2xl text-gray-900">{product.name}</CardTitle>
                 
                </CardHeader>
                <CardContent>
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Categorías de Productos</h2>
            <p className="text-lg text-gray-600">Explora nuestras diferentes líneas de equipamiento</p>
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
                </motion.div>
              );
            })}
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
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contamos con una amplia red de fabricantes mundiales. Contáctanos para productos específicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="https://wa.link/u2slo1" className="w-full h-full flex items-center">Solicitar Cotizacion</Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
