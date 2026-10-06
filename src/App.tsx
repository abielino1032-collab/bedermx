/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import PromoBar from './components/PromoBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Technology from './components/Technology';
import Warranty from './components/Warranty';
import Reviews from './components/Reviews';
import About from './components/About';
import Gallery from './components/Gallery';
import Help from './components/Help';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import NosotrosPage from './components/NosotrosPage';
import { MattressModel } from './data/bederData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'nosotros'>('home');
  const [selectedModel, setSelectedModel] = useState<MattressModel | null>(null);

  // Sync state with URL hash
  useEffect(() => {
    const syncWithHash = () => {
      if (window.location.hash === '#nosotros') {
        setCurrentPage('nosotros');
      } else if (window.location.hash) {
        // If hash refers to a home section (e.g. #coleccion, #tecnologia, #contacto)
        if (currentPage === 'nosotros') {
          setCurrentPage('home');
        }
      }
    };

    syncWithHash();
    window.addEventListener('hashchange', syncWithHash);
    return () => window.removeEventListener('hashchange', syncWithHash);
  }, [currentPage]);

  const handleNavigate = (page: 'home' | 'nosotros', sectionId?: string) => {
    setCurrentPage(page);
    if (page === 'nosotros') {
      window.location.hash = '#nosotros';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (sectionId) {
        window.location.hash = sectionId;
        setTimeout(() => {
          const id = sectionId.replace('#', '');
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleRequestCatalog = () => {
    if (currentPage !== 'home') {
      handleNavigate('home', '#contacto');
    } else {
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-[#18202c]">
      {/* 1. Promo Announcement Bar */}
      <PromoBar />

      {/* 2. Sticky Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenCatalog={handleRequestCatalog}
      />

      {currentPage === 'nosotros' ? (
        /* Página independiente: Misión, Visión y "El descanso que tu cuerpo necesita" */
        <main className="flex-grow">
          <NosotrosPage
            onBackToHome={() => handleNavigate('home')}
            onNavigateSection={(sectionId) => handleNavigate('home', sectionId)}
          />
        </main>
      ) : (
        /* Página central: Sin misión/visión ni "El descanso que tu cuerpo necesita" */
        <main className="flex-grow">
          {/* 3. Hero Section */}
          <Hero />

          {/* 5. Collection / Catálogo de colchones */}
          <Collection
            onSelectModel={(model) => setSelectedModel(model)}
            onRequestCatalog={handleRequestCatalog}
          />

          {/* 6. Technology / BEDERTECH Diferenciadores */}
          <Technology />

          {/* 7. Warranty / Compra con confianza */}
          <Warranty />

          {/* 8. Customer Reviews / Testimonios */}
          <Reviews />

          {/* 9. Nosotros (Solo el bloque seleccionado: Fabricantes poblanos + 11 años) */}
          <About onNavigateToNosotros={() => handleNavigate('nosotros')} />

          {/* 10. Photo Gallery / Sé testigo de lo que hacemos */}
          <Gallery />

          {/* 10. Help / Estamos cerca de ti (Showroom & Asesor) */}
          <Help />

          {/* 11. FAQ / Preguntas frecuentes */}
          <Faq />

          {/* 12. Contact & Location Map */}
          <Contact />
        </main>
      )}

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Quick Quote & Specs Modal */}
      <QuoteModal
        model={selectedModel}
        onClose={() => setSelectedModel(null)}
      />
    </div>
  );
}
