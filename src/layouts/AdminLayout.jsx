import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import AdminNavbar from "../components/AdminSidebar";

/**
 *  En  la parte de arriba tenemos los componentes, librerias o funciones importadas de otros archivos.
 *
 *  A continuacion se renderiza el componente AdminLayout.
 *  como necesitamos la identificacion del admin mandamos a llamar a la propiedad user el hook  de useUserContext,
 *  si quieres ver como se genera user, refierete a Login o Register y UserContext.jsx
 *
 *  En el return, se pregunta por la existencia del admin para poder acceder a todo los chidlren de AdminLayout, de otra manera
 *  con el componente <Navigate> te manda de regreso al inicio.
 *
 *  DATO INFORMATIVO POR SI LAS FLIES !!ESTRUCTURA DEL OPERADOR CONDICIONAL TERNARIO!!  a == 1 ? (verdadero):(falso);
 *
 *  <AdminNavbar>: es el componente que se creo para hacer el navbar del admin, entra al archivo para conocer como se define
 *  <Outlet>: se le llama asi al componente dinamico que dependiendo de la ruta es el children de la ruta que despliega.
 *
 *  DATO INFORMATIVO POR SI LAS FLIES  Algunos componentes son definidos por Flowbite React, mejor entra a https://www.flowbite-react.com/ si quieres saber mas
 *
 *
 *  Hay cosas como la importacion de librerias, los hooks explicados, estructuras y propiedades de componentes que ya nos e iran explicando
 *  pues el punto es que sigas un orden para leer este codigo y con lo explicado puedas ir entendiendo lo siguiente, si tienes duda mandame mensaje
 *
 *
 *
 */
const AdminLayout = () => {
  const { admin } = useUserContext();
  return admin ? (
    <div className="flex flex-row space-x-4 rounded-none dark:bg-neutral-950">
      <AdminNavbar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default AdminLayout;
