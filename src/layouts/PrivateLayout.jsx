import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import ComponentNavbar from "../components/UserNavbar";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
const PrivateLayout = () => {
  const { user } = useUserContext();
  const customTheme = {
    root: {
      base: "w-full h-full rounded-none bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between ",
      container: "w-full p-6 ",
      bgDark: "bg-gray-800",
    },
  };
  return user ? (
    <div className="h-screen flex flex-col">
      <ComponentNavbar />
      <Outlet />
      <div className="grow">
        <Footer container theme={customTheme}>
          <div className="w-full ">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div>
                <Footer.Brand
                  href="/"
                  src="/images/CIERDCARS_LOGO.png"
                  alt="Ciber D Cars Logo"
                  name="Ciber D Cars"
                />
              </div>
              <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                  <Footer.Title title="Sobre Nosotros" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#">Mision</Footer.Link>
                    <Footer.Link href="#">Vision</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Siguenos" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#">Facebook</Footer.Link>
                    <Footer.Link href="#">Instaram</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Legal" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#">Politicas de Privacidad</Footer.Link>
                    <Footer.Link href="#">
                      Terminos &amp; Condiciones
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright href="#" by="Ciber D Cars™" year={2023} />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsInstagram} />
              </div>
            </div>
          </div>
        </Footer>
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateLayout;
