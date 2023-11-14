import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const URL = "http://localhost/BackEnd2/Api.php";
const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(false);
  const [producto, setProducto] = useState(false);
  const [productos, setProductos] = useState(false);
  const [cantidad, setCantidad] = useState(false);
  const [userId, setUserId] = useState(false);
  const [productoCarrito, setProductoCarrito] = useState(false);

  useEffect(() => {
    console.log(userId);
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
        const { Id, Sesion } = await resp.json();
        setUserId(Id);
        if (Sesion) {
          setUser(JSON.parse(localStorage.getItem("Usuario")));
        }
      };
      fetchData();
    }
  }, []);
  return (
    <UserContext.Provider
      value={{
        user,
        producto,
        productos,
        productoCarrito,
        cantidad,
        userId,
        setUserId,
        setProducto,
        setProductos,
        setCantidad,
        setProductoCarrito,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
