export default function Footer(){
  return(
     <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" className="w-[250px] h-auto"/>
              </div>
              <p className="text-gray-300">
                Especialistas en equipamiento científico y analítico para laboratorios.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Productos</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Microscopios</li>
                <li>Equipos de Análisis</li>
                <li>Material de Vidrio</li>
                <li>Equipos Eléctricos</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Importación</li>
                <li>Instalación</li>
                <li>Capacitación</li>
                <li>Soporte Técnico</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-300">
                <li>+591 62437743</li>
                <li>info@importlilimlab.com</li>
                <li>Bolivia, La Paz</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 ImportLiliMLab. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
  )
}
