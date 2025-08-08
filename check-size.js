const fs = require('fs');
const path = require('path');

function getDirectorySize(dirPath) {
  let totalSize = 0;
  let fileCount = 0;
  
  function calculateSize(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const itemPath = path.join(currentPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        calculateSize(itemPath);
      } else {
        totalSize += stats.size;
        fileCount++;
        
        // Mostrar archivos grandes (>100KB)
        if (stats.size > 100 * 1024) {
          const relativePath = path.relative(process.cwd(), itemPath);
          console.log(`📁 ${relativePath}: ${(stats.size / 1024 / 1024).toFixed(2)}MB`);
        }
      }
    }
  }
  
  calculateSize(dirPath);
  return { totalSize, fileCount };
}

function main() {
  console.log('🔍 Analizando tamaño del proyecto...\n');
  
  const { totalSize, fileCount } = getDirectorySize('.');
  
  console.log('\n📊 RESUMEN:');
  console.log(`📁 Total de archivos: ${fileCount}`);
  console.log(`💾 Tamaño total: ${(totalSize / 1024 / 1024).toFixed(2)}MB`);
  
  // Análisis por directorio
  const directories = ['public', 'src', 'app'];
  
  console.log('\n📂 Análisis por directorio:');
  for (const dir of directories) {
    if (fs.existsSync(dir)) {
      const { totalSize: dirSize } = getDirectorySize(dir);
      console.log(`📁 ${dir}: ${(dirSize / 1024 / 1024).toFixed(2)}MB`);
    }
  }
  
  // Recomendaciones
  console.log('\n💡 RECOMENDACIONES:');
  if (totalSize > 50 * 1024 * 1024) {
    console.log('⚠️  El proyecto es muy pesado (>50MB). Considera:');
    console.log('   - Comprimir videos más agresivamente');
    console.log('   - Usar CDN para archivos grandes');
    console.log('   - Implementar lazy loading más agresivo');
  } else if (totalSize > 20 * 1024 * 1024) {
    console.log('⚠️  El proyecto es moderadamente pesado (>20MB). Considera:');
    console.log('   - Optimizar imágenes restantes');
    console.log('   - Comprimir videos');
  } else {
    console.log('✅ El proyecto tiene un tamaño razonable');
  }
}

main(); 