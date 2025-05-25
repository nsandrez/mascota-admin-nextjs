import Image from "next/image";
import Link from "next/link";
import { PawPrintIcon as Paw, Clock, MapPin } from "lucide-react";

export function Banner() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-50 to-purple-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-100 rounded-full opacity-30"></div>
        <div className="absolute top-1/4 right-10 w-20 h-20 bg-pink-200 rounded-full opacity-40"></div>
        <div className="absolute bottom-10 left-1/3 w-32 h-32 bg-purple-100 rounded-full opacity-30"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-100 rounded-full opacity-40"></div>
        <div className="absolute top-20 left-1/4 transform -rotate-12">
          <Paw className="h-6 w-6 text-pink-200" />
        </div>
        <div className="absolute top-40 right-1/3 transform rotate-45">
          <Paw className="h-8 w-8 text-purple-200" />
        </div>
        <div className="absolute bottom-32 left-10 transform -rotate-12">
          <Paw className="h-10 w-10 text-pink-200" />
        </div>
        <div className="absolute bottom-20 right-1/4 transform rotate-12">
          <Paw className="h-5 w-5 text-purple-200" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-700">
              Clínica Veterinaria
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-pink-800">
              Cuidado amoroso para tus mascotas
            </h1>
            <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
              Ofrecemos atención veterinaria de calidad con un equipo
              profesional que ama a los animales tanto como tú.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/agendar-cita"
                className="inline-block text-center bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Agendar Cita
              </Link>
              <Link
                href="/mis-citas"
                className="inline-block text-center border border-pink-200 text-pink-700 font-medium py-2 px-4 rounded-md hover:bg-pink-50 transition-colors"
              >
                Ver Mis Citas
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-pink-500" />
                <span className="text-sm text-gray-500">Lun-Sáb: 9am-7pm</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-pink-500" />
                <span className="text-sm text-gray-500">
                  Av. Principal #123
                </span>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px] relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-200 rounded-full opacity-50"></div>
            <Image
              src="/image/banner.jpg"
              alt="Veterinario con mascotas"
              width={600}
              height={600}
              className="mx-auto aspect-square rounded-xl object-cover border-4 border-white shadow-xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
