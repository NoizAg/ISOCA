// Componente WorkshopsSection con imagen de fondo
export default function WorkshopsSection() {
  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      <img
        src="/images/activity-thumb-1.jpg"
        alt="Talleres en el Festival Isoca"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 text-center text-white px-4 w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">Talleres</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto drop-shadow">Aprende y crece con nuestras charlas y talleres interactivos sobre ecología y bienestar.</p>
        <a href="/talleres" className="inline-block px-6 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700 transition">Conocer Más</a>
      </div>
    </section>
  );
} 