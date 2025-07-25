// Componente HeroSection básico
export default function HeroSection() {
  return (
    <section className="relative h-[100vh] flex items-center justify-center bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src="/videos/Hero-Video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg font-[Outfit]">FESTIVAL ISOCA 2026: Música, Talleres y Naturaleza</h1>
        <a href="https://www.tuentrada.com/eventos/detalle/Festival-Isoca/720437115623" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-green-600 rounded text-lg font-semibold hover:bg-green-700 transition">¡COMPRA TU ENTRADA!</a>
      </div>
    </section>
  );
}