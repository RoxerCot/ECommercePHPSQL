import { useEffect, useRef } from "react";
import { useUserContext } from "../context/UserContext";
import { ListGroup } from "flowbite-react";
import { useNavigate } from "react-router-dom";
const URL = "http://localhost/BackEnd2/Api.php";

const Carrito = () => {
  const navigate = useNavigate();
  const { userId, productoCarrito, setProductoCarrito } = useUserContext();
  /** Aqui transformo un objetto a un array */
  var dataDisplay = [];
  function ObjectToArray(object, array) {
    array = [];
    console.log(object);
    for (var i in object) {
      array.push(Object.values(object[i]));
    }
    return array;
  }
  useEffect(() => {
    const fetchData = async () => {
      var data = new FormData();
      data.append("METHOD", "GETCART");
      data.append("userId", userId);
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      });
      const resp_json = await resp.json();
      console.log(resp_json);
      dataDisplay = ObjectToArray(resp_json, dataDisplay);
      console.log(dataDisplay);
      setProductoCarrito(ObjectToArray(resp_json, productoCarrito));
    };
    fetchData();
    return () => {};
  }, []);

  const handleDeleteItem = async (itemId) => {
    try {
      var data = new FormData();
      data.append("METHOD", "DELETEITEMCART");
      data.append("userId", userId);
      data.append("itemId", itemId);
      DeleteItem(URL, data);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const DeleteItem = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => navigate("/productos/carrito"));
  };

  return (
    <div className="flex flex-col justify-center items-center mt-8 ">
      {productoCarrito ? (
        productoCarrito.map((Item) => (
          <ListGroup
            key={Item[0]}
            id={Item[0]}
            className="w-3/4 flex flex-row item"
          >
            <ListGroup.Item className="basis-1/2">{Item[1]}</ListGroup.Item>
            <ListGroup.Item className="basis-1/4">{Item[2]}</ListGroup.Item>
            <ListGroup.Item className="basis-1/4">{Item[3]}</ListGroup.Item>
            <ListGroup.Item onClick={() => handleDeleteItem(Item[0])}>
              Borrar
            </ListGroup.Item>
          </ListGroup>
        ))
      ) : (
        <p>No hay items...</p>
      )}
    </div>
  );
};
export default Carrito;
