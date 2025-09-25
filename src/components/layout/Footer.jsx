import Image from 'next/image';
import SocialLinks from '../common/SocialLinks';
import NavMenu from '../common/NavMenu';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-12 border-t">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 mb-4 md:mb-0">
          <Image src="/images/1X1WEB.JPG" alt="Logo Isoca Festival" width={36} height={36} />
          <span className="font-bold text-lg text-green-700 hidden sm:inline">Isoca Festival</span>
        </a>
        {/* Redes sociales */}
        <SocialLinks />
      </div>
      <div className="container mx-auto text-center text-gray-500 text-xs mt-6">
        © 2026 Festival Isoca. Todos los derechos reservados.<br />
        
        Sitio desarrollado para fines informativos y de difusion cultural.
        
      </div>
    </footer>
  );
}
