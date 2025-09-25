// Componente ExperienceSection básico
export default function ExperienceSection() {
  return (
    <section 
      className="relative h-[100vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/Experienciasdelisoca-optimized.webp")',
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
        <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">Experiencia </h2>
        <p className="mb-6 text-lg drop-shadow-md">Vivamos en comunidad una celebración de arte en la naturaleza
</p>
        <a href="/informacion/experiencia" className="bg-green-800 rounded-lg overflow-hidden shadow hover:scale-105 transition flex items-center justify-center p-0 inline-block px-6 py-2  text-white font-semibold hover:bg-green-700 transition">+ INFO</a>
      </div>
    </section>
  );
}