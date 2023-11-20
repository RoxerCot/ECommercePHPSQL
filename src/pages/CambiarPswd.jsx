import { Button, Label, TextInput } from "flowbite-react";
import { useUserContext } from "../context/UserContext";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const URL = "http://localhost/BackEnd2/Api.php";
const CambiarPswd = () => {
  const { userId } = useUserContext();
  const refNewPswd = useRef();
  const navigate = useNavigate();
  const handleNuevaPswd = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "CHANGEUSERPSWD");
      data.append("userId", userId);
      data.append("newPswd", refNewPswd.current.value);
      console.log(data);
      BackendFetch(URL, data);
    } catch (error) {
      console.log(error);
    }
  };
  const BackendFetch = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => navigate(0));
    // .then(() => navigate(0))
  };
  return (
    <form
      onSubmit={handleNuevaPswd}
      className="flex flex-col mt-8 space-y-4 justify-center items-center"
    >
      <TextInput placeholder="Ingresa Contraseña Actual"></TextInput>
      <TextInput placeholder="Ingresa Nueva Contraseña"></TextInput>
      <TextInput
        ref={refNewPswd}
        placeholder="Repite Nueva Contraseña"
      ></TextInput>
      <Button type="submit">Camiar Contraseña</Button>
    </form>
  );
};
export default CambiarPswd;
