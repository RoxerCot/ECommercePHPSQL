import { Button, Label, TextInput, Select, ToggleSwitch } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useRef, useState } from "react";
const URL = "http://localhost/BackEnd2/Api.php";

const NuevoItem = () => {
  const [switch1, setSwitch1] = useState(false);
  const { userId } = useUserContext();
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
    <div className="flex flex-col h-screen mt-12 space-y-12 items-center content-start space-y-5">
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Nombre:</Label>
        </div>
        <TextInput className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Descripcion:</Label>
        </div>
        <TextInput className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Ubicacion de foto:</Label>
        </div>
        <TextInput className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Precio:</Label>
        </div>
        <TextInput className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center  w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Stock:</Label>
        </div>
        <TextInput className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Marca:</Label>
        </div>
        <TextInput className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Categoria:</Label>
        </div>
        <Select className="basis-1/3" id="countries" required>
          <option>Celular</option>
          <option>Tablet</option>
          <option>Accesorio</option>
          <option>Manga</option>
        </Select>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Modelo:</Label>
        </div>
        <TextInput className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Peso:</Label>
        </div>
        <TextInput className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-3/4">
        <Label className="basis-1/2"> Disponibilidad:</Label>
        <ToggleSwitch
          className="basis-1/2"
          checked={switch1}
          onChange={setSwitch1}
        />
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-3/4">
        <Button>Agregar Item</Button>
      </div>
    </div>
  );
};
export default NuevoItem;
