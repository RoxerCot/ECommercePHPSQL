import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const URL = "http://localhost/BackEnd2/Api.php";
const UserContext = createContext();

/**
 * 
 * el famoso useContext...
 * Primero explico el hook llamado useState, este hook se declara cuando hay un variable que quieras compartir entre tu script de js y tu renderizacion
 * del componente, o sea el return.
 * 
 *  DATO INFORMATIVO POR SI LAS FLIES !! Estructura del useState   cosnt[variable, SetVariable] = useState(valor default)
 * 
 * En este caso declaramos todos los useState necesarios para compartrilso como props al UserProvider y asi poder usarlos en cualquier
 * otro componente
 * 
 * En segundo lugar explico el hook useEffect, este nos sirve para ejecutar un bloque de codigo condicionado a que se ejecute
 * la primera vez que se renderiza el componente o la primera vez que se renderize el componente y que la variable declarada en la estructura cambie de valor
 * 
 * DATO INFORMATIVO POR SI LAS FLIES !! Estructura del useEffect
 * useEffect(() => {
  //Runs on the first render
  //And any time any DependencyVariable value changes
  }, [DependencyVariable]);

  useEffect(() => {
    //Runs only on the first render
  }, []);
 * 
 * Considerando que en el main.jsx declaramos el UserProvider, entonces este componente se ejecutara cada vez que se actualice la pagina,
 * gracias a esto, usamos el useEffect para ejecutar el codigo de asignacion de usuario
 * una vez que en login se valida el ingreso agrega un usuario a la memoria local del host, se actualiza la pagina y en el useEffect se valida
 * la existencia de un usuario en la memoria y a partir de ahi comparte toda la informacion del usuario en las otras paginas
 * 
 * 
 *
 * 
 */

export default function UserContextProvider({ children }) {
  /**
   * Declaracion de hook useState para su utilizacion en cada modulo de ruta
   */
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

  /**Hook para validar la existencia del usuario y su sesion activa
   * cada vez que se renderiza la App
   */
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("Usuario")));
    if (JSON.parse(localStorage.getItem("Usuario"))) {
      /**Funcion asincrona para realizar peticion al back end */
      const fetchData = async () => {
        /**Construccion del formdata para realizar peticion con el metodo POST por medio de http */
        var data = new FormData();
        data.append("usuario", JSON.parse(localStorage.getItem("Usuario")));
        data.append("METHOD", "SESSION");
        console.log(data, URL);
        /** funcion fetch  para realizar la peticion  */
        const resp = await fetch(URL, {
          method: "POST",
          body: data,
        });
        /**Desesctructuracion de un objeto JSON */
        const { Id, Sesion, Admin, Usuario } = await resp.json();
        console.log(Sesion);
        /**Set de los hook useState para su uso en el render */
        setAdmin(Admin);
        setUserId(Id);
        setNameUser(Usuario);
        /**Validacion de existencia de sesion del usuario */
        if (Sesion == 1) {
          setUser(JSON.parse(localStorage.getItem("Usuario")));
        } else {
          setUser(null);
        }
      };
      /**se ejecuta la funcion */
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
