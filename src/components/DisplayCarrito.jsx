/**Importacion de librerias para su uso en el componente */
import { Button, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { FaArrowAltCircleLeft } from "react-icons/fa";
/**Declaracion de constante que contiene la direccion a la backend */
const URL = "http://localhost/BackEnd2/Api.php";

const DisplayCarrito = ({ props }) => {
  /**Desestructuracion de las propiedades asignadas a la creacion del componente */
  const { cart } = props;
  /**Declaracion de variable compartida con el render de este mismo componente  */
  const [total, setTotal] = useState(0);
  /**Declaracion de funcion para definir  variable compartida por userContext */
  const { pickedcarrito, setPickedCarrito } = useUserContext();
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
  /**Funcion para generar el total a pagar del carrito */
  function Total(dataDisplay) {
    var t = 0;
    for (let index = 0; index < dataDisplay.length; index++) {
      t += parseInt(dataDisplay[index][1] * dataDisplay[index][2]);
    }
    return t;
  }

  /**
   * En este Use Effect se jalan el carrito elegido,
   * se desestructura el JSON y se asignan las variables a los hooks UseState
   */
  useEffect(() => {
    const fetchData = async () => {
      setPickedCarrito(false);
      var data = new FormData();
      data.append("METHOD", "GETCARTPICKED");
      data.append("itemsId", cart[1]);
      data.append("cantidades", cart[2]);
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      });
      const resp_json = await resp.json();
      dataDisplay = ObjectToArray(resp_json, dataDisplay);
      console.log(dataDisplay);
      setTotal(Total(dataDisplay));
      setPickedCarrito(ObjectToArray(resp_json, pickedcarrito));
    };
    fetchData();
    return () => {};
  }, []);
  return (
    <div className="flex flex-col w-screen">
      <div className="flex justify-start items-center mt-12 ml-2">
        {/** Rennderzacion del boton para regresar a carritos*/}
        <Button
          onClick={() => {
            navigate("/admin/carritos");
          }}
        >
          <FaArrowAltCircleLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-xl font-bold">Carrito</p>
      </div>
      <div className="flex justify-center items-center mt-24">
        {/** Rennderzacion condicionada del carrito elegido*/}
        {pickedcarrito ? (
          <Table className="w-fit" hoverable>
            {/** Rennderzacion de la tabla con la informacion del carrito */}
            <Table.Head>
              <Table.HeadCell>Articulos</Table.HeadCell>
              <Table.HeadCell>Costo</Table.HeadCell>
              <Table.HeadCell>Cantidad</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {/** Rennderzacion del mapeo de la informacion traida de la base de datos del carrito seleccionado */}
              {pickedcarrito.map((item) => (
                <Table.Row
                  key={item[0]}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item[0]}
                  </Table.Cell>
                  <Table.Cell className="">{item[1]}</Table.Cell>
                  <Table.Cell className="">{item[2]}</Table.Cell>
                </Table.Row>
              ))}
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>TOTAL</Table.Cell>
                <Table.Cell>{total}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
export default DisplayCarrito;
