
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="glass-dark px-6 py-3 rounded-full flex items-center gap-8 max-w-4xl w-full justify-between animate-fadeIn">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">M</div>
          <span className="font-bold text-lg tracking-tight hidden sm:block">Mapa dos Nichos 2026</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/70">
          <a href="#problema" className="hover:text-white transition-colors">O Problema</a>
          <a href="#solucao" className="hover:text-white transition-colors">A Solução</a>
          <a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a>
        </div>
        <a 
          href="#oferta" 
          className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-white/90 transition-all hover:scale-105"
        >
          Quero Acessar
        </a>
      </div>
    </nav>
  );
};
