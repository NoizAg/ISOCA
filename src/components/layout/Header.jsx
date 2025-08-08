"use client";

import Image from 'next/image';
import NavMenu from '../common/NavMenu';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflowX = '';
    }
  }, [mobileOpen]);

  // Efecto de scroll para cambiar apariencia del header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Portal para el menú móvil
  const mobileMenuPortal = typeof window !== 'undefined' ? ReactDOM.createPortal(
    mobileOpen ? (
      <nav className="fixed inset-0 z-50 lg:hidden">
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        
        {/* Menú */}
        <div className="absolute top-0 right-0 w-80 h-full bg-white/95 backdrop-blur-xl shadow-2xl border-l border-gray-200/50 transform transition-transform duration-300 ease-out">
          <div className="flex flex-col h-full p-6">
            {/* Header del menú */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-bold text-gray-800">Menú</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navegación */}
            <div className="flex-1">
              <NavMenu mobile={true} onItemClick={() => setMobileOpen(false)} />
            </div>
          </div>
        </div>
      </nav>
    ) : null,
    document.body
  ) : null;

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-xl border-b border-gray-200/50 py-3' 
          : 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100/50 py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-8 lg:px-12">
        {/* Logo mejorado */}
        <a 
          href="/" 
          className="flex items-center gap-4 group transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <div className="relative">
            <Image
              src="/images/logo isoca.png"
              alt="Logo Isoca Festival"
              width={64}
              height={64}
              className={`object-contain transition-all duration-500 ${
                scrolled ? 'w-12 h-12' : 'w-16 h-16'
              }`}
              style={{ 
                borderRadius: "16px", 
                background: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
                padding: "4px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
              }}
              priority={true}
            />
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
          </div>
          <span 
            className={`font-bold text-black hidden sm:inline tracking-tight transition-all duration-500 ${
              scrolled ? 'text-xl' : 'text-2xl'
            }`}
            style={{
              background: 'linear-gradient(135deg, #1f2937, #eab308)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Festival Isoca
          </span>
        </a>

        {/* Navegación desktop mejorada */}
        <nav className="hidden lg:block">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl border border-amber-200/30 ring-1 ring-yellow-400/10">
            <NavMenu />
          </div>
        </nav>

        {/* Botón hamburguesa modernizado */}
        <button
          className="lg:hidden relative flex flex-col justify-center items-center w-12 h-12 focus:outline-none focus:ring-4 focus:ring-amber-500/30 rounded-xl hover:bg-amber-50/80 transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Abrir menú"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="relative w-7 h-5 flex flex-col justify-between">
            <span 
              className={`block w-full h-0.5 bg-gray-700 transition-all duration-300 ease-out ${
                mobileOpen 
                  ? 'rotate-45 translate-y-2 bg-amber-600' 
                  : 'group-hover:w-7 group-hover:bg-amber-600'
              }`}
            ></span>
            <span 
              className={`block h-0.5 bg-gray-700 transition-all duration-300 ease-out ${
                mobileOpen 
                  ? 'opacity-0 scale-0' 
                  : 'opacity-100 scale-100 w-5 group-hover:w-7 group-hover:bg-amber-600'
              }`}
            ></span>
            <span 
              className={`block w-full h-0.5 bg-gray-700 transition-all duration-300 ease-out ${
                mobileOpen 
                  ? '-rotate-45 -translate-y-2 bg-amber-600' 
                  : 'group-hover:w-7 group-hover:bg-amber-600'
              }`}
            ></span>
          </div>
          
          {/* Efecto de ripple */}
          <div className="absolute inset-0 rounded-xl bg-amber-500/20 scale-0 group-active:scale-100 transition-transform duration-200"></div>
        </button>
      </div>
      {mobileMenuPortal}
    </header>
  );
}