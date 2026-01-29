
import React from 'react';
import { Check, Star, Shield, ArrowRight } from 'lucide-react';

export const Offer: React.FC = () => {
  return (
    <section id="oferta" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass p-8 md:p-12 rounded-[3rem] border-2 border-amber-500/20 relative overflow-hidden">
          {/* Top Badge */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-amber-500 text-black px-6 py-2 rounded-b-2xl font-black text-sm uppercase tracking-widest shadow-lg">
            Oferta Limitada 2026
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 mt-4">
            Entre para o <span className="text-gradient-gold italic">0.1%</span>
          </h2>
          
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Receba o mapa completo, a lista de nichos minerados e o workflow de IA para escala imediata.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="text-left space-y-3">
              {[
                "O Mapa dos 12 Nichos Virais 2026",
                "Módulo: YouTube Dark Americano",
                "Script Automatizado com IA",
                "Acesso Vitalício à Comunidade"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/90 font-medium">
                  <Check className="text-green-400" size={20} />
                  {item}
                </div>
              ))}
            </div>
            
            <div className="h-px w-full md:w-px md:h-24 bg-white/10"></div>
            
            <div className="text-center">
              <span className="text-white/40 line-through text-xl block">de R$ 997,00</span>
              <span className="text-5xl md:text-7xl font-black text-white block my-2">R$ 197</span>
              <span className="text-amber-500 font-bold block">à vista ou 12x de R$ 19,70</span>
            </div>
          </div>
          
          <a 
            href="#" 
            className="inline-block w-full max-w-md bg-amber-500 text-black py-6 rounded-[2rem] text-xl font-black animate-pulse-gold hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
          >
            QUERO O MEU ACESSO AGORA
            <ArrowRight size={24} />
          </a>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-white/40 text-sm">
            <div className="flex items-center gap-1">
              <Shield size={16} /> 7 dias de garantia
            </div>
            <div className="flex items-center gap-1">
              <Star size={16} className="fill-amber-500/50" /> 4.9/5 estrelas
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-white/30 text-xs max-w-2xl mx-auto">
          Ao garantir sua vaga, você concorda com nossos termos de uso. O resultado varia conforme a dedicação de cada aluno. A plataforma não garante ganhos, mas sim o ensino das estratégias.
        </div>
      </div>
    </section>
  );
};
