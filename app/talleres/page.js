"use client";
import { useState } from "react";

const images = [1, 2, 3, 4, 5, 6].map((n) => `/images/Talleres/${n}.webp`); // o .jpeg según corresponda

export default function TalleresPage() {
  const [modalImg, setModalImg] = useState(null);

  return (
    <div className="container mx-auto py-16">
      <h1 className="mb-6 text-6xl mx-auto font-bold text-center">Talleres</h1>
      <p className="mb-6 text-lg max-w-2xl mx-auto font-bold ml-4">
        Participa en charlas y talleres interactivos sobre ecologia, bienestar y desarrollo personal.
      </p>
       <h1 className="mb-6 text-4xl mx-auto font-bold text-center">ACA TE VAMOS A MOSTRAR TODAS LAS NOVEDADES</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {images.map((src, i) => (
          <button
            key={src}
            className="bg-gray-200 rounded-lg overflow-hidden shadow hover:scale-105 transition flex items-center justify-center p-0"
            style={{ maxWidth: 400, width: "100%" }}
            onClick={() => setModalImg(src)}
          >{/*
             <img
              src={src}
              alt={`Taller ${i + 1}`}
              className="block w-full h-auto object-contain"
              loading="lazy"
              style={{ display: "block" }}
            />
             */}
          </button>
        ))}
      </div>
        
      {/* Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setModalImg(null)}
        >
          <div className="relative p-4 bg-transparent" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold z-10"
              onClick={() => setModalImg(null)}
              aria-label="Cerrar"
            >
              &times;
            </button>
            <img
              src={modalImg}
              alt="Taller grande"
              className="block w-auto h-auto max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-lg bg-black"
              style={{ margin: "0 auto" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}