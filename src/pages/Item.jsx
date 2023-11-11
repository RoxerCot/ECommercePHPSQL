import DisplayItem from "../components/DisplayItem";
import { useUserContext } from "../context/UserContext";

const Item = () => {
  const { producto } = useUserContext();
  return (
    <div>
      <DisplayItem
        props={{
          item: producto,
        }}
      />
    </div>
  );
};
export default Item;
