import { Navbar } from "./secciones/navbar"
import { Banner } from "./secciones/banner"
import { Servicios } from "./secciones/servicios"
import { Nosotros } from "./secciones/nosotros"
import { Contacto } from "./secciones/contacto"
import { Footer } from "./secciones/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />      
        <Servicios />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
