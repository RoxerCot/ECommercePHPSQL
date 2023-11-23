import DisplayItem from "../components/DisplayItem";
import DisplayItemAdmin from "../components/DisplayItemAdmin";
import { useUserContext } from "../context/UserContext";

const ItemAdmin = () => {
  const { producto } = useUserContext();
  return (
    <DisplayItemAdmin
      props={{
        item: producto,
      }}
    />
  );
};
export default ItemAdmin;
