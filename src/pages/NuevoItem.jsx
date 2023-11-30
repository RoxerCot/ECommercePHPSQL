import { Button, Label, TextInput, Select, ToggleSwitch } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
const URL = "http://localhost/BackEnd2/Api.php";

const NuevoItem = () => {
  const [switch1, setSwitch1] = useState(false);
  const [selectOption, setSelectOption] = useState("Celular");
  const [options, seOptions] = useState(null);
  const refNombre = useRef(null);
  const refDescripcion = useRef(null);
  const refFoto = useRef(null);
  const refPrecio = useRef(null);
  const refStock = useRef(null);
  const refMarca = useRef(null);
  const refModelo = useRef(null);
  const refPeso = useRef(null);
  var dataDisplay = [];
  const navigate = useNavigate();

  function ObjectToArray(object, array) {
    array = [];
    for (var i in object) {
      array.push(Object.values(object[i]));
    }
    return array;
  }

  useEffect(() => {
    const fetchData = async () => {
      seOptions(false);
      var data = new FormData();
      data.append("METHOD", "GETCATEGORIES");
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      });
      const resp_json = await resp.json();
      dataDisplay = ObjectToArray(resp_json, dataDisplay);
      seOptions(ObjectToArray(resp_json, seOptions));
    };
    fetchData();
    return () => {};
  }, []);

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
    <div className="flex flex-col h-screen mt-4 space-y-6 items-center justify-center w-screen">
      <div className="flex  space-x-2 items-center justify-center w-full mb-12">
        <div className="basis-1/3">
          <Label className="text-xl font-bold">Inserte Nuevo Articulo</Label>
        </div>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-full">
        <div className="basis-1/3">
          <Label>Nombre:</Label>
        </div>
        <TextInput ref={refNombre} className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-full">
        <div className="basis-1/3">
          <Label>Descripcion:</Label>
        </div>
        <TextInput ref={refDescripcion} className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-full">
        <div className="basis-1/3">
          <Label>Ubicacion de foto:</Label>
        </div>
        <TextInput
          ref={refFoto}
          placeholder="/images/items/ejemplo.jpg"
          className="basis-1/3"
        ></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-full">
        <div className="basis-1/3">
          <Label>Precio:</Label>
        </div>
        <TextInput ref={refPrecio} className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center  w-full">
        <div className="basis-1/3">
          <Label>Cantidad disponible:</Label>
        </div>
        <TextInput ref={refStock} className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-full">
        <div className="basis-1/3">
          <Label>Marca:</Label>
        </div>
        <TextInput ref={refMarca} className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-full">
        <div className="basis-1/3">
          <Label>Categoria:</Label>
        </div>
        {options ? (
          <Select
            onChange={(e) => {
              setSelectOption(e.target.value);
            }}
            className="basis-1/3"
            id="countries"
            required
          >
            {options.map((opcion) => (
              <option key={opcion[0]} value={opcion[0]}>
                {opcion[1]}
              </option>
            ))}
          </Select>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-full">
        <div className="basis-1/3">
          <Label>Modelo:</Label>
        </div>
        <TextInput ref={refModelo} className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-full">
        <div className="basis-1/3">
          <Label>Peso:</Label>
        </div>
        <TextInput ref={refPeso} className="basis-1/3"></TextInput>
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-full">
        <div className="basis-1/3">
          <Label>Disponibilidad:</Label>
        </div>
        <ToggleSwitch
          className="basis-1/3"
          checked={switch1}
          onChange={setSwitch1}
        />
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center w-full">
        <Button onClick={handleSubmit}>Agregar Articulo</Button>
      </div>
    </div>
  );
};
export default NuevoItem;
