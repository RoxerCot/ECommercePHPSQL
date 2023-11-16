import DisplayItem from "../components/DisplayItem";
import DisplayItemAdmin from "../components/DisplayItemAdmin";
import { useUserContext } from "../context/UserContext";

const ItemAdmin = () => {
  const { producto } = useUserContext();
  return (
    <div>
      <DisplayItemAdmin
        props={{
          item: producto,
        }}
      />
    </div>
  );
};
export default ItemAdmin;
