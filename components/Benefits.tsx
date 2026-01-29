
import React from 'react';
import { DollarSign, Clock, Layout, Users, ShieldCheck, Zap } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <DollarSign className="text-emerald-400" />,
      title: "Faturamento em Dólar",
      desc: "Receba 5x mais pelo mesmo esforço através de canais internacionais."
    },
    {
      icon: <Clock className="text-blue-400" />,
      title: "Liberdade de Tempo",
      desc: "Produza o conteúdo da semana inteira em apenas 3 horas de trabalho."
    },
    {
      icon: <Layout className="text-purple-400" />,
      title: "Sem Aparecer",
      desc: "Crie impérios digitais mantendo sua total privacidade e anonimato."
    },
    {
      icon: <Users className="text-pink-400" />,
      title: "Crescimento Viral",
      desc: "Domine nichos com baixa concorrência e alto interesse do público."
    },
    {
      icon: <ShieldCheck className="text-amber-400" />,
      title: "Segurança de Nicho",
      desc: "Nichos que não dependem de trends passageiras, duram anos."
    },
    {
      icon: <Zap className="text-cyan-400" />,
      title: "Suporte VIP",
      desc: "Comunidade fechada para tirar dúvidas diretamente com os experts."
    }
  ];

  return (
    <section id="beneficios" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Por que você precisa disso?</h2>
          <p className="text-white/50 text-lg">Vantagens exclusivas de quem domina o Mapa dos Nichos Virais.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div 
              key={i} 
              className="glass p-8 rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all group hover:-translate-y-2 duration-300"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {b.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{b.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
