import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function MisionVision(){
  return(
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
  )
}
