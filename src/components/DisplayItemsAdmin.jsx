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
  }

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {items.slice(index, limit).map((Item) => (
        <Card key={Item[0]} imgAlt="" className="m-2">
          <img src={Item[3]} className="h-32 w-40 " />
          <Link
            to="/admin/item"
            className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white w-40"
            onClick={() => handleItemClick(Item)}
          >
            <p>{Item[1]}</p>
          </Link>
        </Card>
      ))}
    </div>
  );
};
export default DisplayItemsAdmin;
