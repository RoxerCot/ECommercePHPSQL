/**Importacion de librerias para su uso en el componente */
import { useRef, useState } from "react";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { useUserContext } from "../context/UserContext";
import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";

/**Declaracion de constante que contiene la direccion a la backend */
const URL = "http://localhost/BackEnd2/Api.php";

const RegisterForm = () => {
  /**Declaracion de hook useNavigate, para poder ocupar la funcion navigate
   * que se ocupa para navegar entre las rutas declaradas en router.jsx
   */
  const navigate = useNavigate();
  /**Declaracion de variable referenciada al balor del componente aasignado para su uso en el codigo de funcionamiento del componente Js  */
  const refEmail = useRef(null);
  const refPswd = useRef(null);
  /**Declaracion de funcion para definir  variable compartida por userContext */
  const { user } = useUserContext();
  /**Declaracion de variable compartida con el render de este mismo componente  */
  const [alert, setAlert] = useState("Bienvenida");
  useRedirectActiveUser(user, "/productos");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "REGISTER");
      data.append("usuario", refEmail.current.value);
      data.append("password", refPswd.current.value);
      /**Funcion asincrona para realizar la peticion http al backend con metodo POST */
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      });
      const response_json = await resp.json();
      if (response_json["Mensaje"] == "User Registered") {
        localStorage.setItem("Usuario", JSON.stringify(refEmail.current.value));
        navigate(0);
      } else {
        setAlert(response_json["Mensaje"]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col gap-4 w-3/5"
      >
        <p className="font-sans self-center place-self-center mb-12">
          Registro
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
              case "User Already Exists":
                return (
                  <Alert
                    className="items-center justify-center"
                    color="failure"
                    icon={HiInformationCircle}
                  >
                    Alerta!... Este Email ya ha sido registrado
                  </Alert>
                );
              default:
                return null;
            }
          })()}
        </div>
        <div>
          {/**Renderizacion del formulario para el registro de usuario */}
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Tu email" />
          </div>
          <TextInput
            id="email1"
            placeholder="name@mail.com"
            required
            type="email"
            ref={refEmail}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Tu contraseña" />
          </div>
          <TextInput id="password1" required type="password" ref={refPswd} />
        </div>
        {/**Renderizacion del formulario para ejecutar la peticion al backend de el registro de usuario*/}
        <Button type="submit">Registrar</Button>
      </form>
    </>
  );
};
export default RegisterForm;
