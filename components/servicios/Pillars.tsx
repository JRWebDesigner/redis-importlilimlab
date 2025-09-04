import {motion} from 'framer-motion'
import {staggerContainer, scaleIn} from '@/animations/variants'
import {Card, CardHeader, CardTitle, CardDescription, CardContent} from '@/components/ui/card'
import {CheckCircle, Trophy, TrendingUp, Target, Eye} from 'lucide-react'


const companyPillars = [
    {
      icon: Trophy,
      title: "Éxito Competitivo",
      description: "Integración organizacional y especialización por áreas",
      details: [
        "Percepción de necesidades futuras de clientes",
        "Capital humano con conocimiento técnico especializado",
        "Soluciones eficientes para la toma de decisiones",
        "Organización integrada y especializada"
      ]
    },
    {
      icon: TrendingUp,
      title: "Competitividad",
      description: "Alto rendimiento con costos optimizados",
      details: [
        "Experiencia en productos de alta tecnología",
        "Mejor compromiso entre rendimiento y costo",
        "Precios de mercado competitivos",
        "Productos importados con gran rendimiento"
      ]
    },
    {
      icon: Target,
      title: "Misión",
      description: "Importación y distribución de equipos, consumibles y reactivos químicos",
      details: [
        "Cobertura a nivel nacional",
        "Atención personalizada en venta, postventa y asesoría técnica",
        "Equipo especializado y altamente comprometido",
        "Satisfacción de necesidades en sector industrial, analítico e investigación"
      ]
    },
    {
      icon: Eye,
      title: "Visión",
      description: "Liderazgo en distribución de productos químicos en Bolivia",
      details: [
        "Aportar al quehacer diario del país",
        "Contribuir al desarrollo científico-tecnológico",
        "Otorgar servicio de excelencia a clientes",
        "Ser referente en el mercado boliviano"
      ]
    }
  ];
export default function Pillars(){
  return(
  <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pilares Fundamentales</h2>
            <p className="text-lg text-gray-600">Los valores que nos definen como empresa</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {companyPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{pillar.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pillar.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
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
