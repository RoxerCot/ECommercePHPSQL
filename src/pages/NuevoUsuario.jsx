import { Button, Label, TextInput, Select, ToggleSwitch } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useRef, useState } from "react";
const URL = "http://localhost/BackEnd2/Api.php";

const NuevoUsuario = () => {
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
    <div className="flex flex-col h-screen mt-12 space-y-12 items-center content-start ">
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>email:</Label>
        </div>
        <TextInput className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Contraseña:</Label>
        </div>
        <TextInput className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Repetir Contraseña:</Label>
        </div>
        <TextInput className="basis-1/3"></TextInput>
      </div>
    </div>
  );
};
export default NuevoUsuario;
