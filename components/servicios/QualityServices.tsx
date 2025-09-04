import {motion} from 'framer-motion'
import {staggerContainer, scaleIn} from '@/animations/variants'
import {Award, Users, Shield} from 'lucide-react'

const qualityServices = [
    {
      icon: Award,
      title: "Calidad de Servicio",
      description: "Factor diferenciador que nos ha permitido ser la preferencia de muchos"
    },
    {
      icon: Users,
      title: "Orientación al Cliente",
      description: "Perseverancia y visión para satisfacer y superar expectativas"
    },
    {
      icon: Shield,
      title: "Política de Calidad",
      description: "Entrega de productos de calidad con logística eficiente desde el proveedor hasta su entrega"
    }
  ];
  
export default function QualityServices(){
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compromiso con la Calidad</h2>
            <p className="text-lg text-gray-600">Nuestro diferenciador en el mercado</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {qualityServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div key={index} className="text-center" variants={scaleIn}>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
  )
}
