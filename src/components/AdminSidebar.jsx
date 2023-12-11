/**Importacion de librerias para su uso en el componente */
import { Button, DarkThemeToggle, Sidebar } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
/**Declaracion de constante que contiene la direccion a la backend */
const URL = "http://localhost/BackEnd2/Api.php";

const AdminNavbar = () => {
  /**Declaracion de funcion para definir  variable compartida por userContext */
  const { setAdmin } = useUserContext();
  /**Se crea tema personalizado para la imagen */
  const customTheme = {
    img: "mr-3 h-12",
  };
  /**Se crea tema personalizado para la barra de navegacion lateral */
  const customTheme2 = {
    root: {
      inner:
        "h-full overflow-y-auto overflow-x-hidden rounded-none bg-gray-50 py-8 px-3 dark:bg-gray-800",
    },
  };
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
      setAdmin(0);
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
    <div className="h-screen sticky top-0 rounded-none">
      {/** Rennderzacion de barra de navegacion lateral*/}
      <Sidebar
        aria-label="Sidebar with logo branding example"
        theme={customTheme2}
      >
        {/** Rennderzacion de logo de barra de navegacion lateral*/}
        <Sidebar.Logo
          theme={customTheme}
          href="/"
          img="/images/CIERDCARS_LOGO.png"
          imgAlt="Ciber D Cars logo"
        >
          Ciber D Cars
        </Sidebar.Logo>
        <div className="flex items-center justify-center mb-2 mt-2">
          {/**  Renderizacion de alternacion para de cambio a Darktheme*/}
          <DarkThemeToggle />
        </div>
        {/** Renderizacion opciones de navegacion de a barra lateral*/}
        <Sidebar.Items className="rounded-none">
          <Sidebar.ItemGroup>
            <NavLink
              to="/admin"
              className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-70
            active:bg-gray-100 active:dark:bg-gray-700"
            >
              Usuarios
            </NavLink>
            <NavLink
              to="/admin/celulares"
              className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-70
            active:bg-gray-100 active:dark:bg-gray-700"
            >
              Celulares
            </NavLink>
            <NavLink
              to="/admin/tablets"
              className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-70
            active:bg-gray-100 active:dark:bg-gray-700"
            >
              Tablets
            </NavLink>
            <NavLink
              to="/admin/accesorios"
              className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-70
            active:bg-gray-100 active:dark:bg-gray-700"
            >
              Accesorios
            </NavLink>
            <NavLink
              to="/admin/mangas"
              className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-70
            active:bg-gray-100 active:dark:bg-gray-700"
            >
              Mangas
            </NavLink>
            <NavLink
              to="/admin/otros"
              className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-70
            active:bg-gray-100 active:dark:bg-gray-700"
            >
              Otros
            </NavLink>
            <NavLink
              to="/admin/nuevoitem"
              className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-70
            active:bg-gray-100 active:dark:bg-gray-700"
            >
              Nuevo Articulo
            </NavLink>
            <NavLink
              to="/admin/nuevousuario"
              className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-70
            active:bg-gray-100 active:dark:bg-gray-700"
            >
              Nuevo Usuario
            </NavLink>
            <NavLink
              to="/admin/nuevacategoria"
              className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-70
            active:bg-gray-100 active:dark:bg-gray-700"
            >
              Nueva Categoria
            </NavLink>
            <NavLink
              to="/admin/carritos"
              className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-70
            active:bg-gray-100 active:dark:bg-gray-700"
            >
              Carritos
            </NavLink>
            <NavLink
              to="/admin/ventas"
              className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-70
            active:bg-gray-100 active:dark:bg-gray-700"
            >
              Ventas
            </NavLink>
            <div className="flex items-center justify-center mt-4">
              {/** Renderizacion de boton para el cierre de sesion  */}
              <Button onClick={handleLogout}>Cerrar Sesion</Button>
            </div>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};
export default AdminNavbar;
