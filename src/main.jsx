/**D */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import UserContextProvider from "./context/UserContext";
import { Flowbite } from "flowbite-react";
/**
 * Aqui se dfine el componente root que se menciona en index.html
 * El componente root se define en 4 partes, empezando la explicacion de afuera hacia adentro,
 * <Flowbite>  : se encierra toda la aplicacion dentro de este componente para poder aporevechar las funciones
 * de personalizacion de componente, Dark Theme, etc.
 * <UserContextProvider> : en la capa siguiente tenemos este componente que se define en /context/UserContext.jsx
 * dicho componente se renderiza con todos los props que le pases en el archivo mencionado, haciendo que esta informacion
 * se pueda compartir, en cualquier parte o componente del proyecto, que se declare.
 * <React.StrictMode> : configuracion por default de Vite, no remover, este componente la doble renderizacion para comprobar que todo este en orden
 * <RouterProvider>: Este componente hace posible la renderizacion de proyecto por rutas, facilitando la navegacion entre componentes,
 * dirijite a React Router para mas informacion, continua a router.jsx para obtener mas informacion acerca del proyecto.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  /** Renderizacion de applicacion React con complemento de Flowbite e
   * integracion de router con context porivder
   */
  <Flowbite>
    <UserContextProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </UserContextProvider>
  </Flowbite>
);
