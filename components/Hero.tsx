
import React from 'react';
import { ArrowRight, Zap, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex flex-col items-center justify-center text-center">
      <div className="max-w-5xl mx-auto z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 animate-fadeIn">
          <Zap size={14} className="fill-current" />
          Tendência Emergente 2026
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tighter animate-fadeIn">
          A Chave Mestra para o <br />
          <span className="text-gradient-blue">YouTube 2026</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed animate-fadeIn">
          Descubra o nicho inexplorado que vai te enriquecer antes que ele sature. 
          Aprenda a dominar o algoritmo com <span className="text-white font-bold">velocidade e lucro absurdo.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fadeIn">
          <a 
            href="#oferta" 
            className="group relative bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all glow-blue hover:scale-105 flex items-center gap-2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            QUERO O MAPA AGORA
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <TrendingUp size={16} />
            97 canais já faturando em dólar
          </div>
        </div>

        <div className="relative mt-12 animate-float">
          <div className="absolute inset-0 bg-blue-500/20 blur-[100px] -z-10"></div>
          <div className="glass p-4 rounded-3xl border border-white/10 max-w-4xl mx-auto">
             <img 
               src="https://picsum.photos/seed/ytchart/1200/600" 
               alt="Gráfico de crescimento" 
               className="rounded-2xl w-full shadow-2xl grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
             />
          </div>
        </div>
      </div>
    </section>
  );
};
