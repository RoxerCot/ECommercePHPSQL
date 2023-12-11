/**Importacion de librerias para su uso en el componente */
import { Button, DarkThemeToggle, Navbar } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import AvatarDropDown from "./AvatarDropDown";
/**Declaracion de constante que contiene la direccion a la backend */
const URL = "http://localhost/BackEnd2/Api.php";

const ComponentNavbar = () => {
  /**Declaracion de hook useNavigate, para poder ocupar la funcion navigate
   * que se ocupa para navegar entre las rutas declaradas en router.jsx
   */
  const navigate = useNavigate();
  /**Funcion asincrona para el manejo de cierre de session y peticion al backend */
  const handleLogout = async () => {
    try {
      var data = new FormData();
      data.append("usuario", JSON.parse(localStorage.getItem("Usuario")));
      data.append("METHOD", "LOGOUT");
      localStorage.setItem("Usuario", null);
      logOut(URL, data);
    } catch (error) {
      console.log(error);
    }
  };
  /**Funcion para realizar peticion de http con metodo post al backend */

  const logOut = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => navigate(0));
  };
  return (
    <div className="sticky top-0 z-50">
      {/** Rennderzacion de barra de navegacion */}
      <Navbar className=" w-full top-0 " fluid>
        <Navbar.Brand href="/">
          {/** Rennderzacion de logo de barra de navegacion*/}
          <img
            alt="Logo"
            className="mr-3 h-12 object-fill"
            src="/images/CIERDCARS_LOGO.png"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Ciber D Cars
          </span>
        </Navbar.Brand>
        {/** Renderizacion de alternacion para de cambio a Darktheme*/}
        <DarkThemeToggle />
        <div className="flex md:order-2">
          {/** Renderizacion de menu desplegable para el usuario*/}
          <AvatarDropDown />
          <Button onClick={handleLogout}>Cerrar Sesion</Button>
        </div>
        <Navbar.Toggle />
        {/** Renderizacion opciones de navegacion de a barra*/}
        <Navbar.Collapse>
          <NavLink active="true" to="/">
            <p className="dark:text-gray-200 font-bold">Inicio</p>
          </NavLink>
          <NavLink to="/productos/celulares">
            <p className="dark:text-gray-200 font-bold">Celulares</p>
          </NavLink>
          <NavLink to="/productos/tablets">
            <p className="dark:text-gray-200 font-bold">Tablets</p>
          </NavLink>
          <NavLink to="/productos/accesorios">
            <p className="dark:text-gray-200 font-bold">Accesorios</p>
          </NavLink>
          <NavLink to="/productos/mangas">
            <p className="dark:text-gray-200 font-bold">Mangas</p>
          </NavLink>
          <NavLink to="/productos/otros">
            <p className="dark:text-gray-200 font-bold">Otros</p>
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default ComponentNavbar;
