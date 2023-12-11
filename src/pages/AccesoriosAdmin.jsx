/**Importacion de librerias para su uso en el componente */
import { Pagination, Label, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import DisplayItemsAdmin from "../components/DisplayItemsAdmin";

/**Declaracion de constante que contiene la direccion a la backend */
const URL = "http://localhost/BackEnd2/Api.php";

const AccesoriosAdmin = () => {
  /**Declaracion de variable compartida por userContext */
  const { setProductos } = useUserContext();
  /**Declaracion de variable compartida con el render de este mismo componente  */
  const [currentPage, setCurrentPage] = useState(1);
  const [arrayItems, setArrayItems] = useState(false);
  const [numberItems, setNumberItems] = useState(4);
  const [totalPages, setTotalpages] = useState(0);
  const [search, setSearch] = useState(0);
  const [totalarrayItems, setTotalArrayItems] = useState(false);
  /**Variables declaradas para su uso en funciones js */
  var arraySearch = [];
  var dataDisplay = [];
  /**Declaracion de hook useNavigate, para poder ocupar la funcion navigate
   * que se ocupa para navegar entre las rutas declaradas en router.jsx
   */
  const navigate = useNavigate();
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  /** Aqui transformo un objetto a un array */
  function ObjectToArray(object, array) {
    array = [];
    for (var i in object) {
      array.push(Object.values(object[i]));
    }
    return array;
  }

  /**Aqui se gestiona cuantas paginas se mostraran dependiendo del input del usuario */
  const handleSelect = (e) => {
    setNumberItems(e.target.value);
    setTotalpages(Math.ceil(arrayItems.length / e.target.value));
    navigate("/admin/accesorios");
  };

  // useEffect(() => {}, []);
  /**
   * En este Use Effect se jalan los celulares que hay y se cuenta la cantidad,
   * con ese dato y el dato del select, sacamos el total de paginas que va a tener esta seccion
   */
  useEffect(() => {
    const fetchData = async () => {
      setArrayItems(false);
      var data = new FormData();
      data.append("METHOD", "GETACCESORY");
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      });
      const resp_json = await resp.json();
      dataDisplay = ObjectToArray(resp_json, dataDisplay);
      setArrayItems(ObjectToArray(resp_json, arrayItems));
      setProductos(dataDisplay);
      setTotalArrayItems(dataDisplay);
      if (dataDisplay.length / numberItems <= 1) {
        setTotalpages(1);
      } else if (dataDisplay.length / numberItems > 1) {
        setTotalpages(Math.ceil(dataDisplay.length / numberItems));
      }
    };
    fetchData();
    return () => {};
  }, []);

  /**
   * hook declarado para ejecutar la funcion de la barra de busqueda,
   * aqui se filtran los productos de acuerdo a la entrada de la barra de busqueda
   * y se definen cuantas paginas se necesitan para desplegar los componentes
   */
  useEffect(() => {
    for (let index = 0; index < totalarrayItems.length; index++) {
      if (
        search ==
        totalarrayItems[index][1]
          .split("", search.length)
          .toString()
          .replace(/,/g, "")
      ) {
        arraySearch.push(totalarrayItems[index]);
      }
    }
    console.log(dataDisplay);
    if (search) {
      setArrayItems(arraySearch);
      if (arraySearch.length / numberItems <= 1) {
        setTotalpages(1);
      } else if (arraySearch.length / numberItems > 1) {
        setTotalpages(Math.ceil(arraySearch.length / numberItems));
      }
    } else {
      setArrayItems(totalarrayItems);
      if (totalarrayItems.length / numberItems <= 1) {
        setTotalpages(1);
      } else if (totalarrayItems.length / numberItems > 1) {
        setTotalpages(Math.ceil(totalarrayItems.length / numberItems));
      }
    }
  }, [search]);

  return (
    <div className="flex flex-col w-screen justify-start items-center  pr-8 mt-8">
      {/**Renderizacion de form para busqueda de producto de acuerdo a la entrada de la barra de busqueda */}
      <form className="w-3/4 self-center place-self-center">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          {/**Funcion que se ejecuta al cambio de valor, definiendo la variable de Search para su uso en el hook respectivo */}
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buscar..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buscar
          </button>
        </div>
      </form>
      <div className="mb-2 block self-start ml-4 mt-6">
        <Label htmlFor="countries" value="Articulos por pagina" />
        {/** Renderizacion de select para decidir cuantos objetos se despliegan por pagina*/}
        <Select
          id="countries"
          className="w-3/4 self-start m-2"
          onChange={handleSelect}
          required
        >
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="24">24</option>
        </Select>
      </div>
      {/**Componente que se renderiza para el despliegue de productos */}
      {arrayItems ? (
        <DisplayItemsAdmin
          props={{
            page: totalPages < currentPage ? totalPages : currentPage,
            items: arrayItems,
            number: numberItems,
          }}
        ></DisplayItemsAdmin>
      ) : (
        <p>Cargando...</p>
      )}
      <div className="flex sm:justify-center mt-8 mb-10">
        {/**Renderizacion de indicador de pagina y navegacion de pagina dentro del componente */}
        <Pagination
          currentPage={totalPages < currentPage ? totalPages : currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          previousLabel="Anterior"
          nextLabel="Siguiente"
        />
      </div>
    </div>
  );
};
export default AccesoriosAdmin;
