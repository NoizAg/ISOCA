"use client";

import { useState } from 'react';

export default function NavMenu({ mobile = false, onItemClick }) {
  const [infoOpen, setInfoOpen] = useState(false);

  const handleItemClick = () => {
    if (onItemClick) onItemClick();
  };

  const handleInfoToggle = () => {
    setInfoOpen(!infoOpen);
  };

  if (mobile) {
    return (
      <ul className="flex flex-col gap-4">
        <li>
          <a 
            href="/comidas" 
            className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
            onClick={handleItemClick}
          >
            Comidas
          </a>
        </li>
        <li>
          <a 
            href="/talleres" 
            className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
            onClick={handleItemClick}
          >
            Talleres
          </a>
        </li>
        <li>
          <a 
            href="/bandas" 
            className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
            onClick={handleItemClick}
          >
            Bandas
          </a>
        </li>
        <li>
          <button
            onClick={handleInfoToggle}
            className="w-full text-left py-3 px-4 text-lg font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors flex items-center justify-between"
          >
            Información
            <svg 
              className={`w-5 h-5 transition-transform duration-200 ${infoOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <ul className={`ml-4 mt-2 space-y-2 transition-all duration-200 ${infoOpen ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            <li>
              <a 
                href="/informacion/ubicacion/page" 
                className="block py-2 px-4 text-base text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                onClick={handleItemClick}
              >
                Ubicación
              </a>
            </li>
            <li>
              <a 
                href="/informacion/preguntas-frecuentes" 
                className="block py-2 px-4 text-base text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                onClick={handleItemClick}
              >
                Preguntas Frecuentes
              </a>
            </li>
          </ul>
        </li>
      </ul>
    );
  }

  return (
    <ul className="flex items-center gap-8">
      <li>
        <a 
          href="/comidas" 
          className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group"
        >
          Comidas
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
        </a>
      </li>
      <li>
        <a 
          href="/talleres" 
          className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group"
        >
          Talleres
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
        </a>
      </li>
      <li>
        <a 
          href="/bandas" 
          className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group"
        >
          Bandas
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
        </a>
      </li>
      <li className="relative group">
        <button
          className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 flex items-center gap-1 relative"
        >
          Información
          <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
        </button>
        <ul className="absolute left-0 mt-2 bg-white shadow-xl rounded-lg border border-gray-100 hidden group-hover:block min-w-[200px] z-10 py-2">
          <li>
            <a 
              href="/informacion/ubicacion" 
              className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-200"
            >
              Ubicación
            </a>
          </li>
          <li>
            <a 
              href="/informacion/preguntas-frecuentes" 
              className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-200"
            >
              Preguntas Frecuentes
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
} 