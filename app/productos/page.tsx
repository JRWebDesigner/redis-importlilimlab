'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '@/animations/variants';
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
import { getProducts } from '@/lib/getQueries';

export default function ProductosPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fechData() {
      setLoading(true);
      const data = await getProducts();
      setProducts(Array.isArray(data.res) ? data.res : []);
      setLoading(false);
    }
    fechData();
  }, []);
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

  const categories = ['Todas', 'Reactivos y Químicos', 'Material de Vidrio', 'Equipos de Análisis', 'Reactivos de Grado Industrial', ''];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const filteredProducts = Array.isArray(products)
    ? products.filter(product => {
        const matchesSearch =
          searchTerm === '' ||
          product.name.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
          selectedCategory === 'Todas' || product.category === selectedCategory;

        return matchesSearch && matchesCategory;
      })
    : [];

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
              {loading ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cargando productos...</h3>
                  <p className="text-gray-600 mb-6">
                    Por favor espera mientras cargamos los productos.
                  </p>
                </motion.div>
              ) : filteredProducts.length > 0 ? (
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {filteredProducts.map((product) => (
                    <ProductCard key={product._id} product={product} />
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
