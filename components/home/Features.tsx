import {motion} from 'framer-motion'
import {staggerContainer, scaleIn} from '@/animations/variants'
import {Award, Users, Clock, CheckCircle} from 'lucide-react'

const features = [
    {
      title: "Calidad Garantizada",
      description: "Productos certificados con estándares internacionales de calidad",
      icon: Award
    },
    {
      title: "Soporte Técnico",
      description: "Equipo especializado para instalación y mantenimiento",
      icon: Users
    },
    {
      title: "Entrega Rápida",
      description: "Tiempos de entrega optimizados para tu laboratorio",
      icon: Clock
    },
    {
      title: "Garantía Extendida",
      description: "Respaldo completo en todos nuestros equipos",
      icon: CheckCircle
    }
  ];
  
export default function Features(){
  return(
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegir Import Lilimlab?</h2>
                <p className="text-lg text-gray-600">Contamos con el soporte de fabricantes de prestigio mundial</p>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div 
                      key={index} 
                      className="text-center group hover:transform hover:scale-105 transition-transform duration-300"
                      variants={scaleIn}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                        <IconComponent className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>
  );
}

