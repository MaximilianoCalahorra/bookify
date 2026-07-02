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
    for (const libro of libros) {
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
          <button class="btn-buy" data-id="${libro.id}" data-title="${libro.title}" data-price="${libro.price}">Agregar al carrito</button>
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

// Cargar carrito:
const cargarCarrito = () => {
  // Acceder al listado de libros del carrito:
  const listaCarrito = document.getElementById("lista-carrito");
  listaCarrito.innerHTML = "";

  // Obtener estado del carrito:
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Recorrer los libros del carrito y crear una card para cada uno de ellos:
  for (const libro of carrito) {
    const card = document.createElement("article");
    card.classList.add("product-card");

    card.innerHTML = `
    <div class="product-info">
      <h3 class="product-title">${libro.title}</h3>
      <p class="product-price">$${libro.price}</p>
      <button class="btn-sub1" data-id="${libro.id}" data-amount="${libro.amount}" ${libro.amount === 1 ? "disabled" : ""}>-</button>
      <p class="product-amount">${libro.amount}</p>
      <button class="btn-sum1" data-id="${libro.id}" data-amount="${libro.amount}">+</button>
      <p class="product-price">Subtotal: $${libro.price * libro.amount}</p>
      <button class="btn-del" data-id="${libro.id}">Eliminar</button>
    </div>`;

    listaCarrito.appendChild(card);
  }

  // Calcular cantidad de libros en el carrito y total a pagar:
  document.getElementById("cantidad-carrito").textContent =
    `Libros: ${calcularCantidadLibrosCarrito()}`;
  document.getElementById("total-carrito").textContent =
    `Total: $${calcularTotalCarrito()}`;
};

// Agregar libro al carrito:
const agregarLibroCarrito = (event) => {
  // Obtener los datos del libro:
  const libro = {
    id: event.target.getAttribute("data-id"),
    title: event.target.getAttribute("data-title"),
    price: event.target.getAttribute("data-price"),
    amount: 1,
  };

  // Obtener carrito:
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Buscar libro:
  const libroEncontrado = carrito.find((l) => l.id == libro.id);

  // En caso de que ya exista solo modifica la cantidad:
  if (libroEncontrado) {
    actualizarLibroCarrito(libroEncontrado.id, libroEncontrado.amount + 1);
  } else {
    // En caso de que no exista lo agrega al carrito:
    carrito.push(libro);

    // Actualizar carrito:
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Cargar carrito actualizado:
    cargarCarrito();
  }
};

// Eliminar libro del carrito:
const eliminarLibroCarrito = (id) => {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Nuevo carrito con todos los libros menos el que se quiere eliminar:
  const nuevoCarrito = carrito.filter((libro) => libro.id != id);

  // Guardar el nuevo array y actualizar la vista:
  localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  cargarCarrito();
};

// Actualizar cantidad de un libro en el carrito:
const actualizarLibroCarrito = (id, newAmount) => {
  // Obtener carrito:
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Buscar libro:
  const libroEncontrado = carrito.find((libro) => libro.id == id);

  // En caso de que exista modifica la cantidad:
  if (libroEncontrado && newAmount > 0) {
    libroEncontrado.amount = newAmount;
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  // Cargar el carrito actualizado:
  cargarCarrito();
};

// Calcular total carrito:
const calcularTotalCarrito = () => {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let total = 0;
  for (const libro of carrito) {
    total += libro.amount * libro.price;
  }
  return total;
};

// Calcular cantidad de libros en el carrito:
const calcularCantidadLibrosCarrito = () => {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let cantidad = 0;
  for (const libro of carrito) {
    cantidad += libro.amount;
  }
  return cantidad;
};

// Se muestran los productos cuando se carga el DOM:
document.addEventListener("DOMContentLoaded", mostrarLibros);

// Se muestra el carrito cuando se carga el DOM:
document.addEventListener("DOMContentLoaded", cargarCarrito);

// Escuchamos los clics en toda la página
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-buy")) {
    // Botón de agregar libro al carrito:
    agregarLibroCarrito(e);
  } else if (e.target.classList.contains("btn-del")) {
    // Botón de eliminar libro del carrito:
    eliminarLibroCarrito(e.target.getAttribute("data-id"));
  } else if (e.target.classList.contains("btn-sub1")) {
    // Botón de disminuir en uno la cantidad de un libro del carrito:
    const amountActual = Number(e.target.getAttribute("data-amount"));
    actualizarLibroCarrito(e.target.getAttribute("data-id"), amountActual - 1);
  } else if (e.target.classList.contains("btn-sum1")) {
    // Botón de aumentar en uno la cantidad de un libro del carrito:
    const amountActual = Number(e.target.getAttribute("data-amount"));
    actualizarLibroCarrito(e.target.getAttribute("data-id"), amountActual + 1);
  }
});

// Vaciar carrito:
document.getElementById("clear-buy").addEventListener("click", () => {
  localStorage.removeItem("carrito");
  cargarCarrito();
});

// Finalizar compra:
document.getElementById("finish-buy").addEventListener("click", () => {
  if (calcularCantidadLibrosCarrito() > 0) {
    localStorage.removeItem("carrito");

    // Alerta de éxito:
    Swal.fire({
      title: "¡Compra exitosa!",
      text: "¡Muchas gracias por elegir Bookify para tu próxima lectura!",
      icon: "success",
      confirmButtonColor: "#4f46e5",
    });

    cargarCarrito();
  } else {
    // Alerta de error/advertencia:
    Swal.fire({
      title: "Carrito vacío",
      text: "Añadí algún libro para poder efectuar la compra.",
      icon: "warning",
      confirmButtonColor: "#4f46e5",
    });
  }
});
