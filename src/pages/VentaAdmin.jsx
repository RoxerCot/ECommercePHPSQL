import DisplayCarrito from "../components/DisplayCarrito";
import DisplayVenta from "../components/DisplayVenta";
import { useUserContext } from "../context/UserContext";
const VentaAdmin = () => {
  const { sale } = useUserContext();
  return (
    <DisplayVenta
      props={{
        sale: sale,
      }}
    />
  );
};
export default VentaAdmin;
