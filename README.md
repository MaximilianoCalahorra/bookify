# Bookify 📚✨

¡Bienvenido a **Bookify**! Este proyecto es una landing page moderna y completamente responsiva para una tienda en línea (e-commerce) especializada en la venta de libros. El sitio fue diseñado desde cero buscando ofrecer una experiencia de usuario limpia, atractiva y con un fuerte enfoque estético editorial.

🚀 **Podés ver el sitio en vivo acá:** [Bookify](https://maximilianocalahorra.github.io/bookify/)

---

## 🎨 Características del Proyecto

- **Diseño Editorial Moderno:** Combinación tipográfica premium que aporta un aire de librería clásica combinada con interfaces tecnológicas actuales.
- **Grilla de Productos Inteligente:** Catálogo de libros estructurado de forma automática que se reorganiza según el tamaño de la pantalla del usuario.
- **Alineación Perfecta:** Sistema de tarjetas donde los precios y botones de acción siempre se mantienen alineados abajo de todo, sin importar la longitud del título del libro.
- **Sección de Reseñas Dinámica:** Espacio dedicado a las opiniones de los clientes con calificaciones de estrellas nativas y detalles visuales pulidos.
- **Formulario de Contacto Adaptable:** Formulario estilizado con respuestas visuales activas (`:focus`) para una mejor interacción.
- **100% Responsivo:** Adaptado minuciosamente para celulares, tablets y monitores de escritorio.

---

## 🛠️ Tecnologías Utilizadas

Para el desarrollo de este sitio se priorizó el uso de tecnologías web nativas, aplicando buenas prácticas de maquetación y diseño:

- **HTML5:** Estructuración semántica del contenido (`<header>`, `<section>`, `<main>`, `<footer>`) para garantizar la accesibilidad y un mejor SEO.
- **CSS3 Avanzado:**
  - **Variables CSS (`:root`):** Centralización de la paleta de colores y transiciones para facilitar el mantenimiento del código.
  - **Flexbox:** Implementado para la alineación del header, la sección principal (Hero), el footer y los componentes internos de las tarjetas.
  - **CSS Grid:** Utilizado en la galería de productos y reseñas mediante la propiedad `repeat(auto-fill, minmax(...))` para lograr un comportamiento responsivo fluido sin saturar de _media queries_.
  - **Pseudo-elementos (`::after`, `::before`):** Usados para añadir detalles decorativos visuales de forma nativa.
- **Google Fonts:** Integración de las tipografías _Playfair Display_ (para títulos elegantes) y _Roboto_ (para textos de alta legibilidad).

---

## 📂 Estructura del Repositorio

```text
├── index.html                # Estructura principal del sitio web
├── styles.css                # Hoja de estilos general y diseño responsivo
└── assets/                   # Carpeta contenedora de recursos visuales
    ├── hero-books.jpg        # Imagen de biblioteca
    ├── logo-icono.ico        # Ícono del logo de la marca Bookify
    ├── logo.jpg              # Logo de la marca Bookify
    └── libros/               # Imágenes de las portadas de los libros
```
