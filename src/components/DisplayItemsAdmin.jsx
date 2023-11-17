import { Button, Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
const URL = "http://localhost/BackEnd2/Api.php";

const DisplayItemsAdmin = ({ props }) => {
  const { setProducto, userId } = useUserContext();
  const { page, items, number } = props;
  const [limit, setLimit] = useState(false);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    var x = number * (page - 1);
    setIndex(x);
    setLimit(parseInt(x) + parseInt(number));
  }, [number, page]);
  function handleItemClick(itm) {
    setProducto(itm);
    console.log(" Item: ", itm);
    // navigate("/productos/item");
  }
  const handleAddItem = async (itemId) => {
    try {
      var data = new FormData();
      data.append("METHOD", "ADDITEMCART");
      data.append("userId", userId);
      data.append("itemId", itemId);
      AddItem(URL, data);
    } catch (error) {
      console.error("Error Adding item:", error);
    }
  };

  const AddItem = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => navigate("/"));
  };

  return (
    <div className="">
      {items.slice(index, limit).map((Item) => (
        <div className="" key={Item[0]}>
          <Card key={Item[0]} imgAlt="" className="">
            <img src={Item[3]} className="h-32 w-40 " />
            <Link
              to="/admin/item"
              className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white w-40"
              onClick={() => handleItemClick(Item)}
            >
              <p>{Item[1]}</p>
            </Link>
          </Card>
        </div>
      ))}
    </div>
  );
};
export default DisplayItemsAdmin;
