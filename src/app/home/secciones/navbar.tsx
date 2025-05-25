import Link from "next/link"
import { PawPrintIcon as Paw, Phone, Calendar } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between py-4 px-4">
        <div className="flex items-center gap-2">
          <Paw className="h-8 w-8 text-pink-500" />
          <span className="text-xl font-bold text-pink-700">AppNicolas</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="text-pink-700 font-medium hover:text-pink-500 transition-colors">
            Inicio
          </Link>
          <Link href="#servicios" className="text-gray-600 hover:text-pink-500 transition-colors">
            Servicios
          </Link>
          <Link href="#nosotros" className="text-gray-600 hover:text-pink-500 transition-colors">
            Nosotros
          </Link>
          <Link href="#testimonios" className="text-gray-600 hover:text-pink-500 transition-colors">
            Testimonios
          </Link>
          <Link href="#contacto" className="text-gray-600 hover:text-pink-500 transition-colors">
            Contacto
          </Link>
        </nav>
        <div className="flex gap-2">
          <Link href="/agendar-cita" className="inline-flex items-center px-4 py-2 bg-pink-500 text-white text-sm font-medium rounded hover:bg-pink-600 transition-colors">
            <Phone className="mr-2 h-4 w-4" /> Agendar Cita
          </Link>
          <Link href="/mis-citas" className="inline-flex items-center px-4 py-2 border border-pink-200 text-pink-700 text-sm font-medium rounded hover:bg-pink-50 transition-colors">
            <Calendar className="mr-2 h-4 w-4" /> Mis Citas
          </Link>
        </div>
      </div>
    </header>
  )
}
