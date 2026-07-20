// Datos de presentación (no vienen del Excel): rutas de imagen, slugs de marca,
// orden e iconos de categorías, y precios/imagenes conocidos para tratamientos.

const marcas = [
  { slug: 'sannet', nombre: 'Sannet' },
  { slug: 'credentials', nombre: 'Credentials' },
  { slug: 'emes', nombre: 'EMES Cosmética' },
];

// Relaciona el nombre de marca tal como aparece en el Excel con su slug de URL
const marcaSlugPorNombre = {
  'Sannet': 'sannet',
  'Credentials': 'credentials',
  'EMES Cosmética': 'emes',
};

// Imagen de portada por marca (aún no se subieron fotos de producto para las marcas;
// deja el placeholder decorativo hasta que agregues estas fotos)
const marcaImagen = {
  sannet: null,
  credentials: null,
  emes: null,
};

// Categorías con su icono (coinciden con los valores de "tipo" del Excel de productos)
const categorias = [
  { tipo: 'demaquillante', label: 'Desmaquillantes', icon: '/icons/demaquillantes.png' },
  { tipo: 'limpiadores', label: 'Limpiadores', icon: '/icons/limpiadores.png' },
  { tipo: 'lociones', label: 'Lociones', icon: '/icons/lociones.png' },
  { tipo: 'contorno de ojos', label: 'Contorno de ojos', icon: '/icons/contorno-de-ojos.png' },
  { tipo: 'serums', label: 'Serums', icon: '/icons/serums.png' },
  { tipo: 'cremas', label: 'Cremas', icon: '/icons/cremas.png' },
  { tipo: 'protección solar', label: 'Protección Solar', icon: '/icons/proteccion-solar.png' },
  { tipo: 'tónicos', label: 'Tónicos', icon: '/icons/tonicos.png' },
];

// Imagen (y precio ya definido antes de tener el Excel) por nombre de tratamiento facial
const imagenTratamientoFacial = {
  'Facial Hidratante/Humectante': { img: '/images/faciales/Hidratante.jpg', precio: 589 },
  'Limpieza Profunda': { img: '/images/faciales/Profunda.jpg', precio: 899 },
  'Anti acné': { img: '/images/faciales/anti-acne.jpg', precio: null },
  'Calmante/Desinflamatorio': { img: '/images/faciales/Calmante.jpg', precio: null },
  'Nutritivo (Anti Edad)': { img: '/images/faciales/Nutritivo.jpg', precio: null },
  'Despigmentante': { img: '/images/faciales/Despigmentante.jpg', precio: null },
  'Microneedling (Dermapen)': { img: '/images/faciales/Microneedling.jpg', precio: null },
};

// Imagen por nombre de tratamiento spa
const imagenTratamientoSpa = {
  'Masaje Relajante': { img: '/images/spa/relajante.jpg', precio: 790 },
  'Masaje Sueco': { img: '/images/spa/sueco.jpg', precio: 899 },
  'Masaje Descontracturante': { img: '/images/spa/Ventosas.jpg', precio: null },
  'Masaje Geotermal': { img: '/images/spa/Geotermal.jpg', precio: null },
  'Masaje Reductivo Moldeadro': { img: '/images/spa/Maderoterapia.jpg', precio: null },
  'Exfoliación e Hidratación Corporal': { img: '/images/spa/Hidrata-exfoli-corporal.jpg', precio: null },
};

// Imagen por nombre de tipo de piel
const imagenTipoPiel = {
  'Piel Grasa': '/images/tipos-de-piel/Grasa.jpg',
  'Piel Mixta': '/images/tipos-de-piel/Mixta.jpg',
  'Piel Normal': '/images/tipos-de-piel/Normal.jpg',
  'Piel Seca': '/images/tipos-de-piel/Seca.jpg',
};

module.exports = {
  marcas,
  marcaSlugPorNombre,
  marcaImagen,
  categorias,
  imagenTratamientoFacial,
  imagenTratamientoSpa,
  imagenTipoPiel,
};
