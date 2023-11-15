import { Button, Navbar } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import AvatarDropDown from "./AvatarDropDown";
const URL = "http://localhost/BackEnd2/Interface.php";

const AdminNavbar = () => {
  const navigate = useNavigate();
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

  const logOut = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => navigate(0));
  };
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img alt="Logo" className="mr-3 h-6 sm:h-9" src="" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            E-Commerce
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <AvatarDropDown />
          <Button onClick={handleLogout}>Log Out</Button>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavLink active="true" to="/admin">
            <p>Usuarios</p>
          </NavLink>
          <NavLink to="/admin/celulares">Celulares</NavLink>
          <NavLink to="/productos/tablets">Tablets</NavLink>
          <NavLink to="/productos/accesorios">Accesorios</NavLink>
          <NavLink to="/productos/mangas">Mangas</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default AdminNavbar;
