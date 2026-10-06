import { useState } from 'react';
import { Phone, MessageCircle, Menu as MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  currentPage?: 'home' | 'nosotros';
  onNavigate?: (page: 'home' | 'nosotros', sectionId?: string) => void;
  onOpenCatalog?: () => void;
}

export default function Navbar({ currentPage = 'home', onNavigate, onOpenCatalog }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Colchones', href: '#coleccion', page: 'home' as const },
    { label: 'Por qué BEDER', href: '#tecnologia', page: 'home' as const },
    { label: 'Nosotros', href: '#nosotros', page: 'nosotros' as const },
    { label: 'Galería', href: '#galeria', page: 'home' as const },
    { label: 'Preguntas', href: '#faq', page: 'home' as const },
    { label: 'Contacto', href: '#contacto', page: 'home' as const },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(link.page, link.href);
    } else {
      window.location.hash = link.href;
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#dfe5ee] transition-all">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-[74px] flex items-center justify-between gap-4">
        {/* Logo (solo texto) */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate('home');
          }}
          className="flex flex-col group text-left cursor-pointer"
        >
          <div className="font-display font-black text-2xl sm:text-[26px] tracking-tight text-[#060c2c] leading-none group-hover:opacity-90 transition-opacity">
            BED<em className="not-italic text-[#27457a]">ER</em>
          </div>
          <span className="font-sans text-[10px] font-bold tracking-[0.24em] uppercase text-[#5d6878] leading-tight mt-0.5">
            Colchones
          </span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-7 font-medium text-[15px] text-[#18202c]">
          {navLinks.map((link) => {
            const isCurrent = link.page === 'nosotros' ? currentPage === 'nosotros' : currentPage === 'home';
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`py-1 transition-all cursor-pointer ${
                  link.page === 'nosotros' && currentPage === 'nosotros'
                    ? 'text-[#27457a] font-bold border-b-2 border-[#8fbfe0]'
                    : 'hover:text-[#27457a] hover:border-b-2 hover:border-[#8fbfe0]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Nav CTA Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="tel:2215727020"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#060c2c] hover:text-[#27457a] border-b-2 border-[#8fbfe0] pb-0.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#27457a]" />
            22 15 72 70 20
          </a>

          <a
            href="https://wa.me/522215727020?text=Hola,%20quisiera%20recibir%20asesoría%20sobre%20los%20colchones%20BEDER"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-semibold text-sm bg-[#060c2c] text-white hover:bg-[#27457a] transition-all shadow-sm hover:shadow"
          >
            <MessageCircle className="w-4 h-4 text-[#8fbfe0]" />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Burger Toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-[#060c2c] hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#dfe5ee] bg-white px-6 py-5 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 text-base font-semibold text-[#18202c]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="py-1 hover:text-[#27457a] transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:2215727020"
                className="inline-flex items-center gap-2 text-[#060c2c] font-bold"
              >
                <Phone className="w-4 h-4 text-[#27457a]" />
                Llamar: 22 15 72 70 20
              </a>
              <a
                href="https://wa.me/522215727020?text=Hola,%20me%20interesa%20un%20colchón%20BEDER"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#1fa855] text-white font-bold"
              >
                <MessageCircle className="w-5 h-5" />
                Contactar por WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
