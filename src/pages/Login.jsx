/**Importacion de librerias para su uso en el componente */
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";
import LogInForm from "../components/LogInForm";
import { Button } from "flowbite-react";

const Login = () => {
  /**Declaracion de variable compartida por userContext */
  const { user, admin } = useUserContext();
  /**Declaracion de hook useNavigate, para poder ocupar la funcion navigate
   * que se ocupa para navegar entre las rutas declaradas en router.jsx
   */
  const navigate = useNavigate();
  /**Navigate Functtion */
  const handleRegister = () => {
    navigate("/registro");
  };
  /** Verificacion si usuario ya se verifico al iniciar sesion, para el redireccionamiento de rutas  */
  useEffect(() => {
    if (user) {
      if (admin == 1) {
        console.log("Admin");
        navigate("/admin");
      } else {
        console.log("User");
        navigate("/productos");
      }
    }
  }, [user]);

  return (
    <div className="flex flex-row ">
      {/**Renderizacion de fondo */}
      <div className="basis-1/2 object-fill max-w-max">
        <img src="/images/Login_picture.jpg" className="h-screen " />
      </div>
      {/**Renderizacion de componente encargado del inicio de sesion asi como la renderizacion del formulario */}
      <div className="basis-1/2 flex flex-col items-center pt-12">
        <LogInForm className="" />
        <Button className="mt-12" onClick={handleRegister}>
          Registro
        </Button>
      </div>
    </div>
  );
};
export default Login;
