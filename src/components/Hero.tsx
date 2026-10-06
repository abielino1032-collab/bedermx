import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white py-5 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] xl:max-w-[1280px] mx-auto bg-[#e4ecf6] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#dfe5ee] shadow-sm grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] items-stretch min-h-[580px]">
        {/* Left Copy */}
        <div className="py-10 sm:py-14 lg:py-16 px-6 sm:px-10 lg:px-12 xl:px-14 flex flex-col justify-center gap-6 z-10">
          <div className="text-xs font-bold tracking-[0.16em] uppercase text-[#27457a]">
            Bienvenido a BEDER
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[3.8rem] font-extrabold text-[#060c2c] leading-[1.05] tracking-tight">
            Descubre el <span className="text-[#27457a] relative inline-block">
              sueño perfecto
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#8fbfe0]/40 -z-10 rounded-sm"></span>
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#3a4759] max-w-[48ch] leading-relaxed">
            Nuestra prioridad es regenerar tu cuerpo en cada descanso, siendo el producto más
            importante para tu salud.
          </p>

          {/* Hero Actions */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#coleccion"
              className="w-full sm:w-[240px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm sm:text-base bg-[#060c2c] text-white hover:bg-[#27457a] transition-all shadow-md hover:shadow-lg group text-center"
            >
              <span>Ver colchones</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#tecnologia"
              className="w-full sm:w-[240px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm sm:text-base bg-transparent text-[#060c2c] border-2 border-[#060c2c] hover:bg-[#060c2c] hover:text-white transition-all text-center"
            >
              <span>Qué nos hace diferentes</span>
            </a>
          </div>

          {/* Trust stats ticker */}
          <div className="pt-4 border-t border-[#060c2c]/10 flex items-center gap-6 text-xs text-[#5d6878]">
            <div>
              <span className="font-extrabold text-[#060c2c] text-sm font-display">+11 Años</span>{' '}
              de experiencia
            </div>
            <span className="text-slate-300">|</span>
            <div>
              <span className="font-extrabold text-[#060c2c] text-sm font-display">10 Años</span>{' '}
              de garantía
            </div>
            <span className="text-slate-300">|</span>
            <div>
              <span className="font-extrabold text-[#060c2c] text-sm font-display">Directo</span>{' '}
              de fábrica en Puebla
            </div>
          </div>
        </div>

        {/* Right Media */}
        <div className="relative min-h-[360px] lg:min-h-full overflow-hidden group">
          <img
            src="/src/assets/images/hero_beder_bedroom_1791249166199.jpg"
            alt="Colchón BEDER en recámara moderna de diseño"
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060c2c]/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#e4ecf6]/40 lg:via-transparent lg:to-transparent"></div>

          {/* Texto de Tecnología y Soporte sin caja ni logo */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs">
            <p className="text-xs font-extrabold text-white sm:text-[#060c2c] uppercase tracking-wider font-display">
              Tecnología Bedertech™
            </p>
            <p className="text-xs text-white/90 sm:text-[#5d6878] mt-0.5">
              Soporte ergonómico con resortes Bonell Max de alta duración.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
