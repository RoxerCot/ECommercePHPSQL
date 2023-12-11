import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import ComponentNavbar from "../components/UserNavbar";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

/**
 *  En  la parte de arriba tenemos los componentes, librerias o funciones importadas de otros archivos.
 *
 *  A continuacion se renderiza el componente PrivateLayout.
 *  como necesitamos la identificacion del usuario mandamos a llamar a la propiedad user el hook  de useUserContext,
 *  si quieres ver como se genera user, refierete a Login o Register y UserContext.jsx
 *
 *  El Custom Theme es un objeto con las propiedades de tailwind CSS para que se le pasan al componente de flowbite react para
 *  poder personalizarlo, tambien se puede hacer directamente desde el className del componente perooo.. dependiendo si es una cosa
 *  o varias cosas las que quieras personalizar, es donde decides cual de las dos usar.
 *
 *  En el return, se pregunta por la existencia del usuario para poder acceder a todo los chidlren de privatelayout, de otra manera
 *  con el componente <Navigate> te manda de regreso al inicio.
 *
 *  DATO INFORMATIVO POR SI LAS FLIES !!ESTRUCTURA DEL OPERADOR CONDICIONAL TERNARIO!!  a == 1 ? (verdadero):(falso);
 *
 *  <ComponentNavbar>: es el componente que se creo para hacer el navbar del usuario, entra al archivo para conocer como se define
 *  <Outlet>: se le llama asi al componente dinamico que dependiendo de la ruta es el children de la ruta que despliega.
 *  <Footer>: pues el pie de pagina
 *
 *  DATO INFORMATIVO POR SI LAS FLIES  Algunos componentes son definidos por Flowbite React, mejor entra a https://www.flowbite-react.com/ si quieres saber mas
 *
 *
 *
 *
 */
const PrivateLayout = () => {
  /**Declaracion de variable compartida por userContext */
  const { user } = useUserContext();
  /**Tema personalizado para la estetica de cualquier componente de flowbite */
  const customTheme = {
    root: {
      base: "w-full h-full rounded-none bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between ",
      container: "w-full p-6 ",
      bgDark: "bg-gray-800",
    },
  };
  /**Rebder condicionado a la existencia de usuario creado en userContext */
  return user ? (
    <div className="h-screen flex flex-col">
      {/**Renderizacion de componente Navbar  */}
      <ComponentNavbar />
      <Outlet />
      <div className="grow">
        {/**Renderizacion del footer*/}
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
