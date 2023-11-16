import { Button, Label, TextInput, Select, ToggleSwitch } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useRef, useState } from "react";
const URL = "http://localhost/BackEnd2/Api.php";

const DisplayItemAdmin = ({ props }) => {
  const [switch1, setSwitch1] = useState(false);
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
    <div className="flex flex-col h-screen mt-12 space-y-12 items-center content-start ">
      <h1 className="font-bold ">{item[1]}</h1>
      <img src={item[3]} className="object-contain h-32"></img>
      <div className="flex flex-row">
        <Label>ID: {item[0]}</Label>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Nombre:</Label>
          <Label>{item[1]}</Label>
        </div>
        <TextInput className="basis-1/3"></TextInput>
        <Button className="basis-1/3">Cambiar</Button>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Descripcion:</Label>
          <Label>{item[2]}</Label>
        </div>
        <TextInput className="basis-1/3"></TextInput>
        <Button className="basis-1/3">Cambiar</Button>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Ubicacion de foto:</Label>
          <Label>{item[3]}</Label>
        </div>
        <TextInput className="basis-1/3"></TextInput>
        <Button className="basis-1/3">Cambiar</Button>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Precio:</Label>
          <Label>{item[3]}</Label>
        </div>
        <TextInput className="basis-1/3"></TextInput>
        <Button className="basis-1/3">Cambiar</Button>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-3/4">
        <Label>Stock: {item[5]}</Label>
      </div>
      <div className="flex flex-row space-x-2 items-center w-1/3">
        <TextInput className="basis-1/2"></TextInput>
        <Button className="basis-1/2">Aregar</Button>
      </div>
      <div className="flex flex-row space-x-2 items-center w-1/3">
        <TextInput className="basis-1/2"></TextInput>
        <Button className="basis-1/2">Eliminar</Button>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Marca:</Label>
          <Label>{item[6]}</Label>
        </div>
        <TextInput className="basis-1/3"></TextInput>
        <Button className="basis-1/3">Cambiar</Button>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Categoria:</Label>
          <Label>{item[7]}</Label>
        </div>
        <Select className="basis-1/3" id="countries" required>
          <option>Celular</option>
          <option>Tablet</option>
          <option>Accesorio</option>
          <option>Manga</option>
        </Select>
        <Button className="basis-1/3">Cambiar</Button>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Modelo:</Label>
          <Label>{item[8]}</Label>
        </div>
        <TextInput className="basis-1/3"></TextInput>
        <Button className="basis-1/3">Cambiar</Button>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Peso:</Label>
          <Label>{item[8]}</Label>
        </div>
        <TextInput className="basis-1/3"></TextInput>
        <Button className="basis-1/3">Cambiar</Button>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-3/4">
        <Label className="basis-1/2"> Disponibilidad: {item[10]}</Label>
        <ToggleSwitch
          className="basis-1/2"
          checked={switch1}
          onChange={setSwitch1}
        />
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-3/4">
        <Button>Borrar Item</Button>
      </div>
    </div>
  );
};
export default DisplayItemAdmin;
