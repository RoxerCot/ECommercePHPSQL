import { Button, Label, TextInput } from "flowbite-react";
import { useUserContext } from "../context/UserContext";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const URL = "http://localhost/BackEnd2/Api.php";

const CambiarUsuario = () => {
  const { userId } = useUserContext();
  const refNewUser = useRef();
  const navigate = useNavigate();
  const handleNuevoUsuario = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "CHANGEUSERNAME");
      data.append("userId", userId);
      data.append("newUser", refNewUser.current.value);
      console.log(data);
      BackendFetch(URL, data);
      localStorage.setItem("Usuario", JSON.stringify(refNewUser.current.value));
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
      onSubmit={handleNuevoUsuario}
      className="flex flex-col mt-8 mb-8 space-y-4 justify-center items-center"
    >
      <TextInput placeholder="Ingresa Usuario Actual"></TextInput>
      <TextInput placeholder="Ingresa Nuevo Usuario"></TextInput>
      <TextInput
        ref={refNewUser}
        placeholder="Repite Nuevo Usuario"
      ></TextInput>
      <Button type="submit">Camiar Nombre</Button>
    </form>
  );
};
export default CambiarUsuario;
