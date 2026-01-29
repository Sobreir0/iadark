
import React from 'react';
import { Target, Search, Rocket, Gem } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section id="solucao" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Gem size={14} className="fill-current" />
            O Antídoto
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            Apresentamos: <br />
            <span className="text-gradient-gold">O Método Low Ticket</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Esqueça câmeras caras ou equipes de edição. O futuro pertence a quem sabe encontrar as <span className="text-white font-bold">pepitas de ouro do algoritmo</span>: vídeos simples, de baixo custo de produção, que geram faturamentos gigantescos.
          </p>
          
          <ul className="space-y-4">
            {[
              "Mineração de nichos americanos antes de chegarem no Brasil",
              "Engenharia reversa de vídeos que bateram 1M de views em 48h",
              "Workflow de produção 5x mais rápido com Inteligência Artificial",
              "Estratégia de Monetização Híbrida (AdSense + CPA)"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/40">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                <span className="text-white/80 font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex-1 w-full">
          <div className="grid grid-cols-2 gap-4">
            <div className="glass p-6 rounded-3xl mt-8 animate-float">
               <Target className="text-blue-500 mb-4" size={32} />
               <h4 className="font-bold mb-2">Foco Total</h4>
               <p className="text-white/40 text-sm">Direto ao que funciona sem enrolação.</p>
            </div>
            <div className="glass p-6 rounded-3xl animate-float" style={{ animationDelay: '1s' }}>
               <Search className="text-amber-500 mb-4" size={32} />
               <h4 className="font-bold mb-2">Mineração</h4>
               <p className="text-white/40 text-sm">Encontre o ouro antes de todo mundo.</p>
            </div>
            <div className="glass p-6 rounded-3xl mt-4 animate-float" style={{ animationDelay: '0.5s' }}>
               <Rocket className="text-blue-500 mb-4" size={32} />
               <h4 className="font-bold mb-2">Escala</h4>
               <p className="text-white/40 text-sm">Replique o processo em 10 canais.</p>
            </div>
            <div className="glass p-6 rounded-3xl -mt-4 animate-float" style={{ animationDelay: '1.5s' }}>
               <Gem className="text-amber-500 mb-4" size={32} />
               <h4 className="font-bold mb-2">Lucro</h4>
               <p className="text-white/40 text-sm">A maior margem líquida do mercado digital.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
