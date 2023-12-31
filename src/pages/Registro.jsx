/**Importacion de librerias para su uso en el componente */
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { Button } from "flowbite-react";
import { useEffect } from "react";
import { useUserContext } from "../context/UserContext";
const Registro = () => {
  /**Declaracion de variable compartida por userContext */
  const { user, admin } = useUserContext();
  /**Declaracion de hook useNavigate, para poder ocupar la funcion navigate
   * que se ocupa para navegar entre las rutas declaradas en router.jsx
   */
  const navigate = useNavigate();
  /**Funcion referenciada para navegar a Inicio */
  const handleReturn = () => {
    navigate("/");
  };
  /** Verifiacion de usuario con sesion activa, redirecciona segun el caso*/
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
        <img src="/images/Register_picture.jpg" className="h-screen " />
      </div>
      <div className="basis-1/2 flex flex-col items-center pt-12">
        {/**Renderizacion de componente encargado del registro asi como la renderizacion del formulario */}
        <RegisterForm />
        <Button onClick={handleReturn} className="mt-12">
          Regresar
        </Button>
      </div>
    </div>
  );
};
export default Registro;
