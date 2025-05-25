import Image from "next/image";
import { PawPrintIcon as Paw } from "lucide-react";

export function Nosotros() {
  const caracteristicas = [
    "Veterinarios certificados con especialidades diversas",
    "Formación continua y actualización constante",
    "Trato cariñoso y respetuoso con cada paciente",
    "Compromiso con el bienestar animal y la educación de los dueños",
  ];

  return (
    <section
      id="nosotros"
      className="w-full py-12 md:py-24 bg-pink-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 transform rotate-12">
          <Paw className="h-8 w-8 text-pink-200" />
        </div>
        <div className="absolute bottom-40 left-20 transform -rotate-12">
          <Paw className="h-10 w-10 text-purple-200" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mx-auto w-full max-w-[500px] relative order-2 lg:order-1">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-pink-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-50"></div>
            <Image
              src="/image/equipo.jpg"
              alt="Veterinario con mascotas"
              width={600}
              height={600}
              className="mx-auto aspect-square rounded-xl object-cover border-4 border-white shadow-xl relative z-10"
            />
          </div>
          <div className="space-y-4 order-1 lg:order-2">
            <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-700">
              Nuestro Equipo
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-pink-800">
              Profesionales apasionados por el bienestar animal
            </h2>
            <p className="text-gray-600 md:text-xl/relaxed">
              Nuestro equipo está formado por veterinarios certificados y
              asistentes con años de experiencia y un profundo amor por los
              animales.
            </p>
            <ul className="space-y-2 text-gray-600">
              {caracteristicas.map((caracteristica, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-pink-500"></div>
                  <span>{caracteristica}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md transition-colors mt-2"
            >
              Conoce a Nuestro Equipo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
