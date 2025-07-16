// Componente ExperienceSection básico
export default function ExperienceSection() {
  return (
    <section className="relative h-[100vh] flex items-center justify-center bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        src="/videos/experience-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl font-[outfit] mb-4">La Experiencia de Estar Ahí</h2>
        <p className="mb-6 text-lg">Un viaje inolvidable donde la música, la naturaleza y la comunidad se unen.</p>
      </div>
    </section>
  );
} 