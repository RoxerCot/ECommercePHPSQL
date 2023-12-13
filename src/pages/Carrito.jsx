/**Importacion de librerias para su uso en el componente */
import { useEffect } from "react";
import { useUserContext } from "../context/UserContext";
import { Button, ListGroup } from "flowbite-react";
import { useNavigate } from "react-router-dom";
/**Declaracion de constante que contiene la direccion a la backend */
const URL = "http://localhost/BackEnd2/Api.php";

const Carrito = () => {
  /**Declaracion de hook useNavigate, para poder ocupar la funcion navigate
   * que se ocupa para navegar entre las rutas declaradas en router.jsx
   */
  const navigate = useNavigate();
  /**Declaracion de variable compartida por userContext */
  const {
    userId,
    productoCarrito,
    setProductoCarrito,
    setTotalCompra,
    setProducto,
  } = useUserContext();
  /** Aqui transformo un objetto a un array */
  var dataDisplay = [];
  function ObjectToArray(object, array) {
    array = [];
    for (var i in object) {
      array.push(Object.values(object[i]));
    }
    return array;
  }
  /**Funcion para sacar el total a pagar del carrito */
  function TotalPayment(array) {
    var res = 0;
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      res += parseFloat(element[3]);
    }
    return res;
  }
  /**Hook definido para obtener el carrito del usuario del backend */
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
  /**Funcion para eliminar item del carrito del usuario */
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
  /**Funcion para mandar la peticion al backend */
  const DeleteItem = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => navigate("/"));
  };
  /**Funcion que te lleva a la generacion de ticket de pago */
  const handleCompra = () => {
    navigate("/productos/compra");
  };
  /**Funcion que te lleva al la pagina informativa del item seleccionado */
  const handleGoItem = (item) => {
    setProducto(item);
    navigate("/productos/item");
  };
  return (
    <div className="h-full">
      {/** Renderizacion condicionada a la existencia de productos en el carrito, esto significa que ya sea que no haya productos en el carrito
       * o la variable a un no haya terminado de ser definida de la peticion al backend
       */}
      {productoCarrito ? (
        /**Condicion para definir si el carrito tenia o no items */
        productoCarrito[0][0] === "N" ? (
          <div className="h-full flex justify-center items-center">
            <p className="">No hay carrito ..</p>
          </div>
        ) : (
          <div className="w-screen flex flex-col justify-center items-center mt-8">
            {/**Mapeo del array para la renderizacion de la lista del carrito existente */}
            {productoCarrito.map((Item) => (
              <ListGroup
                key={Item[0]}
                id={Item[0]}
                className="w-3/4 flex flex-row "
              >
                {/* {console.log(Item[1], " : ", Item[3])} */}
                <ListGroup.Item
                  onClick={() => handleGoItem(Item)}
                  className="basis-1/2"
                >
                  {Item[1]}
                </ListGroup.Item>
                <ListGroup.Item className="basis-1/4">
                  $ {Item[4]}
                </ListGroup.Item>
                <ListGroup.Item className="basis-1/4">
                  {Item[11]}
                </ListGroup.Item>
                <ListGroup.Item onClick={() => handleDeleteItem(Item[0])}>
                  Borrar
                </ListGroup.Item>
              </ListGroup>
            ))}
            {/**Boton para ejecutar la funcion de generacion de forma de pago para compra */}
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
