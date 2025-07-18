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
          <a 
            href="/informacion/ubicacion" 
            className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
            onClick={handleItemClick}
          >
            Ubicación
          </a>
        </li>
        <li>
          <a 
            href="/informacion/preguntas-frecuentes" 
            className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
            onClick={handleItemClick}
          >
            Preguntas Frecuentes
          </a>
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
      <li>
        <a 
          href="/informacion/ubicacion" 
          className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group"
        >
          Ubicación
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
        </a>
      </li>
      <li>
        <a 
          href="/informacion/preguntas-frecuentes" 
          className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group"
        >
          Preguntas Frecuentes
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
        </a>
      </li>
    </ul>
  );
} 