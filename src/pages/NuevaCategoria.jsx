/**Importacion de librerias para su uso en el componente */
import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
/**Declaracion de constante que contiene la direccion a la backend */
const URL = "http://localhost/BackEnd2/Api.php";

const NuevaCategoria = () => {
  /**Declaracion de variabla para compartir el valor dentro de un componente renderizado, a las funciones ejecutables de  Js*/
  const refCategory = useRef(null);
  /**Declaracion de hook useNavigate, para poder ocupar la funcion navigate
   * que se ocupa para navegar entre las rutas declaradas en router.jsx
   */
  const navigate = useNavigate();
  /**Declaracion de hook useState para generar la variable correspondiente a la implementacion de mensajes para el usuario */
  const [alert, setAlert] = useState("");
  /**Funcion asincrona para hacer peticion al back end y añadir una categoria */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "ADDCATEGORY");
      data.append("category", refCategory.current.value);
      console.log(data);
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      });
      const response_json = await resp.json();
      console.log(response_json);
      if (response_json.hasOwnProperty("Mensaje")) {
        if (response_json["Mensaje"] == "Category Added") {
          setAlert(response_json["Mensaje"]);
          navigate(0);
        } else {
          setAlert(response_json["Mensaje"]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    /**Renderizacion de formulario para ingresar una nueva categoria */
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-screen mt-4 space-y-6 items-center justify-center w-screen"
    >
      {/**Renderizacion de alerta dependiendo la respuesta de peticion al backend */}
      {(() => {
        switch (alert) {
          case "Category Already Exists":
            return (
              <Alert
                className="items-center justify-center"
                color="failure"
                icon={HiInformationCircle}
              >
                Info alert!... Categoria ya existe
              </Alert>
            );
          default:
            return null;
        }
      })()}
      <div className="flex  space-x-2 items-center justify-center w-full mb-12">
        <div className="basis-1/3">
          <Label className="text-xl font-bold">Inserte Nueva Categoria</Label>
        </div>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-full">
        <div className="basis-1/3">
          <Label> Categoria:</Label>
        </div>
        <TextInput ref={refCategory} className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-3/4">
        <Button type="submit">Agregar Categoria</Button>
      </div>
    </form>
  );
};
export default NuevaCategoria;
