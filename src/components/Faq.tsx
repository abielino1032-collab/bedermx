import { useState } from 'react';
import { FAQ_ITEMS } from '../data/bederData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white border-b border-[#dfe5ee]">
      <div className="max-w-[860px] mx-auto px-4 sm:px-6">
        {/* Head */}
        <div className="text-center flex flex-col items-center gap-2 mb-12">
          <div className="text-xs font-bold tracking-[0.16em] uppercase text-[#27457a]">
            Preguntas frecuentes
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#060c2c] leading-tight">
            Resolvemos{' '}
            <em className="not-italic text-[#27457a] bg-gradient-to-r from-[#8fbfe0]/40 to-[#cbe9e5]/40 px-2 py-0.5 rounded-md">
              tus dudas
            </em>
          </h2>
          <p className="text-sm sm:text-base text-[#5d6878] max-w-lg mt-2">
            Todo lo que necesitas saber antes de estrenar tu colchón BEDER con garantía directa de
            fábrica.
          </p>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-[#dfe5ee] border-t border-b border-[#dfe5ee]">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5 sm:py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <span className="font-display font-bold text-lg sm:text-xl text-[#060c2c] group-hover:text-[#27457a] transition-colors leading-snug">
                    {item.q}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#f4f6fa] text-[#27457a] flex items-center justify-center shrink-0 group-hover:bg-[#e4ecf6] transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-10 text-sm sm:text-base text-[#5d6878] leading-relaxed animate-in fade-in duration-200">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
