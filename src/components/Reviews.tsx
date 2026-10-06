import { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, User, MessageSquare } from 'lucide-react';
import { REVIEWS } from '../data/bederData';

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -390 : 390;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#fbf8f3] border-b border-[#dfe5ee]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Head */}
        <div className="mb-10">
          <div className="text-xs font-bold tracking-[0.16em] uppercase text-[#27457a] mb-2">
            Testimonios de clientes
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#060c2c] leading-tight">
            Historias de quienes{' '}
            <em className="not-italic text-[#27457a] bg-gradient-to-r from-[#8fbfe0]/40 to-[#cbe9e5]/40 px-2 py-0.5 rounded-md">
              transformaron su descanso
            </em>
          </h2>
        </div>

        {/* Reviews Carousel Container with User Photo Icons */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 sm:gap-6 pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 scroll-pl-4 sm:scroll-pl-6"
        >
          {REVIEWS.map((rev, idx) => (
            <article
              key={idx}
              className="flex-none w-[80vw] sm:w-[360px] lg:w-[380px] bg-white rounded-[22px] p-7 sm:p-8 flex flex-col justify-between gap-5 border border-[#efe8dc] shadow-sm hover:shadow-md transition-all snap-start"
            >
              <div>
                {/* 5 Stars and verified tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-[#e9a23b]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  {rev.tag && (
                    <span className="text-[11px] font-bold text-[#27457a] bg-[#e4ecf6] px-2.5 py-0.5 rounded-full">
                      {rev.tag}
                    </span>
                  )}
                </div>

                {/* Quote */}
                <blockquote className="text-[15px] sm:text-base text-[#18202c] leading-relaxed italic">
                  "{rev.quote}"
                </blockquote>
              </div>

              {/* Author with Real Customer Stock Face Photo */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-sm border-2 border-white ring-2 ring-[#8fbfe0]/40 bg-[#e4ecf6]">
                  {rev.avatar ? (
                    <img
                      src={rev.avatar}
                      alt={`Foto de ${rev.name}`}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#060c2c] text-[#8fbfe0]">
                      <User className="w-5 h-5" />
                    </div>
                  )}
                </div>
                <div className="flex flex-col min-w-0">
                  <cite className="not-italic font-display font-bold text-base text-[#060c2c] truncate">
                    {rev.name}
                  </cite>
                  <div className="text-xs text-[#5d6878] truncate mt-0.5">
                    <span className="font-semibold text-[#27457a]">{rev.model}</span>
                    <span> · </span>
                    <span>{rev.city}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
          {/* Separador final para mantener el margen derecho al deslizar la última tarjeta */}
          <div className="shrink-0 w-1 sm:w-2 lg:hidden pointer-events-none" aria-hidden="true" />
        </div>

        {/* Controles debajo del carrusel: Flechas centradas en medio y enlace a la derecha */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          {/* Espaciador izquierdo para equilibrar el centro */}
          <div className="hidden sm:block flex-1"></div>

          {/* Flechas de desplazamiento en medio */}
          <div className="flex items-center justify-center gap-3 flex-1">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border-2 border-[#060c2c] bg-white text-[#060c2c] hover:bg-[#060c2c] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border-2 border-[#060c2c] bg-white text-[#060c2c] hover:bg-[#060c2c] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Cuéntanos tu experiencia alineado a la derecha */}
          <div className="flex sm:justify-end flex-1">
            <a
              href="#contacto"
              className="inline-flex items-center gap-1.5 font-semibold text-sm text-[#060c2c] border-b-2 border-[#8fbfe0] hover:text-[#27457a] pb-1 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#27457a]" />
              Cuéntanos tu experiencia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
