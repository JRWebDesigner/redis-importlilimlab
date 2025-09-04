import {motion} from 'framer-motion'
import {staggerContainer, scaleIn} from '@/animations/variants'
import {Phone, Mail, MapPin, Clock} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+591 62437743"],
      description: "Lunes a Viernes: 9:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@importlilimlab.com"],
      description: "Respuesta en menos de 24 horas"
    },
    {
      icon: MapPin,
      title: "Oficina Principal",
      details: ["La Paz, Bolivia", "Santa Cruz, Bolivia"],
      description: "Visitas con cita previa"
    },
    {
      icon: Clock,
      title: "Horarios de Atención",
      details: ["Lunes - Viernes: 9:00 AM - 6:00 PM"],
      description: "Soporte técnico 24/7"
    }
  ];
export default function Info(){
  return(
    <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="text-center hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-3">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="font-medium text-gray-800">{detail}</p>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{info.description}</p>
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
