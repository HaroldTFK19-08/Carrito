import { useCarritoStore } from "../store/useCarrito";
import "../css/Carrito.css";

function Carrito() {
  const items = useCarritoStore((state) => state.items);
  const eliminarProducto = useCarritoStore((state) => state.eliminarProducto);
  const vaciarCarrito = useCarritoStore((state) => state.vaciarCarrito);
  const agregarProducto = useCarritoStore((state) => state.agregarProducto);
  const disminuirCantidad = useCarritoStore((state) => state.disminuirCantidad);

  // Calcular el total general
  const total = items.reduce(
    (suma, item) => suma + item.precio * item.cantidad,
    0,
  );

  // Mostrar mensaje si el carrito está vacío
  if (items.length === 0) {
    return (
      <section className="panel">
        <h2>Carrito</h2>
        <p className="vacio">Tu carrito está vacío</p>
      </section>
    );
  }

  return (
    <section className="panel">
      <h2>Carrito</h2>

      {items.map((item) => (
        <div key={item.id} className="fila">
          <div className="producto-info">
            <p className="fila-nombre">{item.nombre}</p>

            <p className="fila-detalle">
              Precio unitario: ${item.precio.toLocaleString("es-CO")}
            </p>

            <p className="fila-detalle">
              Subtotal: ${(item.precio * item.cantidad).toLocaleString("es-CO")}
            </p>

            <div className="controles-cantidad">
              <button
                type="button"
                className="btn btn-secundario"
                onClick={() => disminuirCantidad(item.id)}
                aria-label={`Disminuir cantidad de ${item.nombre}`}
              >
                −
              </button>

              <span>{item.cantidad}</span>

              <button
                type="button"
                className="btn btn-primario"
                onClick={() => agregarProducto(item)}
                aria-label={`Aumentar cantidad de ${item.nombre}`}
              >
                +
              </button>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-secundario btn-quitar"
            onClick={() => eliminarProducto(item.id)}
          >
            Quitar
          </button>
        </div>
      ))}

      <div className="total">
        <span>Total del carrito</span>
        <strong>${total.toLocaleString("es-CO")}</strong>
      </div>

      <button
        type="button"
        className="btn btn-secundario btn-bloque"
        onClick={vaciarCarrito}
      >
        Vaciar carrito
      </button>
    </section>
  );
}

export default Carrito;
