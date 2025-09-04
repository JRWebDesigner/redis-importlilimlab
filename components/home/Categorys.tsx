import { Microscope, FlaskConical, Thermometer, Beaker, ShieldAlert, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerContainer, scaleIn } from '@/animations/variants'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button';

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
export default function Categorys(){
  return(
    <section className="py-16 bg-gray-50">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Productos</h2>
            <p className="text-lg text-gray-600">Equipamiento científico y analítico de la más alta calidad</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:flex items-center justify-center gap-8 flex-wrap"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {categorys.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-green-100 hover:border-green-300 h-full lg:w-[300px]">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-600">
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
  )
}
