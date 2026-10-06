import { useState } from 'react';
import { GALLERY_ITEMS } from '../data/bederData';
import { Maximize2, X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-20 sm:py-24 bg-white border-b border-[#dfe5ee]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Head */}
        <div className="mb-10">
          <div className="text-xs font-bold tracking-[0.16em] uppercase text-[#27457a] mb-2">
            Galería
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#060c2c] leading-tight">
            Sé testigo de{' '}
            <em className="not-italic text-[#27457a] bg-gradient-to-r from-[#8fbfe0]/40 to-[#cbe9e5]/40 px-2 py-0.5 rounded-md">
              lo que hacemos
            </em>
          </h2>
          <p className="text-sm sm:text-base text-[#5d6878] mt-2">
            Conoce nuestras instalaciones de producción, materiales de primera calidad y procesos de
            manufactura en Puebla.
          </p>
        </div>

        {/* Gallery Grid (Matching HTML grid template: 4 columns on desktop, only requested items on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`relative rounded-[20px] overflow-hidden bg-slate-900 group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 ${
                item.span
              } ${item.hideOnMobile ? 'hidden md:block' : ''}`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060c2c]/85 via-[#060c2c]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Text label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <h4 className="font-display font-bold text-white text-base sm:text-lg leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">{item.subtitle}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#060c2c]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#060c2c] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-white hover:text-black flex items-center justify-center transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={GALLERY_ITEMS[selectedImage].src}
                alt={GALLERY_ITEMS[selectedImage].title}
                className="w-full h-auto max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 bg-[#060c2c] border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-display font-bold text-2xl text-white">
                  {GALLERY_ITEMS[selectedImage].title}
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  {GALLERY_ITEMS[selectedImage].subtitle}
                </p>
              </div>
              <a
                href="#contacto"
                onClick={() => setSelectedImage(null)}
                className="px-5 py-2.5 rounded-full bg-white text-[#060c2c] font-bold text-xs uppercase tracking-wider hover:bg-[#8fbfe0] transition-colors"
              >
                Solicitar cotización
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
