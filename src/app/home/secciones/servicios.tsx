import { PawPrintIcon as Paw, Heart, Shield, Stethoscope, Users, Clock } from "lucide-react"

export function Servicios() {
  const servicios = [
    {
      icon: Stethoscope,
      title: "Consultas Médicas",
      description: "Exámenes completos, diagnósticos precisos y tratamientos personalizados para cada mascota.",
    },
    {
      icon: Shield,
      title: "Vacunación",
      description: "Programas de vacunación adaptados a las necesidades específicas de tu mascota y su estilo de vida.",
    },
    {
      icon: Heart,
      title: "Cirugía",
      description: "Procedimientos quirúrgicos realizados con el máximo cuidado y tecnología avanzada.",
    },
    {
      icon: Paw,
      title: "Peluquería",
      description: "Servicios de estética y cuidado del pelaje para mantener a tu mascota limpia y hermosa.",
    },
    {
      icon: Users,
      title: "Asesoría Nutricional",
      description: "Planes de alimentación personalizados para cada etapa de la vida de tu mascota.",
    },
    {
      icon: Clock,
      title: "Emergencias 24/7",
      description: "Atención de emergencias disponible las 24 horas para cuando más nos necesites.",
    },
  ]

  return (
    <section id="servicios" className="w-full py-12 md:py-24 bg-white relative overflow-hidden">
      {/* Paws decorativos */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 transform -rotate-12">
          <Paw className="h-8 w-8 text-pink-100" />
        </div>
        <div className="absolute top-1/3 right-20 transform rotate-45">
          <Paw className="h-10 w-10 text-purple-100" />
        </div>
        <div className="absolute bottom-20 left-1/4 transform rotate-12">
          <Paw className="h-6 w-6 text-pink-100" />
        </div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-700">
              Nuestros Servicios
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-800">
              Cuidado completo para tu mascota
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrecemos una amplia gama de servicios veterinarios para mantener a tu mascota saludable y feliz.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {servicios.map((servicio, index) => {
            const IconComponent = servicio.icon
            return (
              <div
                key={index}
                className="rounded-xl border border-pink-100 bg-white p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-lg font-semibold text-pink-700 mb-2">{servicio.title}</h3>
                <p className="text-sm text-gray-600">{servicio.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
