import { useEffect, useState } from "react";
import { Button, Label, ListGroup, Table } from "flowbite-react";
import { useUserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
const URL = "http://localhost/BackEnd2/Api.php";

const DisplayVentas = () => {
  const [sales, setSales] = useState();
  const { setSale } = useUserContext();
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
      setSales(false);
      var data = new FormData();
      data.append("METHOD", "GETSALES");
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      });
      const resp_json = await resp.json();
      dataDisplay = ObjectToArray(resp_json, dataDisplay);
      setSales(ObjectToArray(resp_json, sales));
    };
    fetchData();
    return () => {};
  }, []);

  function handleSaleClick(sl) {
    setSale(sl);
  }
  return (
    <div className="flex flex-col w-screen">
      <div className=" flex justify-center items-center mt-12">
        <Label className="text-xl font-bold">Lista de Ventas</Label>
      </div>
      <div className=" flex justify-center items-center  mt-12">
        {sales ? (
          <Table className="w-fit" hoverable>
            <Table.Head>
              <Table.HeadCell>Id Venta</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {sales.map((sale) => (
                <Table.Row
                  key={sale[0]}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="hover:underline whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <Link
                      to="/admin/venta"
                      onClick={() => handleSaleClick(sale)}
                    >
                      {sale[0]}
                    </Link>
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
export default DisplayVentas;
