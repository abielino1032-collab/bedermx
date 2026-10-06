import { Award, Users } from 'lucide-react';

interface AboutProps {
  onNavigateToNosotros?: () => void;
}

export default function About({ onNavigateToNosotros }: AboutProps) {
  return (
    <section id="nosotros" className="py-20 sm:py-24 bg-white border-b border-[#dfe5ee]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Solo el bloque seleccionado duplicado en la página principal */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-end">
          <div className="flex flex-col gap-4">
            <div className="text-xs font-bold tracking-[0.16em] uppercase text-[#27457a]">
              Nosotros
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#060c2c] leading-tight">
              Fabricantes de colchones,{' '}
              <em className="not-italic text-[#27457a] bg-gradient-to-r from-[#8fbfe0]/40 to-[#cbe9e5]/40 px-2 py-0.5 rounded-md">
                orgullosamente poblanos
              </em>
            </h2>
            <p className="text-base sm:text-lg text-[#5d6878] leading-relaxed max-w-[56ch]">
              Somos una empresa fabricadora y comercializadora de colchones. Contamos con más de 11
              años de experiencia en México, combinando tradición artesanal con ingeniería de descanso
              moderna.
            </p>
            {onNavigateToNosotros && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onNavigateToNosotros}
                  className="font-semibold text-sm text-[#27457a] border-b-2 border-[#8fbfe0] hover:text-[#060c2c] pb-1 transition-colors cursor-pointer"
                >
                  Conocer más →
                </button>
              </div>
            )}
          </div>

          {/* Stat Block */}
          <div className="bg-[#f4f6fa] rounded-[22px] p-8 border border-[#dfe5ee] flex flex-col justify-center shadow-xs">
            <div className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-[#060c2c] leading-none tracking-tight">
              +11 Años
            </div>
            <div className="text-sm sm:text-base font-semibold text-[#5d6878] mt-3">
              de experiencia continua fabricando colchones de alta durabilidad en México.
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200/80 flex items-center gap-4 text-xs font-bold text-[#27457a] uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#8fbfe0]" />
                Calidad certificada
              </span>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
