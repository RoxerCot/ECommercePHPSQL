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
import Item from "../pages/Item";
import Carrito from "../pages/Carrito";
import Compra from "../pages/Compra";
import Admin from "../pages/Admin";
import AdminLayout from "../layouts/AdminLayout";
import InicioAdmin from "../pages/InicioAdmin";
import CelularesAdmin from "../pages/CelularesAdmin";
import TabletsAdmin from "../pages/TabletsAdmin";
import AccesoriosAdmin from "../pages/AccesoriosAdmin";
import MangasAdmin from "../pages/MangasAdmin";
import ItemAdmin from "../pages/ItemAdmin";
import NuevoItem from "../pages/NuevoItem";

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
              {
                path: "/productos/item",
                element: <Item />,
              },
              {
                path: "/productos/carrito",
                element: <Carrito />,
              },
              {
                path: "/productos/compra",
                element: <Compra />,
              },
            ],
          },
          {
            path: "/admin",
            element: <AdminLayout />,
            children: [
              {
                index: true,
                element: <InicioAdmin />,
                active: "true",
              },
              {
                path: "/admin/celulares",
                element: <CelularesAdmin />,
              },
              {
                path: "/admin/tablets",
                element: <TabletsAdmin />,
              },
              {
                path: "/admin/accesorios",
                element: <AccesoriosAdmin />,
              },
              {
                path: "/admin/mangas",
                element: <MangasAdmin />,
              },
              {
                path: "/admin/item",
                element: <ItemAdmin />,
              },
              {
                path: "/admin/nuevoitem",
                element: <NuevoItem />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
