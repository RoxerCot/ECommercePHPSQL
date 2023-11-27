import { Button, DarkThemeToggle, Navbar } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import AvatarDropDown from "./AvatarDropDown";
const URL = "http://localhost/BackEnd2/Api.php";

const ComponentNavbar = () => {
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
    <div className="sticky top-0 z-50">
      <Navbar className=" w-full top-0 " fluid rounded>
        <Navbar.Brand href="/">
          <img
            alt="Logo"
            className="mr-3 h-12 object-fill"
            src="/images/CIERDCARS_LOGO.png"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Ciber D Cars
          </span>
        </Navbar.Brand>
        <DarkThemeToggle />
        <div className="flex md:order-2">
          <AvatarDropDown />
          <Button onClick={handleLogout}>Cerrar Sesion</Button>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavLink active="true" to="/">
            <p>Inicio</p>
          </NavLink>
          <NavLink to="/productos/celulares">Celulares</NavLink>
          <NavLink to="/productos/tablets">Tablets</NavLink>
          <NavLink to="/productos/accesorios">Accesorios</NavLink>
          <NavLink to="/productos/mangas">Mangas</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default ComponentNavbar;
