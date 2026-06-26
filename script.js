// Mostrar libros:
async function mostrarLibros() {
  try {
    // GET a la API:
    const response = await fetch(
      "https://my-json-server.typicode.com/MaximilianoCalahorra/bookify/libros",
    );

    // Información de los libros en JSON:
    const libros = await response.json();

    // Itero los libros y armo una card para cada uno:
    htmlLibros = "";
    for (libro of libros) {
      htmlLibros += `
      <article class="product-card" data-genre="${libro.slug}">
        <div class="product-img-container">
          <img
            src="${libro.image}"
            alt="Portada de ${libro.title}"
            class="product-img"
          />
        </div>
        <div class="product-info">
          <span class="product-genre">${libro.genre}</span>
          <h3 class="product-title">${libro.title}</h3>
          <p class="product-author">${libro.author}</p>
          <p class="product-price">$${libro.price}</p>
          <button class="btn-buy">Agregar al carrito</button>
        </div>
      </article>
      `;

      // Accedo al contenedor de los libros y pongo como contenido HTML lo previamente armado:
      contenedorLibros = document.querySelector(".products-container");
      contenedorLibros.innerHTML = htmlLibros;
    }
  } catch (error) {
    console.error("Error al obtener libros:", error);
  }
}

// Se muestran los productos cuando se carga el DOM:
document.addEventListener("DOMContentLoaded", mostrarLibros);
