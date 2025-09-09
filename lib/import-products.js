const { createClient } = require('@sanity/client');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// Cargar variables de entorno
dotenv.config();

// Configurar cliente de Sanity
const client = createClient({
  projectId: "n8a6zlqk",
  dataset: 'production',
  token: 'skTICbZctgEK2O7Xcspr7TDosqOV67tFlLW234PJhCrFCzphP6jcQZ1u0ooJj2h4s2gZXpKEhvkza4ADnKaSCr3aKJUWaliYnUV32UQ5vKKM5ZfnBCKA2Tz1zvqwdrqHtG9bCx3VGeaGeT4kPnq2HQ0y4s7bNNGLUegUKk2vX4LMUtrkZ7pr',
  useCdn: false,
  apiVersion: '2023-05-03',
});

// Función para cargar productos desde JSON
function loadProducts() {
  try {
    const productsPath = path.join(__dirname, 'products.json');
    
    if (!fs.existsSync(productsPath)) {
      throw new Error(`El archivo products.json no existe en: ${productsPath}`);
    }
    
    const data = fs.readFileSync(productsPath, 'utf8');
    
    if (!data.trim()) {
      throw new Error('El archivo products.json está vacío');
    }
    
    const products = JSON.parse(data);
    
    if (!Array.isArray(products)) {
      throw new Error('El archivo JSON debe contener un array de productos');
    }
    
    return products;
  } catch (error) {
    console.error('❌ Error cargando productos:', error.message);
    process.exit(1);
  }
}

// Resto del script (las otras funciones permanecen igual)
// [Aquí van las funciones convertToBlockContent, getCategoryId, uploadImageFromFile, etc.]

// Función principal para subir productos
async function uploadProducts() {
  try {
    // Cargar productos
    const products = loadProducts();
    console.log(`🚀 Comenzando a subir ${products.length} productos...`);

    // [Aquí va el resto de tu lógica de subida]
    
  } catch (error) {
    console.error('❌ Error general:', error.message);
  }
}

// Ejecutar la importación
uploadProducts().catch(console.error);
