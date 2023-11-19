import DisplayCarrito from "../components/DisplayCarrito";
import { useUserContext } from "../context/UserContext";
const CarritoAdmin = () => {
  const { carrito } = useUserContext();
  return (
    <div>
      <DisplayCarrito
        props={{
          cart: carrito,
        }}
      />
    </div>
  );
};
export default CarritoAdmin;
