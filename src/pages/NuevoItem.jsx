import { Button, Label, TextInput, Select, ToggleSwitch } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
const URL = "http://localhost/BackEnd2/Api.php";

const NuevoItem = () => {
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
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "ADDITEM");
      data.append("nombre", refNombre.current.value);
      data.append("descripcion", refDescripcion.current.value);
      data.append("foto", refFoto.current.value);
      data.append("precio", refPrecio.current.value);
      data.append("stock", refStock.current.value);
      data.append("marca", refMarca.current.value);
      data.append("categoria", selectOption);
      data.append("modelo", refModelo.current.value);
      data.append("peso", refPeso.current.value);
      data.append("disponibilidad", switch1 ? 1 : 0);
      console.log(data);
      AddItem(URL, data);
      console.log("Item added");
    } catch (error) {
      console.log(error);
    }
  };

  const AddItem = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => navigate(0));
  };
  return (
    <div className="flex flex-col h-screen mt-12 space-y-12 items-center content-start w-screen">
      <div className="flex flex-row space-x-2 items-center w-full">
        <div className="basis-1/3">
          <Label>Nombre:</Label>
        </div>
        <TextInput ref={refNombre} className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center w-full">
        <div className="basis-1/3">
          <Label>Descripcion:</Label>
        </div>
        <TextInput ref={refDescripcion} className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center w-full">
        <div className="basis-1/3">
          <Label>Ubicacion de foto:</Label>
        </div>
        <TextInput
          ref={refFoto}
          placeholder="/images/items/ejemplo.jpg"
          className="basis-1/3"
        ></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center w-full">
        <div className="basis-1/3">
          <Label>Precio:</Label>
        </div>
        <TextInput ref={refPrecio} className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center  w-full">
        <div className="basis-1/3">
          <Label>Stock:</Label>
        </div>
        <TextInput ref={refStock} className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center w-full">
        <div className="basis-1/3">
          <Label>Marca:</Label>
        </div>
        <TextInput ref={refMarca} className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center w-full">
        <div className="basis-1/3">
          <Label>Categoria:</Label>
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
      </div>
      <div className="flex flex-row space-x-2 items-center w-full">
        <div className="basis-1/3">
          <Label>Modelo:</Label>
        </div>
        <TextInput ref={refModelo} className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center w-full">
        <div className="basis-1/3">
          <Label>Peso:</Label>
        </div>
        <TextInput ref={refPeso} className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-full">
        <Label className="basis-1/2"> Disponibilidad:</Label>
        <ToggleSwitch
          className="basis-1/2"
          checked={switch1}
          onChange={setSwitch1}
        />
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-full">
        <Button onClick={handleSubmit}>Agregar Item</Button>
      </div>
    </div>
  );
};
export default NuevoItem;
