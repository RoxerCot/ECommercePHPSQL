import { Button, Label, TextInput, Select, ToggleSwitch } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
const URL = "http://localhost/BackEnd2/Api.php";

const DisplayItemAdmin = ({ props }) => {
  const [switch1, setSwitch1] = useState(false);
  const [selectOption, setSelectOption] = useState("Celular");
  const refNombre = useRef(null);
  const refDescripcion = useRef(null);
  const refFoto = useRef(null);
  const refPrecio = useRef(null);
  const refStock = useRef(null);
  const refMarca = useRef(null);
  const refModelo = useRef(null);
  const refPeso = useRef(null);
  const { item } = props;
  const navigate = useNavigate();

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

  const ModItem = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => navigate(0));
    // .then(() => navigate(0))
  };

  return (
    <div className="flex flex-col h-screen mt-12 space-y-12 items-center content-start ">
      <h1 className="font-bold ">{item[1]}</h1>
      <img src={item[3]} className="object-contain h-32"></img>
      <div className="flex flex-row">
        <Label>ID: {item[0]}</Label>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Nombre:</Label>
          <Label>{item[1]}</Label>
        </div>
        <TextInput ref={refNombre} className="basis-1/3"></TextInput>
        <Button onClick={handleName} className="basis-1/3">
          Cambiar
        </Button>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Descripcion:</Label>
          <Label>{item[2]}</Label>
        </div>
        <TextInput ref={refDescripcion} className="basis-1/3"></TextInput>
        <Button onClick={handleDescripcion} className="basis-1/3">
          Cambiar
        </Button>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Ubicacion de foto:</Label>
          <Label>{item[3]}</Label>
        </div>
        <TextInput ref={refFoto} className="basis-1/3"></TextInput>
        <Button onClick={handleFoto} className="basis-1/3">
          Cambiar
        </Button>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Precio:</Label>
          <Label>{item[4]}</Label>
        </div>
        <TextInput ref={refPrecio} className="basis-1/3"></TextInput>
        <Button onClick={handlePrecio} className="basis-1/3">
          Cambiar
        </Button>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Stock:</Label>
          <Label>{item[5]}</Label>
        </div>
        <TextInput ref={refStock} className="basis-1/3"></TextInput>
        <Button onClick={handleStock} className="basis-1/3">
          Cambiar
        </Button>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Marca:</Label>
          <Label>{item[6]}</Label>
        </div>
        <TextInput ref={refMarca} className="basis-1/3"></TextInput>
        <Button onClick={handleMarca} className="basis-1/3">
          Cambiar
        </Button>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Categoria:</Label>
          <Label>{item[7]}</Label>
        </div>
        <Select
          onChange={(e) => {
            setSelectOption(e.target.value);
          }}
          className="basis-1/3"
          id="countries"
          required
        >
          <option value="Celular">Celular</option>
          <option value="Tablet">Tablet</option>
          <option value="Accesorio">Accesorio</option>
          <option value="Manga">Manga</option>
        </Select>
        <Button onClick={handleCategoria} className="basis-1/3">
          Cambiar
        </Button>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Modelo:</Label>
          <Label>{item[8]}</Label>
        </div>
        <TextInput ref={refModelo} className="basis-1/3"></TextInput>
        <Button onClick={handleModelo} className="basis-1/3">
          Cambiar
        </Button>
      </div>
      <div className="flex flex-row space-x-2 items-center w-3/4">
        <div className="flex flex-col basis-1/3">
          <Label>Peso:</Label>
          <Label>{item[8]}</Label>
        </div>
        <TextInput ref={refPeso} className="basis-1/3"></TextInput>
        <Button onClick={handlePeso} className="basis-1/3">
          Cambiar
        </Button>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-3/4">
        <Label className="basis-1/2"> Disponibilidad: {item[10]}</Label>
        <ToggleSwitch
          className="basis-1/2"
          checked={switch1}
          onChange={setSwitch1}
        />
        <Button onClick={handleDisponibilidad} className="basis-1/3">
          Cambiar
        </Button>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-3/4">
        <Button onClick={handleBorrar}>Borrar Item</Button>
      </div>
    </div>
  );
};
export default DisplayItemAdmin;
