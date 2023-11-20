import DisplayCarrito from "../components/DisplayCarrito";
import DisplayVenta from "../components/DisplayVenta";
import { useUserContext } from "../context/UserContext";
const VentaAdmin = () => {
  const { sale } = useUserContext();
  return (
    <div>
      <DisplayVenta
        props={{
          sale: sale,
        }}
      />
    </div>
  );
};
export default VentaAdmin;
