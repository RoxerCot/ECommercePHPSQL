import { useRouteError, NavLink } from "react-router-dom";

const NotFound = () => {
  /**Se declara el hook de Router correspondiente para el manejo de error de ruta inexistente */
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      {/** Renderizacion de mensajer de error*/}
      <p>{error.statusText || error.message}</p>
      {/**Renderizacion de componente Navlink que se usa para generar un hipervinculo de navegacion dentro de router */}
      <NavLink to="/">Volver al inicio</NavLink>
    </div>
  );
};
export default NotFound;
