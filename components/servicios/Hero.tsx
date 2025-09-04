import Link from 'next/link'
import {motion} from 'framer-motion'

export default function Hero(){
  return(
    <>
      {/* Breadcrumb */}
      <div className="bg-green-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-green-600 hover:text-green-700">Inicio</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Sobre Nosotros</span>
          </div>
        </div>
      </div>

      {/* Title */}
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
              Conozca más sobre import lilimlab, nuestra misión, visión y compromiso con la calidad
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
