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

  // Portal para overlay y drawer modernizado
  const mobileMenuPortal = mobileOpen && typeof window !== 'undefined' && document.body
    ? ReactDOM.createPortal(
        <>
          {/* Overlay con mejor efecto */}
          <div
            style={{ zIndex: 9998 }}
            className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 ${
              mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setMobileOpen(false)}
            aria-hidden={!mobileOpen}
          />
          {/* Drawer modernizado */}
          <nav
            style={{ zIndex: 9999 }}
            className={`fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl border-l border-white/20 transform transition-all duration-500 ease-out ${
              mobileOpen ? 'translate-x-0' : 'translate-x-full'
            } lg:hidden overflow-y-auto`}
            aria-label="Menú móvil"
          >
            <div className="p-8 flex flex-col h-full">
              <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-200/50">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src="/images/logo isoca.png"
                      alt="Logo Isoca Festival"
                      className="w-10 h-10 object-contain transition-transform duration-300 hover:scale-110"
                      style={{ 
                        borderRadius: "12px", 
                        background: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
                        padding: "2px"
                      }}
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-xl blur opacity-20"></div>
                  </div>
                  <span className="font-bold text-xl text-gray-800 tracking-tight">Festival Isoca</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-3 hover:bg-gray-100/80 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95"
                  aria-label="Cerrar menú"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-1">
                <NavMenu mobile={true} onItemClick={() => setMobileOpen(false)} />
              </div>
            </div>
          </nav>
        </>,
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
            <img
              src="/images/logo isoca.png"
              alt="Logo Isoca Festival"
              className={`object-contain transition-all duration-500 ${
                scrolled ? 'w-12 h-12' : 'w-16 h-16'
              }`}
              style={{ 
                borderRadius: "16px", 
                background: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
                padding: "4px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
              }}
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