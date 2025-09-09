const { createClient } = require('@sanity/client');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

const client = createClient({
  projectId: "n8a6zlqk",
  dataset: 'production',
  token: 'skTICbZctgEK2O7Xcspr7TDosqOV67tFlLW234PJhCrFCzphP6jcQZ1u0ooJj2h4s2gZXpKEhvkza4ADnKaSCr3aKJUWaliYnUV32UQ5vKKM5ZfnBCKA2Tz1zvqwdrqHtG9bCx3VGeaGeT4kPnq2HQ0y4s7bNNGLUegUKk2vX4LMUtrkZ7pr',
  useCdn: false,
  apiVersion: '2023-05-03',
});

function convertToBlockContent(text) {
  if (!text || typeof text !== 'string') return [];
  
  return [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'p',
          text: text
        }
      ]
    }
  ];
}

async function uploadImageFromFile(filePath, altText = '', caption = '') {
  try {
    console.log(`📤 Subiendo imagen desde: ${filePath}`);
    
    if (!fs.existsSync(filePath)) {
      console.error(`❌ El archivo no existe: ${filePath}`);
      return null;
    }
    
    const buffer = fs.readFileSync(filePath);
    
    const filename = path.basename(filePath);
    
    const asset = await client.assets.upload('image', buffer, {
      filename: filename,
    });
    
    console.log(`✅ Imagen subida: ${asset._id}`);
    
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
      alt: altText || filename,
      caption: caption
    };
  } catch (error) {
    console.error(`❌ Error subiendo imagen ${filePath}:`, error.message);
    return null;
  }
}

async function uploadProducts() {
  try {
    const productsPath = path.join(__dirname, 'products.json');
    
    console.log(`📁 Buscando archivo en: ${productsPath}`);
    
    if (!fs.existsSync(productsPath)) {
      console.error('❌ El archivo products.json no existe en la ruta:', productsPath);
      return;
    }
    
    const data = fs.readFileSync(productsPath, 'utf8');
    let products;
    
    try {
      products = JSON.parse(data);
    } catch (parseError) {
      console.error('❌ Error al parsear el archivo JSON:', parseError.message);
      return;
    }
    
    if (!Array.isArray(products)) {
      console.error('❌ El archivo JSON no contiene un array. products debe ser un array.');
      return;
    }
    
    console.log(`🚀 Comenzando a subir ${products.length} productos...`);

    for (const [index, product] of products.entries()) {
      try {
        console.log(`\n📦 Procesando producto ${index + 1}/${products.length}: ${product.name}`);
        
        const bodyContent = typeof product.body === 'string' 
          ? convertToBlockContent(product.body)
          : (product.body || []);

        const imagesArray = [];
        if (product.images && Array.isArray(product.images)) {
          for (const img of product.images) {
            const imagePath = path.join(__dirname,  '..', 'public', img.imageFile);
            const imageObject = await uploadImageFromFile(imagePath, img.alt, img.caption);
            
            if (imageObject) {
              imagesArray.push(imageObject);
            }
            
            await new Promise(resolve => setTimeout(resolve, 300));
          }
        }

        const productDoc = {
          _type: 'product',
          name: product.name,
          body: bodyContent,
          images: imagesArray,
        };

        if (product.category && product.category.trim() !== '') {
          productDoc.category = {
            _type: 'reference',
            _ref: product.category, // ID de la categoría
          };
        }

        console.log('📦 Creando producto en Sanity...');
        const result = await client.create(productDoc);
        console.log(`✅ Producto subido: ${result._id}`);
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
      } catch (error) {
        console.error(`❌ Error subiendo producto ${product.name}:`, error.message);
      }
    }
    
    console.log('\n🎉 Proceso de importación completado.');
  } catch (error) {
    console.error('❌ Error general:', error.message);
  }
}

uploadProducts().catch(console.error);
