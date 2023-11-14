import { useEffect, useRef } from "react";
import { useUserContext } from "../context/UserContext";
import { Button, ListGroup } from "flowbite-react";
import { useNavigate } from "react-router-dom";
const URL = "http://localhost/BackEnd2/Api.php";

const Carrito = () => {
  const navigate = useNavigate();
  const { userId, productoCarrito, setProductoCarrito, setTotalCompra } =
    useUserContext();
  /** Aqui transformo un objetto a un array */
  var dataDisplay = [];
  function ObjectToArray(object, array) {
    array = [];
    for (var i in object) {
      array.push(Object.values(object[i]));
    }
    return array;
  }
  function TotalPayment(array) {
    var res = 0;
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      res += parseFloat(element[2]);
    }
    return res;
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
      dataDisplay = ObjectToArray(resp_json, dataDisplay);
      setTotalCompra(TotalPayment(dataDisplay));
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
    }).then(() => navigate("/"));
  };
  const handleCompra = () => {
    navigate("/productos/compra");
  };
  return (
    <div className="">
      {productoCarrito ? (
        productoCarrito[0][0] === "N" ? (
          <p>No hay items..</p>
        ) : (
          <div className="w-screen flex flex-col justify-center items-center mt-8">
            {productoCarrito.map((Item) => (
              <ListGroup
                key={Item[0]}
                id={Item[0]}
                className="w-3/4 flex flex-row "
              >
                <ListGroup.Item className="basis-1/2">{Item[1]}</ListGroup.Item>
                <ListGroup.Item className="basis-1/4">{Item[2]}</ListGroup.Item>
                <ListGroup.Item className="basis-1/4">{Item[3]}</ListGroup.Item>
                <ListGroup.Item onClick={() => handleDeleteItem(Item[0])}>
                  Borrar
                </ListGroup.Item>
              </ListGroup>
            ))}
            <Button onClick={handleCompra} className="w-1/6 mt-8">
              Comprar
            </Button>
          </div>
        )
      ) : (
        <p>Loadding...</p>
      )}
    </div>
  );
};
export default Carrito;
