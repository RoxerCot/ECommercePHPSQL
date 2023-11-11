import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const DisplayItem = ({ props }) => {
  const { productos } = useUserContext();
  const { item } = props;

  productos;
  console.log(productos);
  return (
    <div className="flex flex-col h-screen mt-12 space-y-12">
      <div className="flex flex-row basis-1/2 ">
        <div className="flex flex-col justify-center items-center basis-2/3 space-y-4">
          <h1 className="font-bold ">{item[1]}</h1>
          <img src={item[3]} className="h-auto lg:w-4/12 w-11/12"></img>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col space-y-1 pt-20">
            <h3>{item[2]}</h3>
            <h3>Precio: {item[4]}</h3>
            <h3>Disponibilidad: {item[5]}</h3>
            <h3>Marca: {item[6]}</h3>
            <Link to="/productos/celulares">Categoria: {item[7]}</Link>
            <h3>Modelo: {item[8]}</h3>
            <h3>Peso: {item[9]}</h3>
          </div>
          <div className="mt-8">
            <Button>Comprar</Button>
          </div>
        </div>
      </div>
      <div>
        <p>Otros Items</p>
      </div>
    </div>
  );
};
export default DisplayItem;
