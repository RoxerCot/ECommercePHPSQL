import DisplayItem from "../components/DisplayItem";
import { useUserContext } from "../context/UserContext";

const Item = () => {
  /**Declaracion de variable compartida por userContext */
  const { producto } = useUserContext();
  /**Renderizacion de desepligue de Item */
  return (
    <div>
      <DisplayItem
        /**Se pasa el prop seleccionado de producto  */
        props={{
          item: producto,
        }}
      />
    </div>
  );
};
export default Item;
