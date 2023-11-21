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
  const [totalCompra, setTotalCompra] = useState(0);
  const [admin, setAdmin] = useState(0);
  const [usersList, setUsersList] = useState(0);
  const [nameUser, setNameUser] = useState(0);
  const [pickedUser, setPickedUser] = useState(0);
  const [carritos, setCarritos] = useState(0);
  const [carrito, setCarrito] = useState(0);
  const [pickedcarrito, setPickedCarrito] = useState(0);
  const [sale, setSale] = useState();
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
        const { Id, Sesion, Admin, Usuario } = await resp.json();
        console.log(Admin);
        setAdmin(Admin);
        setUserId(Id);
        setNameUser(Usuario);
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
        totalCompra,
        admin,
        nameUser,
        usersList,
        pickedUser,
        carritos,
        carrito,
        pickedcarrito,
        sale,
        setSale,
        setPickedCarrito,
        setCarrito,
        setCarritos,
        setPickedUser,
        setUsersList,
        setNameUser,
        setAdmin,
        setTotalCompra,
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
