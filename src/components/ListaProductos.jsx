import { useEffect, useState } from "react";
import { useCarritoStore } from "../store/useCarrito";
import { obtenerProductos } from "../services/productos";

// Definimos el componente ListaProductos
function ListaProductos() {
  const agregarProducto = useCarritoStore((state) => state.agregarProducto);

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  // Consultamos los productos al cargar el componente
  useEffect(() => {
    obtenerProductos()
      .then((datos) => {
        setProductos(datos);
      })
      .catch(() => {
        setError("No se pudieron cargar los productos.");
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return (
      <section className="panel">
        <h2>Productos</h2>
        <p>Cargando productos...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className="panel">
      <h2>Productos</h2>

      {productos.map((producto) => (
        <div key={producto.id} className="fila">
          <div>
            <p className="fila-nombre">{producto.nombre}</p>

            <p className="fila-detalle">
              ${producto.precio.toLocaleString("es-CO")}
            </p>
          </div>

          <button
            className="btn btn-primario"
            onClick={() => agregarProducto(producto)}
          >
            Agregar
          </button>
        </div>
      ))}
    </section>
  );
}

export default ListaProductos;
