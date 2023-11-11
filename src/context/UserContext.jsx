import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const URL = "http://localhost/BackEnd2/Interface.php";
const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(false);
  const [dataJSON, setDataJSON] = useState(false);
  const [producto, setProducto] = useState(false);
  const [productos, setProductos] = useState(false);

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("Usuario")));
    if (JSON.parse(localStorage.getItem("Usuario"))) {
      const fetchData = async () => {
        var data = new FormData();
        data.append("usuario", JSON.parse(localStorage.getItem("Usuario")));
        data.append("METHOD", "SESSION");
        console.log(data, URL);
        const resp = await fetch(URL, {
          method: "POST",
          body: data,
        });
        const { Sesion } = await resp.json();
        setDataJSON(Sesion);
        console.log(Sesion);
        if (Sesion) {
          setUser(JSON.parse(localStorage.getItem("Usuario")));
        }
      };
      fetchData();
    }
  }, []);
  return (
    <UserContext.Provider
      value={{ user, producto, setProducto, productos, setProductos }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
