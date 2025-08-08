import Image from 'next/image';

export default function UbicacionPage() {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/Ubi2.webp")',
      }}
    >
      {/* Gradiente con CSS inline */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.3), rgba(0,0,0,0.5))'
        }}
      ></div>
      
      {/* Contenido */}
      <div className="relative z-10 container mx-auto py-16 px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">Ubicación</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-white drop-shadow-md leading-relaxed">
            El Festival Isoca 2026 se realiza en un entorno natural único.
          </p>
          
          {/* Mapa de Google Maps */}
          <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.073964073964!2d-59.43491968477044!3d-38.17825544967016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9591dd2f4e4ed0d5%3A0xe6fe9eb4085d6f43!2sClub%20Dannevirke!5e0!3m2!1ses-419!2sar!4v1689634567890!5m2!1ses-419!2sar"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Club Dannevirke"
            ></iframe>
          </div>
          
          {/* Imagen principal optimizada */}
          <div className="w-full max-w-3xl mx-auto">
            <Image
              src="/images/ubicación.jpg"
              alt="Ubicación Festival Isoca"
              width={800}
              height={600}
              className="w-3/4 mx-auto rounded-lg shadow-md object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 75vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 