const fs = require('fs');
const path = require('path');

// Verificar la existencia y contenido del archivo
const productsPath = path.join(__dirname, 'products.json');

console.log('🔍 Diagnosticando el problema...');
console.log('📁 Ruta del archivo:', productsPath);

// Verificar si el archivo existe
if (!fs.existsSync(productsPath)) {
  console.log('❌ El archivo products.json NO existe en esta ubicación');
  console.log('📂 Contenido de la carpeta:');
  
  const files = fs.readdirSync(__dirname);
  files.forEach(file => {
    console.log('   -', file);
  });
  
  process.exit(1);
}

// Leer el contenido del archivo
const data = fs.readFileSync(productsPath, 'utf8');
console.log('✅ Archivo encontrado');
console.log('📄 Contenido del archivo:');
console.log(data);

// Intentar parsear el JSON
try {
  const products = JSON.parse(data);
  console.log('✅ JSON parseado correctamente');
  console.log('📋 Tipo de datos:', Array.isArray(products) ? 'Array' : typeof products);
  console.log('🔢 Número de elementos:', Array.isArray(products) ? products.length : 'N/A');
} catch (error) {
  console.log('❌ Error al parsear JSON:', error.message);
}
