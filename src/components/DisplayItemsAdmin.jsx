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
    <div className="flex flex-row flex-wrap mt-8 mr-32 ml-32 justify-center">
      {items.slice(index, limit).map((Item) => (
        <div className="ml-5 mr-5 mb-5" key={Item[0]}>
          <Card
            key={Item[0]}
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            className="basis-2/6 w-50 "
          >
            <img src={Item[3]} className="h-32 w-40 " />
            <Link
              to="/productos/item"
              className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white w-40"
              onClick={() => handleItemClick(Item)}
            >
              <p>{Item[1]}</p>
            </Link>
            <Button onClick={() => handleAddItem(Item[0])}>Eliminar</Button>
            {/* <a
              className="w-40 rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              href="#"
            >
              <p>Agragar</p>
            </a> */}
            <div className="flex items-center justify-between w-40">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {Intl.NumberFormat().format(Item[4])}
              </span>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};
export default DisplayItemsAdmin;
