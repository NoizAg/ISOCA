// Componente HeroSection básico
import Image from 'next/image'
export default function HeroSection() {
  return (
    <section className="relative h-[100vh] flex items-center justify-center bg-black">
      <Image
        src="/images/flyer_isoca_hero.jpg"
        alt="flyer_isoca_hero"
        fill
        className="object-cover z-0"
        priority={false}
        sizes="100vw"
      />
       <div className="absolute bottom-[5%] right-8 md:bottom-12 md:right-16 z-10">
        
        <a
  href="https://www.tuentrada.com/eventos/detalle/Festival-Isoca/720437115623"
  target="_blank"
  rel="noopener noreferrer"
  className="
    absolute
    z-20
    px-32 py-3
    bg-green-800
    rounded
    text-lg font-semibold
    hover:bg-green-700
    transition
    w-auto
  "
  style={{
    left: '50%',
    top: '140px',
    transform: 'translateX(80%)', // Centra el botón horizontalmente
    width: '220px', // Cambia este valor para ajustar el ancho
    minWidth: '160px', // Opcional: ancho mínimo
    maxWidth: '1000px', // Opcional: ancho máximo
  }}
>
  ¡COMPRA TU ENTRADA!
</a>
      </div>
    </section>
  );
}