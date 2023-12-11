/**Importacion de librerias para su uso en el componente */
import { Button, Label, TextInput, ToggleSwitch } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
/**Declaracion de constante que contiene la direccion a la backend */
const URL = "http://localhost/BackEnd2/Api.php";

const NuevoUsuario = () => {
  /**Declaracion de hook useState para la generacion de variable necesarias para el funcionamient
   *  adecuado de la renderizacion de componentes
   */
  const [switch1, setSwitch1] = useState(false);
  /**Declaracion de hook useRef para  compartir los valores de los componentes renderizados
   *  a las funciones de Js correspondientes
   */
  const refEmail = useRef(null);
  const refPswd = useRef(null);
  /**Declaracion de hook useNavigate, para poder ocupar la funcion navigate
   * que se ocupa para navegar entre las rutas declaradas en router.jsx
   */
  const navigate = useNavigate();
  /**Funcion asincrona para agregr Usuario */
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
  /**Funcion para realizar peticion al backend por http con el metodo POST */
  const AddUser = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => navigate(0));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-screen mt-4 space-y-6 items-center justify-center w-screen"
    >
      {/**Renderizacion de formulario para la creacion de un nuevo usuari en la base de datos */}
      <div className="flex  space-x-2 items-center justify-center w-full mb-12">
        <div className="basis-1/3">
          <Label className="text-xl font-bold">Inserte Nuevo Usuario</Label>
        </div>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-full">
        <div className="basis-1/3">
          <Label>Email:</Label>
        </div>
        <TextInput ref={refEmail} className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-full">
        <div className="basis-1/3">
          <Label>Contraseña:</Label>
        </div>
        <TextInput ref={refPswd} className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-full">
        <div className="basis-1/3">
          <Label>Repetir Contraseña:</Label>
        </div>
        <TextInput className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-full">
        <div className="basis-1/3">
          <Label>Admin:</Label>
        </div>
        <ToggleSwitch
          className="basis-1/3"
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
