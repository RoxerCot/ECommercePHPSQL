/**Importacion de librerias para su uso en el componente */
import { Alert, Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { HiInformationCircle } from "react-icons/hi";
/**Declaracion de constante que contiene la direccion a la backend */
const URL = "http://localhost/BackEnd2/Api.php";

const LogInForm = () => {
  /**Declaracion de hook useNavigate, para poder ocupar la funcion navigate
   * que se ocupa para navegar entre las rutas declaradas en router.jsx
   */
  const navigate = useNavigate();
  /**Declaracion de variable referenciada al balor del componente aasignado para su uso en el codigo de funcionamiento del componente Js  */
  const refEmail = useRef(null);
  const refPswd = useRef(null);
  /**Declaracion de variable compartida con el render de este mismo componente  */
  const [alert, setAlert] = useState("Bienvenida");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "LOGIN");
      data.append("usuario", refEmail.current.value);
      data.append("password", refPswd.current.value);
      console.log(data);
      /**Funcion asincrona para realizar la peticion http al backend con metodo POST */
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      });
      const response_json = await resp.json();
      if (response_json.hasOwnProperty("Password")) {
        localStorage.setItem("Usuario", JSON.stringify(refEmail.current.value));
        navigate(0);
      } else if (response_json.hasOwnProperty("Mensaje")) {
        setAlert(response_json["Mensaje"]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex max-w-md flex-col gap-4 w-3/5">
      <p className="font-sans self-center place-self-center mb-12">
        Inicio de Sesion
      </p>
      <div>
        {/**Condicion de alerta para despliegue de mensaje al usuario */}
        {(() => {
          switch (alert) {
            case "Bienvenida":
              return (
                <Alert className="items-center justify-center" color="info">
                  Bienvenido a Ciber D Cars
                </Alert>
              );
            case "Wrong Password":
              return (
                <Alert
                  className="items-center justify-center"
                  color="failure"
                  icon={HiInformationCircle}
                >
                  Alerta!... Contraseña incorrecta
                </Alert>
              );
            case "User Does Not Exist":
              return (
                <Alert
                  className="items-center justify-center"
                  color="failure"
                  icon={HiInformationCircle}
                >
                  Alerta!... Usuario No Existe
                </Alert>
              );
            default:
              return null;
          }
        })()}
      </div>
      <div>
        {/**Renderizacion del formulario para el incio de sesion */}
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Tu email" />
        </div>
        <TextInput
          id="email1"
          placeholder="name@mail.com"
          type="email"
          ref={refEmail}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Tu contraseña" />
        </div>
        <TextInput id="password1" required ref={refPswd} type="password" />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Recuerdame</Label>
      </div>
      {/**Renderizacion del formulario para ejecutar la peticion al backend de incio de sesion*/}
      <Button onClick={handleSubmit} type="submit">
        Iniciar Sesion
      </Button>
    </form>
  );
};
export default LogInForm;
