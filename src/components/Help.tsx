import { MapPin, Clock, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';

export default function Help() {
  return (
    <section className="py-20 sm:py-24 bg-[#e4ecf6] border-b border-[#dfe5ee]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div>
          <div className="text-xs font-bold tracking-[0.16em] uppercase text-[#27457a] mb-2">
            Estamos cerca de ti
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#060c2c] leading-tight">
            ¿Necesitas ayuda{' '}
            <em className="not-italic text-[#27457a] bg-gradient-to-r from-white to-[#cbe9e5]/60 px-2 py-0.5 rounded-md">
              para decidir?
            </em>
          </h2>
        </div>

        {/* Help Grid: 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Card 1: Pruébalo en persona */}
          <div className="bg-white rounded-[22px] overflow-hidden border border-[#dfe5ee] shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 sm:grid-cols-[1fr_1.25fr]">
            <div className="relative min-h-[220px] sm:min-h-full overflow-hidden">
              <img
                src="/src/assets/images/beder_showroom_puebla_1791249206941.jpg"
                alt="Punto de venta y exhibición de Colchones BEDER en Puebla"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-7 sm:p-8 flex flex-col justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-bold text-[#060c2c] mb-3">
                  Pruébalo en persona
                </h3>
                <div className="flex flex-col gap-2 text-sm text-[#5d6878]">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#27457a] shrink-0 mt-0.5" />
                    <span>Calle 5 de Mayo 54, San Jerónimo Calera, Puebla, Puebla.</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#27457a] shrink-0" />
                    <span>Lunes a viernes de 08:00 am a 05:30 pm.</span>
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Calle+5+de+Mayo+54,+San+Jerónimo+Calera,+Puebla"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-sm text-[#060c2c] border-b-2 border-[#8fbfe0] hover:text-[#27457a] pb-0.5 transition-colors self-start"
              >
                <span>Cómo llegar</span>
                <ArrowUpRight className="w-4 h-4 text-[#27457a]" />
              </a>
            </div>
          </div>

          {/* Card 2: Habla con un asesor */}
          <div className="bg-white rounded-[22px] overflow-hidden border border-[#dfe5ee] shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 sm:grid-cols-[1fr_1.25fr]">
            <div className="relative min-h-[220px] sm:min-h-full overflow-hidden">
              <img
                src="/src/assets/images/beder_advisor_callcenter_1791272314693.jpg"
                alt="Asesora de atención personalizada en Colchones BEDER"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-7 sm:p-8 flex flex-col justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-bold text-[#060c2c] mb-3">
                  Habla con un asesor
                </h3>
                <p className="text-sm text-[#5d6878] leading-relaxed">
                  Nuestro equipo responde tus preguntas y te recomienda según tus preferencias,
                  estatura, peso y necesidades ortopédicas de sueño.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href="https://wa.me/522215727020?text=Hola,%20quisiera%20asesoría%20para%20elegir%20mi%20colchón%20BEDER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-sm text-[#060c2c] border-b-2 border-[#8fbfe0] hover:text-[#27457a] pb-0.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#1fa855]" />
                  Envíanos un whats
                </a>
                <a
                  href="tel:2215727020"
                  className="inline-flex items-center gap-1.5 font-bold text-sm text-[#060c2c] border-b-2 border-[#8fbfe0] hover:text-[#27457a] pb-0.5 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#27457a]" />
                  22 15 72 70 20
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
