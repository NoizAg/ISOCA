export default function ComidasPage() {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/Comidas.webp")',
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
      <div className="relative z-10 container mx-auto pt-48 px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">Comidas</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-white drop-shadow-md leading-relaxed">
            Explora la variedad gastronómica del festival: sabores locales, opciones saludables y propuestas para todos los gustos.
          </p>
          {/* Aquí puedes agregar un listado de puestos de comida o componentes relacionados */}
        </div>
      </div>
    </div>
  );
}