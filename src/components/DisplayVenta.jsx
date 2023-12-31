import { Button, Label, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { FaArrowAltCircleLeft } from "react-icons/fa";
const URL = "http://localhost/BackEnd2/Api.php";

const DisplayVenta = ({ props }) => {
  const { sale } = props;
  const [total, setTotal] = useState(0);
  const { pickedcarrito, setPickedCarrito } = useUserContext();
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

  function Total(dataDisplay) {
    var t = 0;
    for (let index = 0; index < dataDisplay.length; index++) {
      t += parseInt(dataDisplay[index][1] * dataDisplay[index][2]);
    }
    return t;
  }

  useEffect(() => {
    const fetchData = async () => {
      setPickedCarrito(false);
      var data = new FormData();
      data.append("METHOD", "GETSALEPICKED");
      data.append("itemsId", sale[1]);
      data.append("cantidades", sale[2]);
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      });
      const resp_json = await resp.json();
      dataDisplay = ObjectToArray(resp_json, dataDisplay);
      setTotal(Total(dataDisplay));
      setPickedCarrito(ObjectToArray(resp_json, pickedcarrito));
    };
    fetchData();
    return () => {};
  }, []);
  return (
    <div className="flex flex-col w-screen">
      <div className="flex justify-start items-center mt-12 ml-2">
        <Button
          onClick={() => {
            navigate("/admin/ventas");
          }}
        >
          <FaArrowAltCircleLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className=" flex justify-center items-center mt-12">
        <p className="text-xl font-bold">Venta</p>
      </div>
      <div className=" flex justify-center items-center  mt-12">
        {pickedcarrito ? (
          <Table className="w-fit" hoverable>
            <Table.Head>
              <Table.HeadCell>Articulo</Table.HeadCell>
              <Table.HeadCell>Costo</Table.HeadCell>
              <Table.HeadCell>Cantidad</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
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
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};
export default DisplayVenta;
