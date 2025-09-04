'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {fadeInUp , staggerContainer, scaleIn} from '@/animations/variants'
import { Button } from '@/components/ui/button';
import {
  Microscope,
  FlaskConical,
  Beaker,
  TestTube,
  Zap,
  Search,
  Thermometer,
  ShieldAlert
} from 'lucide-react';

import Breadcrumb from '@/components/productos/Breadcrumb';
import SearchAndFilterBar from '@/components/productos/SearchAndFilterBar';
import ProductCard from '@/components/productos/ProductCard';
import ProductCategoryCard from '@/components/productos/ProductCategoryCard';
import CTASection from '@/components/productos/CTASection';


export default function ProductosPage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Microscopio Biológico Trinocular BM-180T",
      category: "Microscopios",
      description: "Microscopio biológico trinocular profesional con iluminación LED, ideal para laboratorios de investigación y educación superior.",
      keywords: ["microscopio", "biológico", "trinocular", "LED", "investigación", "educación"],
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
      keywords: ["espectrofotómetro", "UV", "visible", "análisis", "cuantitativo", "cualitativo", "precisión"],
      features: [
        "Rango espectral: 190-1100 nm",
        "Ancho de banda espectral: 1.8 nm",
        "Exactitud fotométrica: ±0.002 Abs",
        "Software PC con base de datos integrada",
        "Compartimento de muestras termostatizado",
        "Lámpara de deuterio y tungsteno"
      ],
      images: [
        "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3735780/pexels-photo-3735780.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8942978/pexels-photo-8942978.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 3,
      name: "Balanza Analítica Digital BA-220",
      category: "Equipos de Análisis",
      description: "Balanza analítica de precisión con pantalla LCD y calibración automática, ideal para mediciones exactas en laboratorio.",
      keywords: ["balanza", "analítica", "digital", "precisión", "LCD", "calibración", "medición"],
      features: [
        "Capacidad: 220g con precisión de 0.1mg",
        "Pantalla LCD retroiluminada",
        "Calibración automática interna",
        "Cámara de pesaje con puertas corredizas",
        "Interfaz RS-232 para conexión a PC",
        "Funciones estadísticas integradas"
      ],
      specifications: {
        "Capacidad máxima": "220g",
        "Precisión": "0.1mg",
        "Repetibilidad": "±0.1mg",
        "Tiempo de estabilización": "3 segundos",
        "Dimensiones": "350x215x320 mm"
      },
      images: [
        "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8942977/pexels-photo-8942977.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    }
  ];

  const categorys = [
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
    },
    {
      title: "Reactivos de Grado Industrial",
      icon: ShieldAlert,
      items: ["Solventes orgánicos", "Sales inorgánicas", "Reactivos para síntesis", "Indicadores químicos"]
    }
  ];

  const categories = ['Todas', ...Array.from(new Set(featuredProducts.map(p => p.category)))];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  // Calcula los productos filtrados directamente:
  const filteredProducts = featuredProducts.filter(product => {
    const matchesSearch =
      searchTerm === '' ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'Todas' || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />
      {/* Page Header */}
      <div className="container mx-auto px-6">
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

        <SearchAndFilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          filteredProductsCount={filteredProducts.length}
        />
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
                {filteredProducts.length > 0 ? (
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron productos</h3>
                    <p className="text-gray-600 mb-6">
                      Intenta con otros términos de búsqueda o selecciona una categoría diferente.
                    </p>
                    <Button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('Todas');
                      }}
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-50"
                    >
                      Limpiar filtros
                    </Button>
                  </motion.div>
                )}             
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
              {categorys.map((category, index) => (
                <ProductCategoryCard key={index} product={category} />
              ))}
            </motion.div>
          </div>
        </section>
      </div>
      <CTASection />
    </div>
  );
}
