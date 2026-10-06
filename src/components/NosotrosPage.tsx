import { ArrowLeft, Target, Compass, Award, Users, ArrowRight, MessageCircle, Heart, ShieldCheck } from 'lucide-react';
import Perks from './Perks';

interface NosotrosPageProps {
  onBackToHome: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export default function NosotrosPage({ onBackToHome, onNavigateSection }: NosotrosPageProps) {
  return (
    <div className="min-h-screen bg-white text-[#18202c] animate-in fade-in duration-300">
      {/* Top Breadcrumb Header Bar */}
      <div className="bg-[#f4f6fa] border-b border-[#dfe5ee] py-4">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#060c2c] hover:text-[#27457a] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Volver al inicio</span>
          </button>
          <div className="text-xs font-semibold text-[#5d6878]">
            <span>Inicio</span>
            <span className="mx-2">/</span>
            <span className="text-[#060c2c] font-bold">Nosotros</span>
          </div>
        </div>
      </div>

      {/* 1. Header Institucional / Nosotros */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#dfe5ee]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-end mb-14">
            <div className="flex flex-col gap-4">
              <div className="text-xs font-bold tracking-[0.16em] uppercase text-[#27457a]">
                Página Institucional
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#060c2c] leading-tight">
                Fabricantes de colchones,{' '}
                <em className="not-italic text-[#27457a] bg-gradient-to-r from-[#8fbfe0]/40 to-[#cbe9e5]/40 px-2 py-0.5 rounded-md">
                  orgullosamente poblanos
                </em>
              </h1>
              <p className="text-base sm:text-lg text-[#5d6878] leading-relaxed max-w-[56ch]">
                Somos una empresa fabricadora y comercializadora de colchones. Contamos con más de 11
                años de experiencia en México, combinando tradición artesanal con ingeniería de descanso
                moderna.
              </p>
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
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#8fbfe0]" />
                  Talento poblano
                </span>
              </div>
            </div>
          </div>

          {/* 2. Misión y Visión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misión */}
            <article className="bg-[#f4f6fa] rounded-[22px] p-8 sm:p-10 border border-[#dfe5ee] flex flex-col gap-4 relative overflow-hidden group hover:border-[#8fbfe0] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-[#27457a]">
                <Target className="w-6 h-6 text-[#27457a]" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#060c2c] tracking-tight">
                Misión
              </h2>
              <p className="text-sm sm:text-base text-[#3a4759] leading-relaxed">
                Satisfacer las necesidades de nuestros clientes con colchones de calidad a un precio
                competitivo, con tiempos de respuesta rápidos y un excelente servicio que asegure su
                preferencia y lealtad por nuestros productos. Contribuir con nuestro trabajo diario al
                crecimiento y progreso de la empresa en beneficio de los empleados, la comunidad y el
                país.
              </p>
            </article>

            {/* Visión */}
            <article className="bg-[#f4f6fa] rounded-[22px] p-8 sm:p-10 border border-[#dfe5ee] flex flex-col gap-4 relative overflow-hidden group hover:border-[#8fbfe0] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-[#27457a]">
                <Compass className="w-6 h-6 text-[#27457a]" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#060c2c] tracking-tight">
                Visión
              </h2>
              <p className="text-sm sm:text-base text-[#3a4759] leading-relaxed">
                Queremos hacer una empresa de calidad, clase mundial con procesos de manufactura
                optimizados, con personal certificado y comprometido con la mejora continua de nuestros
                productos, procesos y servicios, con rentabilidad adecuada para garantizar la
                permanencia de nuestra fuente de empleo y con un crecimiento sostenido basado en la
                preferencia y lealtad de los clientes por la marca.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 2. Perks / Compromisos y Beneficios de Fábrica */}
      <Perks />

      {/* 3. Sección "El descanso que tu cuerpo necesita" (Customer Spotlight) */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#dfe5ee]">
        <div className="max-w-[1240px] xl:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#dfe5ee] shadow-xl bg-[#060c2c] text-white grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center">
            {/* Left Visual Photo */}
            <div className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-[500px] overflow-hidden group">
              <img
                src="/src/assets/images/beder_customer_smile_1791251394572.jpg"
                alt="Clientes satisfechos con su colchón BEDER"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060c2c]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#060c2c]/90"></div>

              {/* Inset badge */}
              <div className="absolute bottom-6 left-6 bg-[#060c2c]/85 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider font-display">
                    Familias Satisfechas
                  </p>
                  <p className="text-xs text-slate-300">
                    +11 años regenerando el sueño en Puebla y todo México.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center gap-6 z-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-[#8fbfe0]">
                <span className="w-2 h-2 rounded-full bg-[#8fbfe0] inline-block"></span>
                Satisfacción comprobada
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.08] tracking-tight">
                El descanso que{' '}
                <em className="not-italic text-white bg-gradient-to-r from-[#27457a] to-[#8fbfe0]/40 px-2 py-0.5 rounded-md">
                  tu cuerpo necesita
                </em>
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-[50ch]">
                Miles de personas han transformado su bienestar físico y eliminado dolores de espalda
                gracias al balance anatómico de la tecnología Bedertech™ y los resortes Bonell Max.
              </p>

              <div className="grid grid-cols-2 gap-4 py-2 border-y border-white/10 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-[#8fbfe0] shrink-0" />
                  <span>Garantía de hasta 10 años</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <Award className="w-4 h-4 text-[#8fbfe0] shrink-0" />
                  <span>Fabricación directa en Puebla</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onBackToHome();
                    setTimeout(() => {
                      const el = document.getElementById('coleccion');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-white text-[#060c2c] hover:bg-[#8fbfe0] hover:text-[#060c2c] transition-all shadow-md group cursor-pointer"
                >
                  <span>Descubrir colchones</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="https://wa.me/522215727020?text=Hola,%20quisiera%20asesoría%20sobre%20los%20colchones%20BEDER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm border-2 border-white/40 text-white hover:bg-white/10 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#1fa855]" />
                  <span>Asesoría por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botón de retorno al final de la página */}
      <div className="py-12 bg-[#fbf8f3] text-center border-t border-[#dfe5ee]">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#060c2c] text-white hover:bg-[#27457a] font-bold text-sm transition-all shadow-md cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a la tienda principal</span>
        </button>
      </div>
    </div>
  );
}
