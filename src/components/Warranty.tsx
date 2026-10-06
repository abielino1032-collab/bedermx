import { ShieldCheck, Truck, CreditCard, ArrowRight } from 'lucide-react';

export default function Warranty() {
  const commitments = [
    {
      icon: ShieldCheck,
      title: 'Garantía de satisfacción',
      desc: 'Respaldo directo con 5 a 10 años de garantía escrita por fábrica contra defectos de estructura y resortes.',
    },
    {
      icon: Truck,
      title: 'Envío rápido y seguro',
      desc: 'Entregas en 24 a 48 hrs en Puebla y zona conurbada con personal que lo coloca directo en tu habitación.',
    },
    {
      icon: CreditCard,
      title: 'Precio competitivo de fábrica',
      desc: 'Directo de taller sin intermediarios. Aceptamos efectivo a la entrega, tarjetas y transferencias SPEI.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#dfe5ee]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Photo: Home delivery */}
          <div className="relative rounded-[22px] overflow-hidden shadow-xl border border-slate-200 group">
            <div className="aspect-[5/2] sm:aspect-[5/4] h-[170px] sm:h-auto sm:min-h-[420px]">
              <img
                src="/src/assets/images/beder_delivery_home_1791249247527.jpg"
                alt="Entrega cuidadosa del colchón BEDER en domicilio"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
    
          </div>

          {/* Text & Points */}
          <div className="flex flex-col justify-center gap-4 sm:gap-5">
            <div>
              <div className="text-xs font-bold tracking-[0.16em] uppercase text-[#27457a] mb-1.5">
                Compra con confianza
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-[#060c2c] leading-tight">
                Tu satisfacción es{' '}
                <em className="not-italic text-[#27457a] bg-gradient-to-r from-[#8fbfe0]/40 to-[#cbe9e5]/40 px-2 py-0.5 rounded-md">
                  nuestra prioridad
                </em>
              </h2>
            </div>

            <div className="flex flex-col gap-3.5 my-1">
              {commitments.map((item, idx) => (
                <div
                  key={idx}
                  className="pl-4 border-l-3 border-[#8fbfe0] hover:border-[#27457a] transition-colors py-0.5"
                >
                  <h4 className="font-display font-bold text-base sm:text-lg text-[#060c2c] mb-0.5 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5d6878] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-1">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-transparent text-[#060c2c] border-2 border-[#060c2c] hover:bg-[#060c2c] hover:text-white transition-all shadow-xs group"
              >
                <span>Más información</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
