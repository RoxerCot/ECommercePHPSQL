/**Importacion de librerias para su uso en el componente */
import { Button, Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
/**Declaracion de constante que contiene la direccion a la backend */
const URL = "http://localhost/BackEnd2/Api.php";

const DisplayItemsAdmin = ({ props }) => {
  /**Declaracion de funcion para definir  variable compartida por userContext */
  const { setProducto, userId } = useUserContext();
  /**Desestructuracion de las propiedades asignadas a la creacion del componente */
  const { page, items, number } = props;
  /**Declaracion de variable compartida con el render de este mismo componente  */
  const [limit, setLimit] = useState(false);
  const [index, setIndex] = useState(0);
  /**Declaracion de hook useNavigate, para poder ocupar la funcion navigate
   * que se ocupa para navegar entre las rutas declaradas en router.jsx
   */
  const navigate = useNavigate();

  /**
   * En este Use Effect se definen las paginas que se necesitan para
   * el despliegue de productos
   */
  useEffect(() => {
    var x = number * (page - 1);
    setIndex(x);
    setLimit(parseInt(x) + parseInt(number));
  }, [number, page]);

  /**Funciones para asignar variables a los hooks useState definidos */
  function handleItemClick(itm) {
    setProducto(itm);
    console.log(" Item: ", itm);
  }

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {/**Mapeo del segmento a desplegar por pagina de los productos */}
      {items.slice(index, limit).map((Item) => (
        <Card key={Item[0]} imgAlt="" className="m-2">
          {/** Despliegue de la vista previa al componente*/}
          <img src={Item[3]} className="h-32 w-40 " />
          {/**Link proporcionado por Routerpara navegar al modulo de informacion del componente */}
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
