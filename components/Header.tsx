import Link from 'next/link'
export default function Header(){
  return(
    <header className="bg-white shadow-sm border-b border-green-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" className="w-[240px] h-auto" />
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">Inicio</Link>
              <Link href="/productos" className="text-gray-700 hover:text-green-600 transition-colors">Productos</Link>
              <Link href="/servicios" className="text-gray-700 hover:text-green-600 transition-colors">Servicios</Link>
              <Link href="/contacto" className="text-gray-700 hover:text-green-600 transition-colors">Contacto</Link>
            </nav>
          </div>
        </div>
     </header>
  )
}
