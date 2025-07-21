export default function ExperienciaPage() {
  const images = [
    "isoca@agusph-016.webp",
    "isoca@agusph-045.webp",
    "isoca@agusph-054.webp",
    "isoca@agusph-058.webp",
    "isoca@agusph-070.webp",
    "isoca@agusph-074.webp",
    "isoca@agusph-086.webp",
    "isoca@agusph-129.webp",
    "isoca@agusph-135.webp",
    "isoca@agusph-150.webp",
    "isoca@agusph-161.webp",
    "isoca@agusph-302.webp",
    "isoca@agusph-360.webp",
    "isoca@agusph-850.webp"
  ];

  return (
    <div 
      className="relative min-h-screen bg-black"
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">La Experiencia</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-white drop-shadow-md leading-relaxed">
            Un viaje inolvidable donde la música, la naturaleza y la comunidad se unen para crear momentos únicos que perdurarán en tu memoria.
          </p>
        </div>
        {/* Masonry grid de imágenes */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 max-w-5xl mx-auto mt-10">
          {images.map((img) => (
            <img
              key={img}
              src={`/images/Experiencia/${img}`}
              alt="Experiencia Isoca"
              className="w-full mb-4 rounded-lg shadow-md break-inside-avoid"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
} 