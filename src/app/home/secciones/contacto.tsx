import Link from "next/link";
import { PawPrintIcon as Paw, Phone, MapPin, Clock } from "lucide-react";

export function Contacto() {
  const informacionContacto = [
    {
      icon: Phone,
      titulo: "Teléfono",
      detalle: "(123) 456-7890",
    },
    {
      icon: MapPin,
      titulo: "Dirección",
      detalle: "Av. Principal #123, Ciudad",
    },
    {
      icon: Clock,
      titulo: "Horario",
      detalle: ["Lunes a Sábado: 9:00 AM - 7:00 PM", "Domingo: Emergencias"],
    },
  ];

  return (
    <section
      id="contacto"
      className="w-full py-12 md:py-24 bg-gradient-to-r from-pink-50 to-purple-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-1/3 transform -rotate-12">
          <Paw className="h-6 w-6 text-pink-200" />
        </div>
        <div className="absolute top-1/2 right-10 transform rotate-45">
          <Paw className="h-8 w-8 text-purple-200" />
        </div>
        <div className="absolute bottom-20 left-20 transform -rotate-12">
          <Paw className="h-10 w-10 text-pink-200" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-700">
              Contacto
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-pink-800">
              ¿Necesitas ayuda con tu mascota?
            </h2>
            <p className="text-gray-600 md:text-xl/relaxed">
              Estamos aquí para ayudarte. Contáctanos para 
              resolver cualquier duda sobre el cuidado de tu mascota.
            </p>
            <div className="space-y-4 mt-6">
              {informacionContacto.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-medium text-pink-700">{info.titulo}</p>
                      {Array.isArray(info.detalle) ? (
                        info.detalle.map((linea, i) => (
                          <p key={i} className="text-gray-600">
                            {linea}
                          </p>
                        ))
                      ) : (
                        <p className="text-gray-600">{info.detalle}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-pink-100">
            <h3 className="text-xl font-bold text-pink-700 mb-4">
              Realiza tu consulta 
            </h3>
            <form className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Teléfono
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  placeholder="Describe el motivo de tu visita"
                  className="w-full min-h-[100px] border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
              </div>
              <Link
                href="/agendar-cita"
                className="w-full inline-block text-center bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Aclarar dudas
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
