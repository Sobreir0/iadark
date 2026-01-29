
import React from 'react';
import { Skull, AlertTriangle, Ghost } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section id="problema" className="py-24 px-6 relative bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">O Mar de Igualdade</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            99% dos criadores estão cometendo o erro fatal de copiar os grandes. Por que canais comuns estão morrendo hoje?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Skull className="text-red-500" size={32} />,
              title: "Saturação Extrema",
              description: "Você tenta entrar em nichos onde milhares de pessoas já estão fazendo exatamente a mesma coisa. Resultado? CPM baixo e visualizações nulas."
            },
            {
              icon: <AlertTriangle className="text-amber-500" size={32} />,
              title: "O Algoritmo Te Ignora",
              description: "O YouTube prioriza retenção e inovação. Se você é 'mais do mesmo', ele enterra seu vídeo no fundo da plataforma."
            },
            {
              icon: <Ghost className="text-gray-400" size={32} />,
              title: "Canais Fantasmas",
              description: "Centenas de horas de edição para colher 10 views. Esse é o cemitério de canais que não conhecem os nichos virais de 2026."
            }
          ].map((item, index) => (
            <div key={index} className="glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all group">
              <div className="mb-6 p-4 bg-white/5 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
