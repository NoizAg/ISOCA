// Componente ActivitiesSection básico
export default function ActivitiesSection() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="flex justify-center mb-6">
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
          <rect width="96" height="96" rx="16" fill="#e5e7eb" />
          <path d="M24 72L40 56L56 72L72 40" stroke="#9ca3af" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="72" cy="32" r="6" fill="#9ca3af" />
        </svg>
      </div>
      <h2 className="text-3xl font-bold mb-4">Actividades</h2>
      <p className="mb-6 text-lg max-w-2xl mx-auto">
        <span style={{ fontFamily: 'bangers, sans-serif' }}>Más allá de la música, sumergete en experiencias unicas para conectar con la naturaleza y el bienestar.</span></p>
      <a href="/actividades" className="inline-block px-6 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700 transition">+ info</a>
    </section>
  );
} 