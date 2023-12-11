import DisplayCarrito from "../components/DisplayCarrito";
import { useUserContext } from "../context/UserContext";
const CarritoAdmin = () => {
  const { carrito } = useUserContext();
  return (
    /**despliegue de carrito de usuario seleccionado */
    <DisplayCarrito
      props={{
        cart: carrito,
      }}
    />
  );
};
export default CarritoAdmin;
