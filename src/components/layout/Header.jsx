"use client";

import Image from 'next/image';
import NavMenu from '../common/NavMenu';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);



  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo - Centered to the left */}
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img
            src="/images/logo isoca.png"
            alt="Logo Isoca Festival"
            className="w-25 h-17 object-contain"
            style={{ borderRadius: "0.5rem", background: "white" }}
          />
          <span className="font-bold text-xl text-black hidden sm:inline">Festival Isoca</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <NavMenu />
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Abrir menú"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`block w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      />

      {/* Mobile menu drawer */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden overflow-y-auto`}
        aria-label="Menú móvil"
      >
        <div className="p-6 flex flex-col h-full">
          {/* Mobile menu header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo isoca.png"
                alt="Logo Isoca Festival"
                className="w-8 h-8 object-contain"
                style={{ borderRadius: "0.5rem", background: "white" }}
              />
              <span className="font-bold text-lg text-gray-800">Festival Isoca</span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Cerrar menú"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Mobile navigation */}
          <div className="flex-1">
            <NavMenu mobile={true} onItemClick={() => setMobileOpen(false)} />
          </div>
        </div>
      </nav>
    </header>
  );
} 