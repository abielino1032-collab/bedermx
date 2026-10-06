import { ShieldCheck, Truck, Headphones, Factory } from 'lucide-react';

export default function Perks() {
  const perks = [
    {
      icon: ShieldCheck,
      title: 'Garantía de satisfacción',
      desc: 'En todos nuestros colchones.',
    },
    {
      icon: Truck,
      title: 'Envío rápido',
      desc: 'Sin tarifas ocultas ni sorpresas.',
    },
    {
      icon: Headphones,
      title: 'Asesoría personalizada',
      desc: 'Te ayudamos a elegir tu colchón.',
    },
    {
      icon: Factory,
      title: 'Directo de fábrica',
      desc: 'Más de 11 años de experiencia en México.',
    },
  ];

  return (
    <section className="py-0 border-b border-[#dfe5ee] bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#dfe5ee]">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="p-8 sm:px-6 sm:py-9 lg:px-7 flex flex-col justify-start group hover:bg-[#f4f6fa]/60 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e4ecf6] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-[#27457a]" />
                </div>
                <h4 className="font-display font-bold text-lg text-[#18202c] mb-1.5 tracking-tight">
                  {perk.title}
                </h4>
                <p className="text-sm text-[#5d6878] leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
