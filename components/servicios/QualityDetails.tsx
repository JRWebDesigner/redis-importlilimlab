import {motion} from 'framer-motion'
import {staggerContainer, scaleIn} from '@/animations/variants'

const qualityDetails = [
    {
      step: "01",
      title: "Infraestructura de Distribución",
      description: "Cadena de distribución desde el punto de origen hasta la entrega final"
    },
    {
      step: "02",
      title: "Cumplimiento Normativo",
      description: "Cumplimiento con requisitos legales y reglamentarios aplicables al producto"
    },
    {
      step: "03",
      title: "Entrega a Tiempo",
      description: "Entregas puntuales con altos estándares de calidad"
    },
    {
      step: "04",
      title: "Satisfacción del Cliente",
      description: "Compromiso con la satisfacción de expectativas de clientes y partes interesadas"
    },
    {
      step: "05",
      title: "Liderazgo de Mercado",
      description: "Posición líder en los diferentes mercados en que participamos"
    },
    {
      step: "06",
      title: "Recursos y Perseverancia",
      description: "Recursos para satisfacer y superar las expectativas del cliente"
    }
  ];
export default function QualityDetails(){
  return(
    <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Compromiso de Calidad</h2>
            <p className="text-lg text-gray-600">Un enfoque integral para garantizar la excelencia en nuestro servicio</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {qualityDetails.map((step, index) => (
              <motion.div key={index} className="relative" variants={scaleIn}>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < qualityDetails.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-green-300"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  )
}
