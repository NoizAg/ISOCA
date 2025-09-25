import Image from 'next/image';

// Componente BandsSection con imagen de fondo
export default function BandsSection() {
  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/band-photo-1.jpg"
        alt="Bandas en el Festival Isoca"
        fill
        className="object-cover z-0"
        priority={false}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 text-center text-white px-4 w-full">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg ">Bandas</h2>
        <p className="mb-6 text-lg max-w-3xl mx-auto drop-shadow">
          <span style={{ FontSize: '25px' }}>Disfrutemos juntos de la energia y la musica de grandes artistas
</span>
        </p>
        <a href="/bandas" className="inline-block px-6 py-2 bg-green-800 text-white rounded font-semibold hover:bg-green-700 transition">+ INFO</a>
      </div>
    </section>
  );
} 