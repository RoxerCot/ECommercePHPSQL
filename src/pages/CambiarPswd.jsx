import { Alert, Button, TextInput } from "flowbite-react";
import { useUserContext } from "../context/UserContext";
import { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
const URL = "http://localhost/BackEnd2/Api.php";

const CambiarPswd = () => {
  const { userId } = useUserContext();
  const [alert, setAlert] = useState("Bienvenida");
  const [pswd, setPswd] = useState("");
  const [newPswd, setNewPswd] = useState("");
  const [newPswdConf, setNewPswdConf] = useState("");

  const handleNuevaPswd = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "CHANGEUSERPSWD");
      data.append("userId", userId);
      data.append("Pswd", pswd);
      data.append("newPswd", newPswd);
      data.append("newPswdConf", newPswdConf);
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      });
      const response_json = await resp.json();

      if (
        response_json["Mensaje"] == "Bienvenida" ||
        response_json["Mensaje"] == "Password Changed"
      ) {
        setPswd("");
        setNewPswd("");
        setNewPswdConf("");
      }
      setAlert(response_json["Mensaje"]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChangePswd = (e) => {
    setPswd(e.target.value);
  };
  const handleInputChangeNewPswd = (e) => {
    setNewPswd(e.target.value);
  };
  const handleInputChangeNewPswdConf = (e) => {
    setNewPswdConf(e.target.value);
  };
  return (
    <div>
      {(() => {
        switch (alert) {
          case "Bienvenida":
            return (
              <Alert className="items-center justify-center" color="info">
                Inrese los datos para cambiar su contraseña
              </Alert>
            );
          case "Password Changed":
            return (
              <Alert className="items-center justify-center" color="info">
                Contraseña ha sido cambiada
              </Alert>
            );
          case "Password Not Matching":
            return (
              <Alert
                className="items-center justify-center"
                color="failure"
                icon={HiInformationCircle}
              >
                Alerta!... Contraseñas no coinciden
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
          default:
            return null;
        }
      })()}
      <form
        onSubmit={handleNuevaPswd}
        className="flex flex-col mt-8 mb-8 space-y-4 justify-center items-center"
      >
        <TextInput
          type="password"
          value={pswd}
          onChange={handleInputChangePswd}
          placeholder="Ingresa Contraseña Actual"
          required
        ></TextInput>
        <TextInput
          type="password"
          value={newPswd}
          onChange={handleInputChangeNewPswd}
          placeholder="Ingresa Nueva Contraseña"
          required
        ></TextInput>
        <TextInput
          type="password"
          value={newPswdConf}
          onChange={handleInputChangeNewPswdConf}
          placeholder="Repite Nueva Contraseña"
          required
        ></TextInput>
        <Button type="submit">Camiar Contraseña</Button>
      </form>
    </div>
  );
};
export default CambiarPswd;
