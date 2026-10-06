import { MapPin, Phone, Clock, Map } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-20 sm:py-24 bg-[#060c2c] text-white relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Info details */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="text-xs font-bold tracking-[0.16em] uppercase text-[#8fbfe0] mb-2">
                Contacto
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Queremos Conocerte
              </h2>
            </div>

            {/* Info details */}
            <div className="flex flex-col gap-6 my-2">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#8fbfe0]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <b className="block text-xs uppercase tracking-wider text-[#8fbfe0] font-sans">
                    Dirección
                  </b>
                  <p className="text-sm text-slate-200 mt-0.5">
                    Calle 5 de Mayo 54, San Jerónimo Calera, Puebla, Puebla, México. C.P. 72100
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#8fbfe0]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <b className="block text-xs uppercase tracking-wider text-[#8fbfe0] font-sans">
                    Teléfono y WhatsApp
                  </b>
                  <a
                    href="tel:2215727020"
                    className="text-sm text-slate-200 hover:text-white underline underline-offset-2 mt-0.5 block"
                  >
                    22 15 72 70 20
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#8fbfe0]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <b className="block text-xs uppercase tracking-wider text-[#8fbfe0] font-sans">
                    Horario de atención
                  </b>
                  <p className="text-sm text-slate-200 mt-0.5">
                    Lunes a viernes de 08:00 am a 05:30 pm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Ubicación de Fábrica & Showroom (sin caja, solo contenido y mapa en color natural) */}
          <div className="flex flex-col justify-between gap-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#8fbfe0] uppercase tracking-wider font-display">
                  <Map className="w-5 h-5" />
                  Ubicación
                </div>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 font-semibold px-2.5 py-1 rounded-full">
                  Puebla, México
                </span>
              </div>
              <p className="text-sm text-slate-300">
                A 10 minutos de la autopista México-Puebla. Visítanos en planta para probar los
                colchones en vivo.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden h-[300px] sm:h-[340px] relative border border-white/10 bg-slate-800 shadow-xl">
              <iframe
                title="Ubicación Colchones BEDER Puebla"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.3564967575517!2d-98.22268992452427!3d19.092010351469288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc1533f7450db%3A0x82c804d3be92f556!2sC.%205%20de%20Mayo%2054%2C%20San%20Jer%C3%B3nimo%20Caleras%2C%2072100%20Heroica%20Puebla%20de%20Zaragoza%2C%20Pue.!5e0!3m2!1ses-419!2smx!4v1791274735078!5m2!1ses-419!2smx"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
              <a
                href="https://maps.google.com/?q=C.+5+de+Mayo+54,+San+Jerónimo+Caleras,+72100+Heroica+Puebla+de+Zaragoza,+Pue."
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-[#060c2c]/90 backdrop-blur-xs text-white text-xs font-bold px-4 py-2 rounded-lg border border-white/30 hover:bg-white hover:text-[#060c2c] transition-colors shadow-md"
              >
                Abrir en maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
