// Componente ExperienceSection básico
export default function ExperienceSection() {
  return (
    <section 
      className="relative h-[100vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/Experienciasdelisoca.webp")',
      }}
    >
      {/* Gradiente con CSS inline */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.3), rgba(0,0,0,0.5))'
        }}
      ></div>
      
      <div className="relative z-10 max-w-2xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">La Experiencia de Estar Ahí</h2>
        <p className="mb-6 text-lg drop-shadow-md">Un viaje inolvidable donde la música, la naturaleza y la comunidad se unen.</p>
        <a href="/informacion/experiencia" className="inline-block px-6 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700 transition">Conocer Más</a>
      </div>
    </section>
  );
} 