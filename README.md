# Casa Numa — Sitio web (HTML + EJS + Tailwind CSS)

## Páginas y rutas
- `/` → Inicio
- `/servicios/faciales` → Faciales (7 tratamientos, cargados desde `data/catalogo.js`)
- `/servicios/spa` → Spa (6 tratamientos)
- `/servicios/productos` → Productos (enlaza a cada marca)
- `/servicios/por-gama/:marca` → Catálogo de una marca (`sannet`, `credentials`, `emes`), con
  categorías y productos generados dinámicamente desde el Excel.
- `/servicios/por-gama` → Landing con las 3 marcas (por si alguien entra sin pasar por Productos).

## Datos (ya no hay tarjetas duplicadas a mano)
- `data/catalogo.js`: generado a partir de tu Catálogo.xlsx (tratamientos, tipos de piel, marcas,
  91 productos). Si actualizas el Excel, vuelve a generarlo o edítalo aquí directamente.
- `data/meta.js`: rutas de imagen, slugs de marca, orden/íconos de categorías y precios que no
  vienen en el Excel (los 2 tratamientos con precio ya definido).

## Pendientes de imágenes
- Hero de Productos y Por Gama (sin foto propia aún → bloque de relleno).
- "Masaje Descontracturante" y "Masaje Reductivo Moldeador" en Spa.
- Fotos individuales de producto de Sannet / Credentials / EMES (por ahora bloque de relleno).

## Tipografías
- **Fraunces** (Google Fonts): logo, hero, títulos con línea verde, "Casa Numa" del footer.
- **Antic Didone** (Google Fonts): todo el resto del texto.
- **Nectarine** (local, en `public/fonts/`): únicamente el botón "Reserva".

## Instalación y uso
```bash
npm install
npm run build:css
npm start        # http://localhost:3000
```
Para desarrollo con recarga de CSS: `npm run dev`.

## Paleta
- **Beige (fondo):** `rgb(241, 237, 224)` → `bg-beige`
- **Verde:** `rgb(178, 177, 124)` → `bg-verde`
- **Café:** `rgb(185, 165, 137)` → `bg-cafe`

## Responsive
Todo el sitio está construido *mobile-first*; los breakpoints `sm:` de Tailwind amplían el diseño para tablet/escritorio.
