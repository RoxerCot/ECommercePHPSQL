import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
const URL = "http://localhost/BackEnd2/Api.php";

const DisplayItems = ({ props }) => {
  const { page } = props;
  const [arrayItems, setArrayItems] = useState(false);
  var dataDisplay = [];

  useEffect(() => {
    const fetchData = async () => {
      var data = new FormData();
      data.append("METHOD", "GETPHONES");
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      });
      const resp_json = await resp.json();
      setArrayItems(resp_json);
    };
    fetchData();

    return () => {};
  }, [page]);
  function ObjectToArray(object, array) {
    for (var i in object) {
      array.push(Object.values(object[i]));
    }
    console.log(array);
    return array;
  }
  return (
    <div className="flex flex-col mt-8 gap-y-6  ml-12 mr-12">
      <div className="flex flex-row justify-center w-fit gap-x-8 h-fit">
        {ObjectToArray(arrayItems, dataDisplay).map((arrayItem) => (
          <Card
            key={arrayItem[0]}
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
          >
            <img src={arrayItem[3]} className="h-32 w-5/6 " />
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <p>{arrayItem[2]}</p>
              </h5>
            </a>
            <a
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              href="#"
            >
              <p>Agragar</p>
            </a>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${Intl.NumberFormat().format(arrayItem[4])}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default DisplayItems;
