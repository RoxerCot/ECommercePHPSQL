import { Pagination, Label, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import DisplayItemsAdmin from "../components/DisplayItemsAdmin";
const URL = "http://localhost/BackEnd2/Api.php";

const MangasAdmin = () => {
  const { setProductos } = useUserContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [arrayItems, setArrayItems] = useState(false);
  const [numberItems, setNumberItems] = useState(4);
  const [totalPages, setTotalpages] = useState(0);
  var dataDisplay = [];
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
    navigate("/admin/mangas");
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
      data.append("METHOD", "GETMANGA");
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      });
      const resp_json = await resp.json();
      dataDisplay = ObjectToArray(resp_json, dataDisplay);
      setArrayItems(ObjectToArray(resp_json, arrayItems));
      setProductos(dataDisplay);
      if (dataDisplay.length / numberItems <= 1) {
        setTotalpages(1);
      } else if (dataDisplay.length / numberItems > 1) {
        setTotalpages(Math.ceil(dataDisplay.length / numberItems));
      }
    };
    fetchData();
    return () => {};
  }, []);

  return (
    <div className="">
      <div className="">
        <div className="">
          <Label htmlFor="countries" value="Items por pagina" />
        </div>
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
      {arrayItems ? (
        <DisplayItemsAdmin
          props={{
            page: totalPages < currentPage ? totalPages : currentPage,
            items: arrayItems,
            number: numberItems,
          }}
        ></DisplayItemsAdmin>
      ) : (
        <p>Loading...</p>
      )}
      <div className="flex sm:justify-center mt-8 mb-10">
        <Pagination
          currentPage={totalPages < currentPage ? totalPages : currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};
export default MangasAdmin;
