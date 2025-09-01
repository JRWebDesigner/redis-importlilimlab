import { motion } from 'framer-motion';

export default function Breadcrumb() {
  return (
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
  );
}