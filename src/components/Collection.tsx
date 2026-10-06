import { useRef, useState } from 'react';
import { MATTRESS_LINES, MattressModel } from '../data/bederData';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Layers,
  Activity,
  Moon,
  Crown,
  Compass,
  HeartHandshake,
  Award,
} from 'lucide-react';

interface CollectionProps {
  onSelectModel: (model: MattressModel) => void;
  onRequestCatalog: () => void;
}

function getFeatureIcon(feat: string) {
  const f = feat.toLowerCase();
  if (f.includes('bedertech')) return <Layers className="w-4 h-4" />;
  if (f.includes('bonell')) return <Activity className="w-4 h-4" />;
  if (f.includes('tela') || f.includes('luxury')) return <Sparkles className="w-4 h-4" />;
  if (f.includes('encase')) return <ShieldCheck className="w-4 h-4" />;
  if (f.includes('movimiento')) return <Moon className="w-4 h-4" />;
  if (f.includes('acojinamiento')) return <Crown className="w-4 h-4" />;
  if (f.includes('flexible') || f.includes('adaptable')) return <Compass className="w-4 h-4" />;
  if (f.includes('confort')) return <HeartHandshake className="w-4 h-4" />;
  return <Award className="w-4 h-4" />;
}

export default function Collection({ onSelectModel, onRequestCatalog }: CollectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<'all' | 'residencial' | 'hotelero' | 'lujo'>('all');

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const filteredLines = MATTRESS_LINES.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'residencial') return item.id === 'estandar' || item.id === 'premium';
    if (filter === 'hotelero') return item.id === 'hotelero';
    if (filter === 'lujo') return item.id === 'luxury';
    return true;
  });

  return (
    <section id="coleccion" className="py-20 sm:py-24 bg-white border-b border-[#dfe5ee]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Head */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div className="max-w-3xl">
            <div className="text-xs font-bold tracking-[0.16em] uppercase text-[#27457a] mb-2">
              Colección
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#060c2c] leading-tight">
              Descubre nuestra{' '}
              <em className="not-italic text-[#27457a] bg-gradient-to-r from-[#8fbfe0]/40 to-[#cbe9e5]/50 px-2 py-0.5 rounded-md">
                colección de colchones
              </em>
            </h2>
            <p className="text-base sm:text-lg text-[#5d6878] mt-4 leading-relaxed max-w-[64ch]">
              Colchones fabricados con materiales de primera calidad, diseñados para brindar el
              máximo confort y soporte. Ya sea que prefieras un colchón firme o suave, tenemos la
              opción para ti.
            </p>
          </div>
          <button
            type="button"
            onClick={onRequestCatalog}
            className="font-semibold text-sm text-[#060c2c] border-b-2 border-[#8fbfe0] hover:text-[#27457a] pb-1 transition-colors whitespace-nowrap self-start md:self-end"
          >
            Solicitar catálogo completo →
          </button>
        </div>

        {/* Filters and Navigation controls (Solo visibles en pantallas medianas y escritorio) */}
        <div className="hidden sm:flex flex-wrap justify-between items-center gap-4 mb-6 pt-2">
          {/* Filter tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            <button
              onClick={() => setFilter('all')}
              style={{ color: filter === 'all' ? '#ffffff' : undefined }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#060c2c] !text-white shadow-sm'
                  : 'bg-[#f4f6fa] text-[#5d6878] hover:bg-slate-200 hover:text-[#060c2c]'
              }`}
            >
              <span className={filter === 'all' ? 'text-white' : ''}>Todas las líneas</span>
            </button>
            <button
              onClick={() => setFilter('residencial')}
              style={{ color: filter === 'residencial' ? '#ffffff' : undefined }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                filter === 'residencial'
                  ? 'bg-[#060c2c] !text-white shadow-sm'
                  : 'bg-[#f4f6fa] text-[#5d6878] hover:bg-slate-200 hover:text-[#060c2c]'
              }`}
            >
              <span className={filter === 'residencial' ? 'text-white' : ''}>Hogar & Familiar</span>
            </button>
            <button
              onClick={() => setFilter('hotelero')}
              style={{ color: filter === 'hotelero' ? '#ffffff' : undefined }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                filter === 'hotelero'
                  ? 'bg-[#060c2c] !text-white shadow-sm'
                  : 'bg-[#f4f6fa] text-[#5d6878] hover:bg-slate-200 hover:text-[#060c2c]'
              }`}
            >
              <span className={filter === 'hotelero' ? 'text-white' : ''}>Uso Hotelero</span>
            </button>
            <button
              onClick={() => setFilter('lujo')}
              style={{ color: filter === 'lujo' ? '#ffffff' : undefined }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                filter === 'lujo'
                  ? 'bg-[#060c2c] !text-white shadow-sm'
                  : 'bg-[#f4f6fa] text-[#5d6878] hover:bg-slate-200 hover:text-[#060c2c]'
              }`}
            >
              <span className={filter === 'lujo' ? 'text-white' : ''}>Alta Gama Luxury</span>
            </button>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border-2 border-[#060c2c] bg-white text-[#060c2c] hover:bg-[#060c2c] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
              aria-label="Línea anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border-2 border-[#060c2c] bg-white text-[#060c2c] hover:bg-[#060c2c] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
              aria-label="Línea siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 sm:gap-6 pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 scroll-pl-4 sm:scroll-pl-6"
        >
          {filteredLines.map((item) => {
            const isLuxury = item.id === 'luxury';
            return (
              <article
                key={item.id}
                onClick={() => onSelectModel(item)}
                className={`flex-none w-[80vw] sm:w-[320px] lg:w-[340px] rounded-[22px] p-7 sm:p-8 flex flex-col justify-start gap-6 snap-start relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 cursor-pointer ${
                  item.theme.bg
                } ${isLuxury ? 'shadow-2xl ring-2 ring-[#6fa8d6]/30' : 'shadow-md'}`}
              >
                {/* Background dot pattern motif */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(currentColor 1.5px, transparent 1.5px)',
                    backgroundSize: '12px 12px',
                  }}
                ></div>

                {/* Top Badge */}
                {item.badge && (
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center gap-1 bg-[#6fa8d6] text-[#060c2c] text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                      <Sparkles className="w-3 h-3 text-[#060c2c]" />
                      {item.badge}
                    </span>
                  </div>
                )}

                {/* Card Title */}
                <div className="relative z-10 border-b-2 border-current pb-2 self-start pr-4">
                  <h3
                    className={`font-display text-3xl font-extrabold uppercase tracking-tight ${item.theme.heading}`}
                  >
                    {item.name}
                  </h3>
                </div>

                {/* Characteristics / Características */}
                <ul className="relative z-10 flex flex-col gap-3.5 my-1">
                  {item.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center gap-3.5 font-display font-bold uppercase text-[15px] tracking-wide ${item.theme.text}`}
                    >
                      <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center shrink-0 shadow-xs">
                        {getFeatureIcon(feat)}
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
          {/* Separador final para mantener el margen derecho al deslizar la última tarjeta */}
          <div className="shrink-0 w-1 sm:w-2 lg:hidden pointer-events-none" aria-hidden="true" />
        </div>

        {/* Indicadores de desplazamiento debajo de las tarjetas (Solo versión móvil) */}
        <div className="flex sm:hidden items-center justify-center gap-3 mt-4 mb-2">
          <button
            onClick={() => scroll('left')}
            className="w-11 h-11 rounded-full border-2 border-[#060c2c] bg-white text-[#060c2c] hover:bg-[#060c2c] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
            aria-label="Línea anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-11 h-11 rounded-full border-2 border-[#060c2c] bg-white text-[#060c2c] hover:bg-[#060c2c] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
            aria-label="Línea siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Trust info beneath collection (solo texto e icono, sin caja) */}
        <div className="mt-6 pt-2 flex flex-wrap items-center justify-between gap-4 text-xs text-[#5d6878]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#27457a]" />
            <span>Todos los modelos incluyen garantía directa en Puebla contra defectos de fábrica.</span>
          </div>
          <div className="font-semibold text-[#060c2c]">
            ¿Medidas especiales?{' '}
            <a href="#contacto" className="text-[#27457a] underline hover:text-[#060c2c] transition-colors">
              Fabricamos a tu especificación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
