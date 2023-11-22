import { Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useRef, useState } from "react";
import { Input } from "postcss";
const URL = "http://localhost/BackEnd2/Api.php";

const DisplayItem = ({ props }) => {
  const { userId } = useUserContext();
  const [qtyValue, setQtyValue] = useState(0);
  const { item } = props;
  const refCantidad = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "ADDCART");
      data.append("userId", userId);
      data.append("cantidad", qtyValue);
      data.append("item", item[0]);
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

  const handleInputChange = (e) => {
    setQtyValue(parseInt(e.target.value));
  };
  return (
    <div className="flex-row flex space-x-10 mt-12">
      <div className="basis-1/2">
        <div className="flex flex-col justify-start items-center basis-1/2 space-y-4 ml-32">
          <img src={item[3]} className="h-full lg:w-auto w-auto"></img>
        </div>
      </div>
      <div className="basis-1/4">
        <div className="">
          <p className="font-sans text-3xl font-semibold mb-8">
            {item[7] == "Manga" ? item[1] : item[2]}
          </p>
          <p className="text-2xl font-semibold text-zinc-600 mb-6">
            $ {new Intl.NumberFormat().format(item[4])}
          </p>
          <p className="text-sm font-semibold text-zinc-600">Caracteristicas</p>
          <ul className="m-8">
            <li className="ml-10 no-underline">&#x2022; Marca {item[6]}</li>
            <Link to="/productos/celulares">
              <li className="ml-10">&#x2022; Categoria {item[7]}</li>
            </Link>
            <li className="ml-10">&#x2022; Modelo {item[8]}</li>
            <li className="ml-10">&#x2022; Peso {item[9]}g</li>
          </ul>

          <p className="text-md font-semibold text-zinc-600 mb-2">
            Stock: {item[5]}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col space-y-4">
          <div className="flex flex-row justify-center items-center space-x-1">
            <button
              onClick={() => setQtyValue(qtyValue - 1)}
              className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="number"
              value={qtyValue}
              onChange={handleInputChange}
              required
            ></input>
            <button
              onClick={() => setQtyValue(qtyValue + 1)}
              className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
          <Button type="submit">Comprar</Button>
        </form>
      </div>
    </div>
  );
};
export default DisplayItem;
