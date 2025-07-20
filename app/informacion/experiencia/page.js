export default function ExperienciaPage() {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/Experiencia.jpg")',
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">La Experiencia</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-white drop-shadow-md leading-relaxed">
            Un viaje inolvidable donde la música, la naturaleza y la comunidad se unen para crear momentos únicos que perdurarán en tu memoria.
          </p>
          {/* Aquí puedes agregar más detalles sobre la experiencia del festival */}
        </div>
      </div>
    </div>
  );
} 