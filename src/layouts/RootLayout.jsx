import { Outlet } from "react-router-dom";

const RootLayout = () => {
  /** Outlet representa el componente que se renderiza dentro en la direccion dentro de la ruta asignada a RootLayout */
  return <Outlet />;
};

export default RootLayout;
