import { useState } from 'react';
import { MattressModel } from '../data/bederData';
import {
  X,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Layers,
  Activity,
  Moon,
  Crown,
  Compass,
  HeartHandshake,
  Award,
} from 'lucide-react';

interface QuoteModalProps {
  model: MattressModel | null;
  onClose: () => void;
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

export default function QuoteModal({ model, onClose }: QuoteModalProps) {
  if (!model) return null;

  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1); // Default to Matrimonial
  const currentSize = model.sizes[selectedSizeIndex] || model.sizes[0];

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Hola Colchones BEDER, quisiera cotizar el colchón Línea ${model.name} en tamaño ${currentSize.size} (${currentSize.dimensions}). ¿Me podrían compartir el precio directo de fábrica y disponibilidad de entrega para mi zona?`
    );
    window.open(`https://wa.me/522215727020?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#060c2c]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-white rounded-[24px] overflow-hidden shadow-2xl border border-slate-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="bg-[#060c2c] text-white p-6 sm:p-7 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-[#8fbfe0] font-bold">
                Línea de Colchones BEDER
              </span>
              {model.badge && (
                <span className="bg-[#6fa8d6] text-[#060c2c] text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                  {model.badge}
                </span>
              )}
            </div>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-white mt-1">
              Colchón {model.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 flex flex-col gap-6 max-h-[75vh] overflow-y-auto">
          {/* Main info header without photos */}
          <div className="flex flex-col gap-3 bg-[#f4f6fa] p-5 rounded-2xl border border-slate-200">
            <p className="text-sm text-[#5d6878] leading-relaxed">{model.description}</p>
            <div className="grid grid-cols-2 gap-3 text-xs pt-1">
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-slate-400 block font-semibold">Firmeza</span>
                <span className="font-bold text-[#060c2c] text-sm">{model.firmness}</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-slate-400 block font-semibold">Altura</span>
                <span className="font-bold text-[#060c2c] text-sm">{model.height}</span>
              </div>
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#060c2c] mb-2 font-sans">
              Selecciona la medida para tu cotización:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {model.sizes.map((s, idx) => {
                const isSelected = selectedSizeIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedSizeIndex(idx)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#060c2c] bg-[#060c2c] text-white shadow-md'
                        : 'border-[#dfe5ee] bg-[#f4f6fa] text-[#18202c] hover:bg-slate-200'
                    }`}
                  >
                    <span className="font-display font-bold text-sm block">{s.size}</span>
                    <span
                      className={`text-[11px] block mt-1 ${
                        isSelected ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      {s.dimensions}
                    </span>
                    <span
                      className={`text-[11px] font-semibold block mt-1 ${
                        isSelected ? 'text-[#8fbfe0]' : 'text-[#27457a]'
                      }`}
                    >
                      Disponible
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Technical highlights with symbols */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#060c2c] mb-2 font-sans">
              Características técnicas del modelo:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#27457a]">
              {model.features.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#e4ecf6]/60 border border-[#8fbfe0]/30 font-semibold"
                >
                  <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center shrink-0">
                    {getFeatureIcon(feat)}
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action row (sin precios) */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#5d6878] block">
                Medida seleccionada:
              </span>
              <div className="font-display font-black text-2xl sm:text-3xl text-[#060c2c] tracking-tight">
                {currentSize.size}{' '}
                <span className="text-sm font-sans font-normal text-slate-500">
                  ({currentSize.dimensions})
                </span>
              </div>
              <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" /> Incluye {model.warranty}
              </span>
            </div>

            <button
              type="button"
              onClick={handleWhatsAppQuote}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#1fa855] text-white hover:bg-[#168843] font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Solicitar cotización por WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
