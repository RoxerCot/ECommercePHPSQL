import { Button, Label, TextInput, Select, ToggleSwitch } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
const URL = "http://localhost/BackEnd2/Api.php";

const NuevoUsuario = () => {
  const [switch1, setSwitch1] = useState(false);
  const refEmail = useRef(null);
  const refPswd = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "ADDUSER");
      data.append("user", refEmail.current.value);
      data.append("pswd", refPswd.current.value);
      data.append("admin", switch1 ? 1 : 0);
      AddUser(URL, data);
      console.log("Item added");
    } catch (error) {
      console.log(error);
    }
  };
  const AddUser = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => navigate(0));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-screen mt-12 space-y-12 items-center content-start w-screen"
    >
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="basis-1/3">
          <Label>email:</Label>
        </div>
        <TextInput ref={refEmail} className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="basis-1/3">
          <Label>Contraseña:</Label>
        </div>
        <TextInput ref={refPswd} className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="basis-1/3">
          <Label>Repetir Contraseña:</Label>
        </div>
        <TextInput className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="basis-1/3">
          <Label>Admin:</Label>
        </div>

        <ToggleSwitch
          className="basis-1/2"
          checked={switch1}
          onChange={setSwitch1}
        />
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-3/4">
        <Button type="submit">Agregar Usuario</Button>
      </div>
    </form>
  );
};
export default NuevoUsuario;
