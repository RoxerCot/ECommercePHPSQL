import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Inicio from "../pages/Inicio";
import Celulares from "../pages/Celulares";
import Accesorios from "../pages/Accesorios";
import Tablets from "../pages/Tablets";
import Mangas from "../pages/Mangas";
import PrivateLayout from "../layouts/PrivateLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Login />,
            active: "true",
          },
          {
            path: "/registro",
            element: <Registro />,
          },
          {
            path: "/productos",
            element: <PrivateLayout />,
            children: [
              {
                index: true,
                element: <Inicio />,
                active: "true",
              },
              {
                path: "/productos/celulares",
                element: <Celulares />,
              },
              {
                path: "/productos/tablets",
                element: <Tablets />,
              },
              {
                path: "/productos/accesorios",
                element: <Accesorios />,
              },
              {
                path: "/productos/mangas",
                element: <Mangas />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
