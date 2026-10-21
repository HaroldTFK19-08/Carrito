import { useCarritoStore } from "../store/useCarrito";
import "../css/Carrito.css"
function Carrito() {
  // Obtenemos los datos y las acciones del store de Zustand
  const items = useCarritoStore((state) => state.items);
  const eliminarProducto = useCarritoStore((state) => state.eliminarProducto);
  const vaciarCarrito = useCarritoStore((state) => state.vaciarCarrito);

  // Calculamos el total de los productos del carrito
  const total = items.reduce(
    (suma, item) => suma + item.precio * item.cantidad,
    0, // Valor inicial para evitar errores si el carrito está vacío
  );

  // Si el carrito está vacío, mostramos un mensaje
  if (items.length === 0) {
    return (
      <section className="panel">
        <h2>Carrito</h2>
        <p className="vacio">Tu carrito está vacío</p>
      </section>
    );
  }

  // Si hay productos, mostramos la lista y el total
  return (
    <section className="panel">
      <h2>Carrito</h2>

      {/* Mostramos cada producto */}
      {items.map((item) => (
        <div key={item.id} className="fila">
          <div>
            <p className="fila-nombre">{item.nombre}</p>

            {/* Cantidad y precio unitario */}
            <p className="fila-detalle">
              {item.cantidad} x ${item.precio.toLocaleString("es-CO")}
            </p>
          </div>

          {/* Botón para quitar un producto */}
          <button
            className="btn btn-secundario"
            onClick={() => eliminarProducto(item.id)}
          >
            Quitar
          </button>
        </div>
      ))}

      {/* Total del carrito */}
      <div className="total">
        <span>Total</span>
        <strong>${total.toLocaleString("es-CO")}</strong>
      </div>

      {/* Botón para vaciar el carrito */}
      <button className="btn btn-secundario btn-bloque" onClick={vaciarCarrito}>
        Vaciar carrito
      </button>
    </section>
  );
}

export default Carrito;
