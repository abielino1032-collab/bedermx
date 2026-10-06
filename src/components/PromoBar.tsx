import { Phone } from 'lucide-react';

export default function PromoBar() {
  return (
    <div className="bg-[#060c2c] text-white text-xs sm:text-sm border-b border-white/10 relative z-30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap justify-center sm:justify-between items-center gap-2 sm:gap-3 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left w-full sm:w-auto">

          <span className="text-slate-200">
            Flete gratis en Puebla y en compras de fábrica.{' '}
            <a
              href="#coleccion"
              className="font-semibold text-white underline underline-offset-4 hover:text-[#8fbfe0] transition-colors ml-1"
            >
              Ver colchones
            </a>
          </span>
        </div>
        <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto gap-2 text-slate-300 mx-auto sm:mx-0 sm:ml-0">
          <span>Llámanos</span>
          <a
            href="tel:2215727020"
            className="font-semibold text-[#8fbfe0] hover:text-white flex items-center gap-1 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            22 15 72 70 20
          </a>
        </div>
      </div>
    </div>
  );
}
