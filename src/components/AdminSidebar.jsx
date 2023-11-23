import { Button, Navbar, Sidebar } from "flowbite-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
const URL = "http://localhost/BackEnd2/Api.php";

const AdminNavbar = () => {
  const { setAdmin } = useUserContext();
  const customTheme = {
    img: "mr-3 h-12",
  };
  const navigate = useNavigate();
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

  const logOut = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => navigate(0));
  };
  return (
    <div className="h-screen sticky top-0">
      <Sidebar aria-label="Sidebar with logo branding example">
        <Sidebar.Logo
          theme={customTheme}
          href="/"
          img="/images/CIERDCARS_LOGO.png"
          imgAlt="Ciber D Cars logo"
        >
          Ciber D Cars
        </Sidebar.Logo>
        <Sidebar.Items>
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
              to="/admin/nuevoitem"
              className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-70
            active:bg-gray-100 active:dark:bg-gray-700"
            >
              Nuevo Item
            </NavLink>
            <NavLink
              to="/admin/nuevousuario"
              className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-70
            active:bg-gray-100 active:dark:bg-gray-700"
            >
              Nuevo Usuario
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
            <div className="flex items-center justify-center">
              <Button onClick={handleLogout}>Log Out</Button>
            </div>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};
export default AdminNavbar;
