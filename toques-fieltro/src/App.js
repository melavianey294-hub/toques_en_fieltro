import React, { useState } from "react";
import "./App.css";

import Coneja from "./images/Coneja mochila.jpeg";
import Conejatejidaconlanadechenill from "./images/Coneja tejida con lana chenill.jpeg";
import Hellokittyysnoopy from "./images/Hello kitty y Snoopy.jpeg";
import Liriosdecampo from "./images/Lirios de campo.jpeg";
import Llaveritos from "./images/Llaveritos.jpeg";
import Macetas from "./images/Macetas.jpeg";
import Pepepollo from "./images/Pepe pollo.jpeg";
import Pikachu from "./images/Pikachu.jpeg";
import Rosas from "./images/Rosas.jpeg";
import Snoopyypollito from "./images/Snoopy y Pollito.jpeg";
import Brujita from "./images/Brujita.jpeg";
import BrujitaAlison from "./images/Brujita Alison.jpeg";
import Girasol from "./images/Girasol.jpeg";

function App() {
  const productos = [
    { id: 1, nombre: "Coneja mochila", precio: 35, imagen: Coneja },
    { id: 2, nombre: "Coneja tejida con lana chenill", precio: 25, imagen: Conejatejidaconlanadechenill },
    { id: 3, nombre: "Hello Kitty y Snoopy", precio: 15, imagen: Hellokittyysnoopy },
    { id: 4, nombre: "Lirios de campo", precio: 4, imagen: Liriosdecampo },
    { id: 5, nombre: "Brujita", precio: 30, imagen: Brujita },
    { id: 6, nombre: "Brujita Alison", precio: 35, imagen: BrujitaAlison },
    { id: 7, nombre: "Pepe Pollo", precio: 5, imagen: Pepepollo },
    { id: 8, nombre: "Pikachu", precio: 5, imagen: Pikachu },
    { id: 9, nombre: "Rosas", precio: 2, imagen: Rosas },
    { id: 10, nombre: "Snoopy y Pollito", precio: 3, imagen: Snoopyypollito },
    { id: 11, nombre: "Macetas", precio: 5, imagen: Macetas },
    { id: 12, nombre: "Girasol", precio: 5, imagen: Girasol },
    { id: 13, nombre: "Llaveritos", precio: 2, imagen: Llaveritos },
  ];

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarProducto = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
  };

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="App">
      <header className="header">
        <h1>🌸 Toques en Fieltro y Algo Mas</h1>
        <p>Diseños hechos a mano para toda ocasión</p>
      </header>

      <section className="banner">
        <h2>Productos Destacados</h2>
        <p>Encuentra muñecos, flores, llaveros hechos con fieltro y tejidos.</p>
      </section>

      <section>
        <h2 className="titulo">Nuestros Productos</h2>

        <div className="productos">
          {productos.map((producto) => (
            <div className="card" key={producto.id}>
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p className="precio">${producto.precio}</p>

              <button onClick={() => agregarAlCarrito(producto)}>
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="carrito">
        <h2>🛒 Carrito de Compras</h2>

        {carrito.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <>
            {carrito.map((item, index) => (
              <div className="item-carrito" key={index}>
                <span>
                  {item.nombre} - ${item.precio}
                </span>

                <button onClick={() => eliminarProducto(index)}>
                  Eliminar
                </button>
              </div>
            ))}

            <h3>Total: ${total}</h3>

            <a
              href={`https://wa.me/593000000000?text=Hola,%20quiero%20comprar:%20${carrito
                .map((item) => `${item.nombre} ($${item.precio})`)
                .join(", ")}.%20Total:%20$${total}`}
              target="_blank"
              rel="noreferrer"
              className="whatsapp"
            >
              Finalizar pedido por WhatsApp
            </a>
          </>
        )}
      </section>

      <footer>
        <p>© 2026 Toques en Fieltro Artesanales</p>
      </footer>
    </div>
  );
}

export default App;