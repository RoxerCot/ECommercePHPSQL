/**Importacion de librerias para su uso en el componente */
import DisplayVenta from "../components/DisplayVenta";
import { useUserContext } from "../context/UserContext";
const VentaAdmin = () => {
  /**Declaracion de variable compartida por userContext */
  const { sale } = useUserContext();
  /**Renderizacion de venta seleccionada */
  return (
    <DisplayVenta
      props={{
        sale: sale,
      }}
    />
  );
};
export default VentaAdmin;
