import { Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'nosotros', sectionId?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0d1828] text-[#b9c5d6] pt-16 pb-8 border-t border-white/10 text-sm">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            {/* Logo (solo texto) */}
            <button
              type="button"
              onClick={() => onNavigate?.('home')}
              className="flex flex-col group text-left cursor-pointer"
            >
              <div className="font-display font-black text-2xl sm:text-[26px] tracking-tight text-white leading-none">
                BED<em className="not-italic text-[#8fbfe0]">ER</em>
              </div>
              <span className="font-sans text-[10px] font-bold tracking-[0.24em] uppercase text-[#8fa0b8] leading-tight mt-0.5">
                Colchones
              </span>
            </button>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Empresa dedicada a la fabricación de colchones con altos estándares ortopédicos. 100% hecho en México. Orgullosamente poblana con más de 11 años de trayectoria.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400 font-medium pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Facebook
              </a>
              <span>·</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <span>·</span>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Col 2: Comprar */}
          <div>
            <h5 className="font-sans font-bold text-xs uppercase tracking-widest text-white mb-4">
              Comprar
            </h5>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href="#coleccion" className="hover:text-white transition-colors">
                  Colchones y Líneas
                </a>
              </li>
              <li>
                <a href="#coleccion" className="hover:text-white transition-colors">
                  Por medida (Ind, Mat, Qs, Ks)
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Lotes para Hotelería
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Cotización de fábrica
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Ayuda */}
          <div>
            <h5 className="font-sans font-bold text-xs uppercase tracking-widest text-white mb-4">
              Ayuda & Soporte
            </h5>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Garantía de satisfacción
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Zonas y tiempos de envío
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Atención a clientes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Empresa */}
          <div>
            <h5 className="font-sans font-bold text-xs uppercase tracking-widest text-white mb-4">
              Empresa
            </h5>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('nosotros')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Nuestra Historia
                </button>
              </li>
              <li>
                <a
                  href="#galeria"
                  onClick={() => onNavigate?.('home', '#galeria')}
                  className="hover:text-white transition-colors"
                >
                  Galería de Fábrica
                </a>
              </li>
              <li>
                <a
                  href="tel:2215727020"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8fbfe0]" />
                  22 15 72 70 20
                </a>
              </li>
              <li className="flex items-start gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#8fbfe0] shrink-0 mt-1" />
                <span>San Jerónimo Calera, Puebla, México</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            Copyright © {new Date().getFullYear()} Colchones BEDER. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <a href="#contacto" className="hover:text-white transition-colors">
              Aviso de privacidad
            </a>
            <span>·</span>
            <a href="#contacto" className="hover:text-white transition-colors">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
