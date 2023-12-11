/**Importacion de librerias para su uso en el componente */
import { useEffect, useState } from "react";
import { Button, Label, ListGroup, Table } from "flowbite-react";
import { useUserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
/**Declaracion de constante que contiene la direccion a la backend */
const URL = "http://localhost/BackEnd2/Api.php";

const DisplayCarritos = () => {
  /**Declaracion de funcion para definir  variable compartida por userContext */
  const { carritos, setCarritos, setCarrito, carrito } = useUserContext();
  /**Declaracion de variable compartida con el render de este mismo componente  */
  const [idCart, setIdCart] = useState();
  const [payedCart, setPayedCart] = useState();
  /**Declaracion de hook useNavigate, para poder ocupar la funcion navigate
   * que se ocupa para navegar entre las rutas declaradas en router.jsx
   */
  const navigate = useNavigate();
  /**Variables declaradas para su uso en funciones js */
  var dataDisplay = [];
  /** Aqui transformo un objetto a un array */
  function ObjectToArray(object, array) {
    array = [];
    for (var i in object) {
      array.push(Object.values(object[i]));
    }
    return array;
  }
  /**
   * En este Use Effect se jalan todos los carritos,
   * se desestructura el JSON y se asignan las variables a los hooks UseState
   */
  useEffect(() => {
    const fetchData = async () => {
      setCarritos(false);
      var data = new FormData();
      data.append("METHOD", "GETCARTS");
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      });
      const resp_json = await resp.json();
      dataDisplay = ObjectToArray(resp_json, dataDisplay);
      setCarritos(ObjectToArray(resp_json, carritos));
    };
    fetchData();
    return () => {};
  }, []);
  /**
   * En este Use Effect se solicita el borrado del carrito seleccionado
   */
  useEffect(() => {
    const fetchData = async () => {
      var data = new FormData();
      data.append("METHOD", "DELCART");
      data.append("cartId", idCart);
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      }).then(() => navigate(0));
    };

    if (idCart != undefined) {
      fetchData();
    }

    return () => {};
  }, [idCart]);

  /**
   * En este Use Effect se solicita generar la forma de pago
   */
  useEffect(() => {
    const fetchData = async () => {
      var data = new FormData();
      data.append("METHOD", "PAYEDCART");
      data.append("cartId", payedCart[0]);
      data.append("cartItems", payedCart[1]);
      data.append("cartUsuario", payedCart[3]);
      data.append("cartCantidades", payedCart[2]);
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      }).then(() => navigate(0));
    };

    if (payedCart != undefined) {
      fetchData();
    }

    return () => {};
  }, [payedCart]);
  /**Funciones para asignar variables a los hooks useState definidos */
  function handleCartClick(crt) {
    setCarrito(crt);
  }
  function handleDeleteClick(crt) {
    setIdCart(crt);
  }
  function handlePayClick(crt) {
    setPayedCart(crt);
  }
  return (
    <div className="flex flex-col w-screen ">
      {/** Rennderzacion dedespliegue de carritos existentes en la base de datos*/}
      <div className=" flex justify-center items-center mt-12">
        <Label className="text-xl font-bold">Lista de Carritos</Label>
      </div>
      <div className=" flex justify-center items-center  mt-12">
        {carritos ? (
          <Table className="w-fit" hoverable>
            {/** Rennderzacion de la tabla traida de la peticion al backend */}
            <Table.Head>
              <Table.HeadCell>Id Carrito</Table.HeadCell>
              <Table.HeadCell>Id Usuario</Table.HeadCell>
              <Table.HeadCell>Pagado?</Table.HeadCell>
              <Table.HeadCell>Borrar?</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {/** Rennderzacion del mapo de carritos*/}
              {carritos.map((carrito) => (
                <Table.Row
                  key={carrito[0]}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="hover:underline whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/** Rennderzacion dedespliegue de link para navegar al modulo que despliega la informacion del produto seleccionado*/}
                    <Link
                      to="/admin/carrito"
                      onClick={() => handleCartClick(carrito)}
                    >
                      {carrito[0]}
                    </Link>
                  </Table.Cell>
                  <Table.Cell className="">{carrito[3]}</Table.Cell>
                  <Table.Cell
                    onClick={() => handlePayClick(carrito)}
                    className=""
                  >
                    {/** Rennderzacion del boton para declarar como pagado el carrito*/}
                    <Button>Pagado</Button>
                  </Table.Cell>
                  <Table.Cell className="">
                    <Button onClick={() => handleDeleteClick(carrito[0])}>
                      Borrar
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};
export default DisplayCarritos;
