/**Importacion de librerias para su uso en el componente */
import { Button, Label, TextInput, Select, ToggleSwitch } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
/**Declaracion de constante que contiene la direccion a la backend */
const URL = "http://localhost/BackEnd2/Api.php";

const DisplayItemAdmin = ({ props }) => {
  /**Declaracion de variable compartida con el render de este mismo componente  */
  const [switch1, setSwitch1] = useState(false);
  const [selectOption, setSelectOption] = useState("Celular");
  /**Declaracion de variable referenciada al balor del componente aasignado para su uso en el codigo de funcionamiento del componente Js  */
  const refNombre = useRef(null);
  const refDescripcion = useRef(null);
  const refFoto = useRef(null);
  const refPrecio = useRef(null);
  const refStock = useRef(null);
  const refMarca = useRef(null);
  const refModelo = useRef(null);
  const refPeso = useRef(null);
  /**Desestructuracion de las propiedades asignadas a la creacion del componente */
  const { item } = props;
  /**Declaracion de hook useNavigate, para poder ocupar la funcion navigate
   * que se ocupa para navegar entre las rutas declaradas en router.jsx
   */
  const navigate = useNavigate();
  /**Funciones para realizar la peticion de modificar la informacion seleccionada del producto */
  const handleName = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "MODITEM");
      data.append("itemId", item[0]);
      data.append("field", "Nombre");
      data.append("newvalue", refNombre.current.value);
      console.log(data);
      ModItem(URL, data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDescripcion = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "MODITEM");
      data.append("itemId", item[0]);
      data.append("field", "Descripcion");
      data.append("newvalue", refDescripcion.current.value);
      console.log(data);
      ModItem(URL, data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFoto = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "MODITEM");
      data.append("itemId", item[0]);
      data.append("field", "Foto");
      data.append("newvalue", refFoto.current.value);
      console.log(data);
      ModItem(URL, data);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePrecio = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "MODITEM");
      data.append("itemId", item[0]);
      data.append("field", "Precio");
      data.append("newvalue", refPrecio.current.value);
      console.log(data);
      ModItem(URL, data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleStock = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "MODITEM");
      data.append("itemId", item[0]);
      data.append("field", "Stock");
      data.append("newvalue", refStock.current.value);
      console.log(data);
      ModItem(URL, data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleMarca = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "MODITEM");
      data.append("itemId", item[0]);
      data.append("field", "Marca");
      data.append("newvalue", refMarca.current.value);
      console.log(data);
      ModItem(URL, data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCategoria = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "MODITEM");
      data.append("itemId", item[0]);
      data.append("field", "Categoria");
      data.append("newvalue", selectOption);
      console.log(data);
      ModItem(URL, data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleModelo = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "MODITEM");
      data.append("itemId", item[0]);
      data.append("field", "Modelo");
      data.append("newvalue", refModelo.current.value);
      console.log(data);
      ModItem(URL, data);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePeso = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "MODITEM");
      data.append("itemId", item[0]);
      data.append("field", "Peso");
      data.append("newvalue", refPeso.current.value);
      console.log(data);
      ModItem(URL, data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDisponibilidad = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "MODITEM");
      data.append("itemId", item[0]);
      data.append("field", "Disponibilidad");
      data.append("newvalue", switch1 ? 1 : 0);
      console.log(data);
      ModItem(URL, data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBorrar = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "DELITEM");
      data.append("itemId", item[0]);
      console.log(data);
      ModItem(URL, data);
    } catch (error) {
      console.log(error);
    }
  };
  /**Funcion asincrona para realizar la peticion http al backend con metodo POST */
  const ModItem = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => navigate(0));
    // .then(() => navigate(0))
  };
  /**Funcion para regresar al despliegue de producto dependiendo de la  categoria */
  function handleReturn(categ) {
    var route = "/admin";
    switch (categ) {
      case "Celular":
        route = "/admin/celulares";
        break;
      case "Accesorio":
        route = "/admin/accesorios";
        break;
      case "Tablet":
        route = "/admin/tablets";
        break;
      case "Manga":
        route = "/admin/mangas";
        break;
      case "Otros":
        route = "/admin/otros";
        break;
      default:
        break;
    }
    return route;
  }
  return (
    <div className="flex flex-col h-fit space-y-12 items-center content-start w-screen mt-12 pb-12">
      {/** Rennderzacion de buton para regresar al despliege de componentes por categoria*/}
      <div className="flex self-start pl-2">
        <Button
          onClick={() => {
            navigate(handleReturn(item[7]));
          }}
        >
          <FaArrowAltCircleLeft className="h-6 w-6" />
        </Button>
      </div>
      {/** Rennderzacion de la informacion del componente, la entrada para modificacion y el boton a modificar, por campo*/}
      <div className="flex flex-col space-y-4 ">
        <h1 className="font-bold ">{item[1]}</h1>
        <img src={item[3]} className="object-contain h-32"></img>
        <Label>ID: {item[0]}</Label>
      </div>
      <div className="flex flex-row space-x-4 items-center w-3/4">
        <div className="flex flex-col basis-1/4">
          <Label>Nombre:</Label>
          <Label>{item[1]}</Label>
        </div>
        <TextInput ref={refNombre} className="basis-1/4"></TextInput>
        <Button onClick={handleName} className="basis-1/4">
          Cambiar
        </Button>
      </div>
      <div className="flex flex-row space-x-4 items-center w-3/4">
        <div className="flex flex-col basis-1/4">
          <Label>Descripcion:</Label>
          <Label>{item[2]}</Label>
        </div>
        <TextInput ref={refDescripcion} className="basis-1/4"></TextInput>
        <Button onClick={handleDescripcion} className="basis-1/4">
          Cambiar
        </Button>
      </div>
      <div className="flex flex-row space-x-4 items-center w-3/4">
        <div className="flex flex-col basis-1/4">
          <Label>Ubicacion de foto:</Label>
          <Label>{item[3]}</Label>
        </div>
        <TextInput ref={refFoto} className="basis-1/4"></TextInput>
        <Button onClick={handleFoto} className="basis-1/4">
          Cambiar
        </Button>
      </div>
      <div className="flex flex-row space-x-4 items-center w-3/4">
        <div className="flex flex-col basis-1/4">
          <Label>Precio:</Label>
          <Label>{item[4]}</Label>
        </div>
        <TextInput ref={refPrecio} className="basis-1/4"></TextInput>
        <Button onClick={handlePrecio} className="basis-1/4">
          Cambiar
        </Button>
      </div>
      <div className="flex flex-row space-x-4 items-center w-3/4">
        <div className="flex flex-col basis-1/4">
          <Label>Cantidad disponible:</Label>
          <Label>{item[5]}</Label>
        </div>
        <TextInput ref={refStock} className="basis-1/4"></TextInput>
        <Button onClick={handleStock} className="basis-1/4">
          Cambiar
        </Button>
      </div>
      <div className="flex flex-row space-x-4 items-center w-3/4">
        <div className="flex flex-col basis-1/4">
          <Label>Marca:</Label>
          <Label>{item[6]}</Label>
        </div>
        <TextInput ref={refMarca} className="basis-1/4"></TextInput>
        <Button onClick={handleMarca} className="basis-1/4">
          Cambiar
        </Button>
      </div>
      <div className="flex flex-row space-x-4 items-center w-3/4">
        <div className="flex flex-col basis-1/4">
          <Label>Categoria:</Label>
          <Label>{item[7]}</Label>
        </div>
        <Select
          onChange={(e) => {
            setSelectOption(e.target.value);
          }}
          className="basis-1/4"
          id="countries"
          required
        >
          <option value="Celular">Celular</option>
          <option value="Tablet">Tablet</option>
          <option value="Accesorio">Accesorio</option>
          <option value="Manga">Manga</option>
        </Select>
        <Button onClick={handleCategoria} className="basis-1/4">
          Cambiar
        </Button>
      </div>
      <div className="flex flex-row space-x-4 items-center w-3/4">
        <div className="flex flex-col basis-1/4">
          <Label>Modelo:</Label>
          <Label>{item[8]}</Label>
        </div>
        <TextInput ref={refModelo} className="basis-1/4"></TextInput>
        <Button onClick={handleModelo} className="basis-1/4">
          Cambiar
        </Button>
      </div>
      <div className="flex flex-row space-x-4 items-center w-3/4">
        <div className="flex flex-col basis-1/4">
          <Label>Peso:</Label>
          <Label>{item[8]}</Label>
        </div>
        <TextInput ref={refPeso} className="basis-1/4"></TextInput>
        <Button onClick={handlePeso} className="basis-1/4">
          Cambiar
        </Button>
      </div>

      <div className="flex flex-row space-x-4 items-center w-3/4">
        <div className="flex flex-col basis-1/4">
          <Label className="basis-1/4"> Disponibilidad: {item[10]}</Label>
        </div>
        <ToggleSwitch
          className="basis-1/4"
          checked={switch1}
          onChange={setSwitch1}
        />
        <Button onClick={handleDisponibilidad} className="basis-1/4">
          Cambiar
        </Button>
      </div>
      <div className="flex flex-row space-x-4 items-center justify-center w-3/4 ">
        <Button onClick={handleBorrar}>Borrar Articulo</Button>
      </div>
    </div>
  );
};
export default DisplayItemAdmin;
