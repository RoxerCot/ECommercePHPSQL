import { useEffect, useState } from "react";
import { Button, Label, ListGroup, Table } from "flowbite-react";
import { useUserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
const URL = "http://localhost/BackEnd2/Api.php";

const DisplayCarritos = () => {
  const { carritos, setCarritos, setCarrito, carrito } = useUserContext();
  const [idCart, setIdCart] = useState();
  const [payedCart, setPayedCart] = useState();
  const navigate = useNavigate();
  var dataDisplay = [];
  /** Aqui transformo un objetto a un array */
  function ObjectToArray(object, array) {
    array = [];
    for (var i in object) {
      array.push(Object.values(object[i]));
    }
    return array;
  }
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
      <div className=" flex justify-center items-center mt-12">
        <Label className="text-xl font-bold">Lista de Carritos</Label>
      </div>
      <div className=" flex justify-center items-center  mt-12">
        {carritos ? (
          <Table className="w-fit" hoverable>
            <Table.Head>
              <Table.HeadCell>Id Carrito</Table.HeadCell>
              <Table.HeadCell>Id Usuario</Table.HeadCell>
              <Table.HeadCell>Pagado?</Table.HeadCell>
              <Table.HeadCell>Borrar?</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {carritos.map((carrito) => (
                <Table.Row
                  key={carrito[0]}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="hover:underline whitespace-nowrap font-medium text-gray-900 dark:text-white">
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
