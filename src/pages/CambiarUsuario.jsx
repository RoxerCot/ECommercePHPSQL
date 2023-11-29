import { Alert, Button, TextInput } from "flowbite-react";
import { useUserContext } from "../context/UserContext";
import { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
const URL = "http://localhost/BackEnd2/Api.php";

const CambiarUsuario = () => {
  const { userId } = useUserContext();
  const [alert, setAlert] = useState("Bienvenida");
  const [pswd, setPswd] = useState("");
  const [newUsr, setNewUsr] = useState("");
  const [newUsrConf, setNewUsrConf] = useState("");

  const handleNuevoUsr = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "CHANGEUSER");
      data.append("userId", userId);
      data.append("pswd", pswd);
      data.append("newUsr", newUsr);
      data.append("newUsrConf", newUsrConf);
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      });
      const response_json = await resp.json();
      console.log(response_json);
      if (
        response_json["Mensaje"] == "Bienvenida" ||
        response_json["Mensaje"] == "User Changed"
      ) {
        setPswd("");
        setNewUsr("");
        setNewUsrConf("");
      }
      setAlert(response_json["Mensaje"]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChangeUsr = (e) => {
    setPswd(e.target.value);
  };
  const handleInputChangeNewUsr = (e) => {
    setNewUsr(e.target.value);
  };
  const handleInputChangeNewUsrConf = (e) => {
    setNewUsrConf(e.target.value);
  };
  return (
    <div className="dark:bg-neutral-950">
      {(() => {
        switch (alert) {
          case "Bienvenida":
            return (
              <Alert className="items-center justify-center" color="info">
                Ingrese los datos para cambiar el nombre de su usuario
              </Alert>
            );
          case "User Changed":
            return (
              <Alert className="items-center justify-center" color="info">
                Nombre de su usuario ha sido cambiado
              </Alert>
            );
          case "User Not Matching":
            return (
              <Alert
                className="items-center justify-center"
                color="failure"
                icon={HiInformationCircle}
              >
                Alerta!... Usuarios no coinciden
              </Alert>
            );
          case "Wrong Password":
            return (
              <Alert
                className="items-center justify-center"
                color="failure"
                icon={HiInformationCircle}
              >
                Alerta!... Contraseña actual incorrecta
              </Alert>
            );
          case "User Already Exists":
            return (
              <Alert
                className="items-center justify-center"
                color="failure"
                icon={HiInformationCircle}
              >
                Alerta!... Usuario ya existe, intenta con otro
              </Alert>
            );
          default:
            return null;
        }
      })()}
      <form
        onSubmit={handleNuevoUsr}
        className="flex flex-col mt-8 mb-8 space-y-4 justify-center items-center"
      >
        <TextInput
          type="password"
          value={pswd}
          onChange={handleInputChangeUsr}
          placeholder="Ingresa Contraseña Actual"
          required
        ></TextInput>
        <TextInput
          value={newUsr}
          onChange={handleInputChangeNewUsr}
          placeholder="Ingresa Nuevo Usuario"
          required
        ></TextInput>
        <TextInput
          value={newUsrConf}
          onChange={handleInputChangeNewUsrConf}
          placeholder="Repite Nuevo Usuario"
          required
        ></TextInput>
        <Button type="submit">Camiar Nombre de Usuario</Button>
      </form>
    </div>
  );
};
export default CambiarUsuario;
