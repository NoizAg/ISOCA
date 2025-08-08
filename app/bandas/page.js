export default function BandasPage() {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/Escenariodelisoca-optimized.webp")',
      }}
    >
      {/* Gradiente con CSS inline */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.3), rgba(0,0,0,0.5))'
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto py-16 px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-Creepster  mb-6 text-white drop-shadow-lg">LINE UP</h1>
          {/*<p className="text-lg md:text-xl max-w-2xl mb-8 text-white drop-shadow-md leading-relaxed">
            Conoce a los artistas y bandas que formarán parte del Festival Isoca 2026. 
            ¡Disfrutemos de la música que tanto nos gusta y exploremos nuevos artistas!
          </p>*/}
        </div>
      </div>
    </div>
  );
}