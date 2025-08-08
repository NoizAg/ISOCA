const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Lista de imágenes que necesitan optimización
const imagesToOptimize = [
  {
    input: 'public/images/Comida.webp',
    output: 'public/images/Comida-optimized.webp',
    quality: 80,
    width: 1920
  },
  {
    input: 'public/images/Experienciasdelisoca.webp',
    output: 'public/images/Experienciasdelisoca-optimized.webp',
    quality: 80,
    width: 1920
  },
  {
    input: 'public/images/Comidas.webp',
    output: 'public/images/Comidas-optimized.webp',
    quality: 80,
    width: 1920
  },
  {
    input: 'public/images/Escenariodelisoca.webp',
    output: 'public/images/Escenariodelisoca-optimized.webp',
    quality: 80,
    width: 1920
  }
];

async function optimizeImages() {
  console.log('🔄 Iniciando optimización de imágenes...');
  
  for (const image of imagesToOptimize) {
    try {
      if (fs.existsSync(image.input)) {
        await sharp(image.input)
          .resize(image.width, null, { withoutEnlargement: true })
          .webp({ quality: image.quality })
          .toFile(image.output);
        
        const originalSize = fs.statSync(image.input).size;
        const optimizedSize = fs.statSync(image.output).size;
        const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
        
        console.log(`✅ ${path.basename(image.input)}: ${(originalSize / 1024).toFixed(1)}KB → ${(optimizedSize / 1024).toFixed(1)}KB (${reduction}% reducción)`);
      } else {
        console.log(`⚠️  No se encontró: ${image.input}`);
      }
    } catch (error) {
      console.error(`❌ Error optimizando ${image.input}:`, error.message);
    }
  }
  
  console.log('🎉 Optimización completada!');
}

// Ejecutar si se llama directamente
if (require.main === module) {
  optimizeImages();
}

module.exports = { optimizeImages }; 