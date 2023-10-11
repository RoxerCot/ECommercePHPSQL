import { Button, Navbar } from "flowbite-react";
import { logout } from "../config/firebase";
import { NavLink } from "react-router-dom";

const ComponentNavbar = () => {
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
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
          <Button onClick={handleLogout}>Log Out</Button>
          <Navbar.Toggle />
        </div>
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
    </>
  );
};
export default ComponentNavbar;
