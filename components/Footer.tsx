
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#030303]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">M</div>
            <span className="font-bold text-xl tracking-tight">Mapa dos Nichos 2026</span>
          </div>
          <p className="text-white/40 text-sm max-w-xs">
            Acelerando criadores para a nova era do YouTube com estratégias baseadas em dados e IA.
          </p>
        </div>
        
        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-white font-bold text-sm">Links Úteis</span>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Suporte</a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Privacidade</a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Termos</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white font-bold text-sm">Redes</span>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Instagram</a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">YouTube</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-white/20 text-xs">
        © 2024 - 2026 Mapa dos Nichos Virais. Todos os direitos reservados. Inspirado por Gabriel Bauer.
      </div>
    </footer>
  );
};
