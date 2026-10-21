
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCarritoStore = create(
  persist(
    (set) => ({
      items: [],

      // Agregar un producto o aumentar su cantidad
      agregarProducto: (producto) =>
        set((state) => {
          const existe = state.items.find(
            (item) => item.id === producto.id
          );

          if (existe) {
            return {
              items: state.items.map((item) =>
                item.id === producto.id
                  ? { ...item, cantidad: item.cantidad + 1 }
                  : item
              ),
            };
          }

          return {
            items: [
              ...state.items,
              { ...producto, cantidad: 1 },
            ],
          };
        }),

      // Disminuir cantidad y eliminar si llega a cero
      disminuirCantidad: (id) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === id
                ? { ...item, cantidad: item.cantidad - 1 }
                : item
            )
            .filter((item) => item.cantidad > 0),
        })),

      // Eliminar un producto por completo
      eliminarProducto: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      // Vaciar todo el carrito
      vaciarCarrito: () => set({ items: [] }),
    }),
    {
      name: "carrito-tienda",
    }
  )
);
