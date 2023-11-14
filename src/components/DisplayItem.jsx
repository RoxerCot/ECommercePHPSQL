import { Button, Label } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useRef } from "react";
const URL = "http://localhost/BackEnd2/Api.php";

const DisplayItem = ({ props }) => {
  const { userId } = useUserContext();
  const { item } = props;
  const refCantidad = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "ADDCART");
      data.append("userId", userId);
      data.append("cantidad", refCantidad.current.value);
      data.append("item", item[0]);
      AddItem(URL, data);
      console.log("Item added");
    } catch (error) {
      console.log(error);
    }
  };

  const AddItem = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => navigate(0));
  };
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
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col space-y-4"
          >
            <Label htmlFor="qtyitems">Cantidad:</Label>
            <input
              required
              type="number"
              id="qtyitems"
              min="0"
              max="100"
              ref={refCantidad}
            ></input>
            <Button type="submit">Comprar</Button>
          </form>
        </div>
      </div>
      <div>
        <p>Otros Items</p>
      </div>
    </div>
  );
};
export default DisplayItem;
