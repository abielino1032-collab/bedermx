import { useState, useRef } from 'react';
import { TECH_FEATURES } from '../data/bederData';

export default function Technology() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current || window.innerWidth >= 1024) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const card = scrollRef.current.querySelector('button') as HTMLElement;
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 16;
    const newIdx = Math.round(scrollLeft / (cardWidth + gap));
    if (newIdx >= 0 && newIdx < TECH_FEATURES.length && newIdx !== activeTab) {
      setActiveTab(newIdx);
    }
  };

  const handleSelectTab = (idx: number) => {
    setActiveTab(idx);
    if (scrollRef.current && window.innerWidth < 1024) {
      const cards = scrollRef.current.querySelectorAll('button');
      const card = cards[idx];
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      }
    }
  };

  return (
    <section id="tecnologia" className="py-20 sm:py-24 bg-[#060c2c] text-white relative overflow-hidden">
      {/* Subtle radial backdrop glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#27457a]/30 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-bold tracking-[0.16em] uppercase text-[#8fbfe0] mb-2">
            BEDERTECH™
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Tecnología que{' '}
            <em className="not-italic text-white bg-gradient-to-r from-[#27457a] to-[#8fbfe0]/40 px-2 py-0.5 rounded-md">
              nos distingue
            </em>
          </h2>
          <p className="text-base sm:text-lg text-[#c9d5e6] mt-4 leading-relaxed">
            Presente en todas nuestras líneas: Estándar, Hotelero, Premium y Luxury. Cada componente
            está concebido con precisión para regenerar tu cuerpo y brindar soporte ortopédico
            duradero.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mt-12">
          {/* Interactive Accordion (Desktop) / Carousel (Mobile) */}
          <div className="flex flex-col w-full">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex flex-row overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar gap-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:flex-col lg:overflow-visible lg:gap-3 lg:pb-0 lg:pt-0 scroll-pl-4 sm:scroll-pl-6"
            >
              {TECH_FEATURES.map((feat, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={feat.id}
                    type="button"
                    onClick={() => handleSelectTab(idx)}
                    className={`text-left rounded-2xl p-5 sm:p-6 transition-all duration-300 border cursor-pointer flex-none w-[82vw] sm:w-[84vw] lg:w-full snap-start flex flex-col justify-between ${
                      isActive
                        ? 'bg-white text-[#060c2c] border-white shadow-2xl lg:scale-[1.02]'
                        : 'bg-white/10 hover:bg-white/15 text-white border-white/20'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <h4
                          className={`font-normal text-lg sm:text-xl leading-snug ${
                            isActive ? 'text-[#060c2c]' : 'text-white'
                          }`}
                        >
                          {feat.title}
                        </h4>
                      </div>

                      {/* Body Description: always visible on mobile card, collapsible on desktop */}
                      <div
                        className={`mt-3 block lg:grid lg:transition-all lg:duration-300 lg:ease-in-out ${
                          isActive
                            ? 'lg:grid-rows-[1fr] lg:opacity-100'
                            : 'lg:grid-rows-[0fr] lg:opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p
                            className={`font-normal text-sm sm:text-base leading-relaxed ${
                              isActive ? 'text-[#5d6878]' : 'text-white/80'
                            }`}
                          >
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
              {/* Separador final para mantener el margen derecho al deslizar la última tarjeta */}
              <div className="shrink-0 w-1 sm:w-2 lg:hidden pointer-events-none" aria-hidden="true" />
            </div>

            {/* Mobile Swipe Indicators */}
            <div className="flex lg:hidden items-center justify-center gap-2 mt-2">
              {TECH_FEATURES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectTab(idx)}
                  aria-label={`Ver tarjeta ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeTab === idx ? 'w-6 bg-[#8fbfe0]' : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Visual: Cutaway Diagram (Hidden on mobile, visible on desktop) */}
          <div className="hidden lg:block relative rounded-[22px] overflow-hidden border border-white/20 bg-slate-900 shadow-2xl group">
            <div className="aspect-[4/3] relative">
              <img
                src="/src/assets/images/beder_tech_layers_1791249176537.jpg"
                alt="Corte técnico de las capas del colchón BEDER"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060c2c] via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Dynamic Layer Callout */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#060c2c]/90 backdrop-blur-md border border-white/20">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-xs font-normal uppercase tracking-widest text-[#8fbfe0]">
                  Corte Anatómico BEDERTECH™
                </span>
              </div>
              <h5 className="font-normal text-base text-white mb-1">
                {TECH_FEATURES[activeTab].title}
              </h5>
              <p className="text-xs text-slate-300 font-normal">
                {TECH_FEATURES[activeTab].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
