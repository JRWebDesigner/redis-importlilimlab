'use client';

import { useState } from 'react';
import Link from 'next/link'
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Microscope, 
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    categoria: '',
    mensaje: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

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

  const productCategories = [
    "Microscopios",
    "Equipos de Análisis",
    "Material de Vidrio",
    "Equipos Eléctricos",
    "Balanzas y Medición",
    "Equipos de Seguridad",
    "Mobiliario de Laboratorio",
    "Otro"
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="bg-green-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-green-600 hover:text-green-700">Inicio</a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Contacto</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para ayudarte con tus necesidades de equipamiento de laboratorio. 
              Contáctanos para obtener información detallada sobre precios y especificaciones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
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

      {/* Contact Form and Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>
              <p className="text-gray-600 mb-8">
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
              </p>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800">¡Mensaje enviado exitosamente! Te contactaremos pronto.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="nombre">Nombre Completo *</Label>
                    <Input
                      id="nombre"
                      type="text"
                      value={formData.nombre}
                      onChange={(e) => handleInputChange('nombre', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => handleInputChange('telefono', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="empresa">Empresa/Institución</Label>
                    <Input
                      id="empresa"
                      type="text"
                      value={formData.empresa}
                      onChange={(e) => handleInputChange('empresa', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="categoria">Categoría de Interés</Label>
                  <Select onValueChange={(value) => handleInputChange('categoria', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      {productCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="mensaje">Mensaje *</Label>
                  <Textarea
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={(e) => handleInputChange('mensaje', e.target.value)}
                    required
                    rows={5}
                    className="mt-1"
                    placeholder="Describe tus necesidades, presupuesto estimado, o cualquier pregunta específica..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
            

              {/* Additional Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-green-800">¿Por qué elegirnos?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Dedicados íntegramente a la comercialización de instrumental científico</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Soporte de fabricantes de prestigio mundial</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Envío directo desde las fábricas</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Capacitación y entrenamiento especializado</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-green-800">Horarios de Atención</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Lunes - Viernes:</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Sábados:</span>
                        <span className="font-medium">Cerrado</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Domingos:</span>
                        <span className="font-medium">Cerrado</span>
                      </div>
                      <div className="pt-2 border-t">
                        <p className="text-sm text-green-600 font-medium">
                          Soporte técnico de emergencia disponible 24/7
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-lime-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitas información sobre precios?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contáctanos por WhatsApp y uno de nuestros especialistas te proporcionará información detallada sobre precios y especificaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-900 hover:bg-gray-100">
              <Link href="https://wa.link/ryfuv1" className="w-full h-full flex items-center">Consultar por WhatsApp</Link>
            </Button>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
