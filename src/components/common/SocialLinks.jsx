// Componente SocialLinks básico
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center">
      <a href="https://www.instagram.com/isocafestival/?hl=es" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram className="w-9 h-9 text-pink-500 hover:text-pink-600 transition-colors" />
      </a>
      <a href="https://www.facebook.com/isocafestival/?locale=es_LA" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebook className="w-9 h-9 text-blue-700 hover:text-blue-600 transition-colors" />
      </a>
    </div>
  );
} 