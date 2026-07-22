const express = require("express");
const path = require("path");
const catalogo = require("./data/catalogo");
const meta = require("./data/meta");

const app = express();
const PORT = process.env.PORT || 3000;

const WHATSAPP_NUMERO = "524423343527"; // código de país + número, sin +, espacios ni guiones
const WHATSAPP_MENSAJE = "Hola, me gustaría agendar una cita en Casa Numa";

app.locals.whatsappUrl = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAJE)}`;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

function tratamientosPorTipo(tipo) {
  return catalogo.tratamientos
    .filter((t) => t.tipo === tipo)
    .map((t) => {
      const extra =
        tipo === "Tratamientos Faciales"
          ? meta.imagenTratamientoFacial[t.nombre]
          : meta.imagenTratamientoSpa[t.nombre];
      return {
        ...t,
        img: extra ? extra.img : null,
        precio: extra && extra.precio ? extra.precio : t.precio,
      };
    });
}

app.get("/", (req, res) => res.render("inicio"));

app.get("/servicios/faciales", (req, res) => {
  res.render("servicios-faciales", {
    tratamientos: tratamientosPorTipo("Tratamientos Faciales"),
    tiposPiel: catalogo.tiposPiel,
    imagenTipoPiel: meta.imagenTipoPiel,
  });
});

app.get("/servicios/spa", (req, res) => {
  res.render("servicios-spa", {
    tratamientos: tratamientosPorTipo("Tratamientos Spa"),
  });
});

app.get("/servicios/productos", (req, res) => {
  res.render("servicios-productos", {
    marcas: meta.marcas,
    marcaImagen: meta.marcaImagen,
    marcasInfo: catalogo.marcasInfo,
  });
});

app.get("/servicios/por-gama", (req, res) => {
  res.render("servicios-por-gama-landing", {
    marcas: meta.marcas,
    marcaImagen: meta.marcaImagen,
    marcasInfo: catalogo.marcasInfo,
  });
});

app.get("/servicios/por-gama/:marca", (req, res, next) => {
  const marca = meta.marcas.find((m) => m.slug === req.params.marca);
  if (!marca) return next();

  const descripcion =
    catalogo.marcasInfo[marca.nombre] ||
    catalogo.marcasInfo[marca.nombre.toUpperCase()] ||
    "";

  const productosMarca = catalogo.productos.filter(
    (p) => p.marca === marca.nombre
  );

  const categoriasConProductos = meta.categorias
    .map((cat) => ({
      ...cat,
      productos: productosMarca.filter((p) => p.tipo === cat.tipo),
    }))
    .filter((cat) => cat.productos.length > 0);

  res.render("servicios-por-gama", {
    marca,
    descripcion,
    categorias: categoriasConProductos,
    imagen: meta.marcaImagen[marca.slug],
  });
});

app.use((req, res) => res.status(404).send("Página no encontrada"));

app.listen(PORT, () => {
  console.log(`Casa Numa corriendo en http://localhost:${PORT}`);
});
