export default function UbicacionPage() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-6">Ubicación</h1>
      <p className="text-lg max-w-2xl mb-8">El Festival Isoca 2026 se realiza en un entorno natural único.</p>
     
      {/* Mapa de Google Maps */}
      <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.073964073964!2d-59.43491968477044!3d-38.17825544967016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9591dd2f4e4ed0d5%3A0xe6fe9eb4085d6f43!2sClub%20Dannevirke!5e0!3m2!1ses-419!2sar!4v1689634567890!5m2!1ses-419!2sar"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Club Dannevirke"
        ></iframe>
         {/* Imagen del lugar */}
     
      </div>
    </div>
  );
} 