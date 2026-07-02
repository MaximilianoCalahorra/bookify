# Bookify 📚✨

¡Bienvenido a **Bookify**! Este proyecto es una tienda en línea (e-commerce) moderna y completamente responsiva especializada en la venta de libros. El sitio fue diseñado desde cero buscando ofrecer una experiencia de usuario limpia, atractiva, interactiva y con un fuerte enfoque estético editorial.

🚀 **Podés ver el sitio en vivo acá:** [Bookify](https://maximilianocalahorra.github.io/bookify/)

---

## 🎨 Características del Proyecto

- **Catálogo Asincrónico mediante API:** Los productos ya no se cargan de forma estática en el HTML; en su lugar, se consumen dinámicamente desde una API REST local estructurada a partir de un archivo de base de datos `db.json`.
- **Carrito de Compras Interactivo:** Sistema interactivo completo que permite gestionar los libros elegidos en tiempo real.
- **Persistencia de Datos (LocalStorage):** El carrito funciona como una "base de datos" local, logrando que los productos seleccionados por el usuario no se pierdan al recargar la página o cerrar el navegador.
- **Validaciones de Compra Inteligentes:** El flujo de finalización de compra valida la existencia de ítems, impidiendo transacciones vacías y respondiendo con alertas dinámicas.
- **Diseño Editorial Moderno:** Combinación tipográfica premium que aporta un aire de librería clásica combinada con interfaces de e-commerce actuales.
- **Grilla de Productos Inteligente:** Catálogo de libros estructurado de forma automática que se reorganiza según el tamaño de la pantalla del usuario.
- **Alineación Perfecta:** Sistema de tarjetas donde los precios y botones de acción siempre se mantienen alineados abajo de todo, sin importar la longitud del título del libro.
- **Sección de Reseñas Dinámica:** Espacio dedicado a las opiniones de los clientes con calificaciones de estrellas nativas y detalles visuales pulidos.
- **Formulario de Contacto Adaptable:** Formulario estilizado con respuestas visuales activas (`:focus`) para una mejor interacción.
- **100% Responsivo:** Adaptado minuciosamente para celulares, tablets y monitores de escritorio.

---

## 🛒 Funcionalidades del Carrito

El sistema de compras cuenta con las siguientes interacciones lógicas nativas:

1. **Agregar al carrito:** Añade un libro al listado. Si el ítem ya existe, el sistema detecta el duplicado e incrementa su cantidad automáticamente sin repetir la tarjeta.
2. **Control de cantidades:** Permite aumentar o disminuir las unidades de un libro directamente desde el carrito. El botón de decremento (`-`) se deshabilita automáticamente si la cantidad es igual a 1 para evitar valores negativos.
3. **Cálculo automatizado:** Modifica y muestra en tiempo real los subtotales por libro, la cantidad total de artículos y el precio final acumulado de la compra.
4. **Eliminar ítem:** Permite remover por completo un libro específico del listado.
5. **Vaciar carrito:** Limpia por completo la selección actual del almacenamiento local y reinicia los contadores.
6. **Finalizar compra:** Valida el contenido y simula el cierre de la transacción mediante ventanas emergentes personalizadas.

---

## 🛠️ Tecnologías Utilizadas

Para el desarrollo de este sitio se priorizó el uso de tecnologías web nativas combinadas con herramientas modernas para la gestión asincrónica y la experiencia de usuario:

- **HTML5:** Estructuración semántica del contenido (`<header>`, `<section>`, `<main>`, `<footer>`) para garantizar la accesibilidad y un mejor SEO.
- **CSS3 Avanzado:**
  - **Variables CSS (`:root`):** Centralización de la paleta de colores y transiciones para facilitar el mantenimiento del código.
  - **Flexbox:** Implementado para la alineación del header, la sección principal (Hero), el footer y la disposición horizontal adaptativa de las filas del carrito.
  - **CSS Grid:** Utilizado en la galería de productos y reseñas mediante la propiedad `repeat(auto-fill, minmax(...))` para lograr un comportamiento responsivo fluido.
  - **Pseudo-elementos (`::after`, `::before`):** Usados para añadir detalles decorativos visuales de forma nativa.
- **JavaScript Moderno (ES6+):**
  - **Asincronismo (`Fetch API` / `Async-Await`):** Implementado para realizar la petición HTTP de tipo GET a la API REST y renderizar el catálogo de forma dinámica.
  - **Manipulación del DOM:** Creación e inyección dinámica de elementos HTML para representar los productos y el carrito de compras.
  - **Delegación de Eventos:** Optimización del rendimiento de la página mediante un único escuchador de clics global para capturar las acciones de los botones dinámicos (`Agregar`, `Eliminar`, `+`, `-`).
  - **LocalStorage:** Gestión del estado de la compra para garantizar la persistencia de los datos del usuario.
- **Base de Datos Mock (`db.json`):** Los productos del catálogo están estructurados en un archivo JSON centralizado en el proyecto. Cada objeto representa un libro con sus propiedades clave (`id`, `slug`, `genre`, `title`, `author`, `price`, `image`), sirviendo como el origen de datos para alimentar la API REST.
- **SweetAlert2:** Librería externa integrada para sustituir los cuadros de diálogo nativos del navegador por alertas flotantes animadas, modernas y estilizadas en sintonía con la paleta de colores del sitio.
- **Google Fonts:** Integración de las tipografías _Playfair Display_ (para títulos elegantes) y _Roboto_ (para textos de alta legibilidad).

---

## 📂 Estructura del Repositorio

```bash
├── index.html           # Estructura semántica del sitio y contenedores dinámicos
├── styles.css           # Hoja de estilos general, diseño del carrito y media queries
├── script.js            # Lógica del carrito, persistencia y consumo asincrónico de la API
├── db.json              # Base de datos local en formato JSON para el catálogo de la API
└── assets/              # Carpeta contenedora de recursos visuales
    ├── hero-books.jpg   # Imagen de la biblioteca principal
    ├── logo-icono.ico   # Ícono del logo de la marca Bookify (Favicon)
    ├── logo.jpg         # Logo de la marca Bookify
    └── libros/          # Imágenes de las portadas de los libros
```
