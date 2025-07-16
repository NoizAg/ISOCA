// Componente SocialLinks básico
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram className="w-6 h-6 hover:text-pink-600" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebook className="w-6 h-6 hover:text-blue-600" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <FaTwitter className="w-6 h-6 hover:text-blue-400" />
      </a>
    </div>
  );
} 