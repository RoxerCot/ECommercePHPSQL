import DisplayCarrito from "../components/DisplayCarrito";
import { useUserContext } from "../context/UserContext";
const CarritoAdmin = () => {
  const { carrito } = useUserContext();
  return (
    <DisplayCarrito
      props={{
        cart: carrito,
      }}
    />
  );
};
export default CarritoAdmin;
