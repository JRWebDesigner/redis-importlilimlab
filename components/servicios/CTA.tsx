import Link from 'next/link'
import {motion} from 'framer-motion'
import {Button} from '@/components/ui/button'

export default function CTA(){
  return(
    <motion.section 
        className="py-16 bg-lime-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          ¿Necesita más información sobre nosotros?
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Nuestro equipo de especialistas está listo para responder sus preguntas y brindarle la información que necesite.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
            <Link href="https://wa.link/tgsbjm" className="w-full h-full flex items-center">Solicitar Catalogo</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  )
}
