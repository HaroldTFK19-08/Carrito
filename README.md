Preguntas de reflexión inicial – Zustand
1. ¿Por qué Encabezado se actualiza cuando agregas un producto, si no recibe ninguna prop?
Porque Zustand permite compartir el estado global entre componentes. Aunque Encabezado no recibe props, puede acceder directamente al store mediante el hook de Zustand. Cuando se agrega un producto y cambia el estado, el componente se actualiza automáticamente si está suscrito a los datos que cambiaron.
2. ¿Qué tendrías que hacer para lograr lo mismo usando solo useState en App?
Tendría que guardar los productos en un estado de App y pasar los datos y las funciones necesarias como props a los componentes Encabezado, ListaProductos y Carrito. Así, los componentes podrían consultar y modificar el mismo estado a través de las props.
3. ¿Para qué sirve el selector (state) => state.items al usar el hook?
Sirve para seleccionar únicamente la propiedad items del estado global. De esta manera, el componente accede a los productos almacenados y se actualiza cuando cambia esa propiedad, sin necesidad de obtener todo el estado del store.
4. ¿Por qué en el store se crean arreglos nuevos con map y filter en lugar de modificar items directamente?
Porque React y Zustand trabajan mejor cuando el estado se actualiza de forma inmutable, es decir, creando un nuevo arreglo en lugar de modificar el original. map permite actualizar elementos y filter permite eliminar elementos. Esto ayuda a detectar los cambios y actualizar los componentes correctamente.
5. ¿Zustand es parte de React? Explica la diferencia entre una librería propia de React y una del ecosistema.
No, Zustand no forma parte de React. Es una librería externa del ecosistema de React que se puede instalar para administrar el estado global.

React incluye herramientas propias como useState y useEffect, mientras que Zustand ofrece funcionalidades adicionales para compartir y gestionar el estado entre diferentes componentes sin tener que pasar tantas props.