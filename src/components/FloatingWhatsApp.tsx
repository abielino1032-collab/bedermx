import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/522215727020?text=Hola,%20quisiera%20recibir%20información%20sobre%20los%20colchones%20BEDER"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 sm:right-6 sm:bottom-6 z-50 bg-[#1fa855] hover:bg-[#168843] text-white rounded-full px-5 py-3.5 sm:px-6 sm:py-4 font-bold text-sm sm:text-base shadow-2xl flex items-center gap-2.5 transition-all hover:scale-105 group"
      aria-label="Contactar a Colchones BEDER por WhatsApp"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="font-sans tracking-wide">WhatsApp</span>
      <span className="hidden sm:inline-block text-xs bg-black/20 px-2 py-0.5 rounded-full font-mono text-emerald-100">
        22 15 72 70 20
      </span>
    </a>
  );
}
