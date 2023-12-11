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
import AdminLayout from "../layouts/AdminLayout";
import InicioAdmin from "../pages/InicioAdmin";
import CelularesAdmin from "../pages/CelularesAdmin";
import TabletsAdmin from "../pages/TabletsAdmin";
import AccesoriosAdmin from "../pages/AccesoriosAdmin";
import MangasAdmin from "../pages/MangasAdmin";
import ItemAdmin from "../pages/ItemAdmin";
import NuevoItem from "../pages/NuevoItem";
import NuevoUsuario from "../pages/NuevoUsuario";
import UsuarioAdmin from "../pages/UsuarioAdmin";
import CarritosAdmin from "../pages/CarritosAdmin";
import CarritoAdmin from "../pages/CarritoAdmin";
import CambiarUsuario from "../pages/CambiarUsuario";
import CambiarPswd from "../pages/CambiarPswd";
import VentasAdmin from "../pages/VentasAdmin";
import VentaAdmin from "../pages/VentaAdmin";
import NuevaCategoria from "../pages/NuevaCategoria";
import OtrosAdmin from "../pages/OtrosAdmin";
import Otros from "../pages/Otros";

/**
 * En este archivo se declara el prop router que se le pasa a RouterProvider en main.jsx
 * La aplicacion web esta definida por capas para poder hacer mas facil la verificacion de accsesos, actualizacion por modulos y poder tener
 * ciertas propiedades compartidas
 *
 * <RootLayout>: Esta es la capa raiz, no contiene nada, velo como el lienzo en blanco en donde se empieza a pintar todo, asi mismo es lo primero que se crea aqui
 * dentro del path raiz '/' del puerto en donde esta desplegada la aplicacion.
 * <NotFound> Este elemento es lo que va a aparecer en caso de que un usuario entre a un path no definido dentro de tus rutas
 * <Login> <Reigstro> : estos componentes al no requerir credenciales para accesar se mantienen dentro del layout root, entra a sus archivos para ver sus funciones.
 * <AdminLayout> <PrivateLayout>: son las capas que se construyen sobre root, cada una requiere cierto tipo de credenciales para accesar.
 *  debajo de estas capas estan declaradas todas las paginas que se renderizan dentro de estas capas.
 *  cada una de estas paginas se renderiza dentro del contorno definido por las barras de navegacion, entra a las capas para ver como se definen las barras de navegacion
 * y luego entra a cada pagina para que veas la funcion de cada una, cada pagina puede tener uno o mas componentes, te recomiendo que entres a los componentes
 * de la carpeta components, para que veas sus funciones, una vez que hayas visto primero las capas mencionadas y luego las paginas.
 *
 *
 * Por ultimo como podras ver cada elemento o ruta se define como un objeto, cada objeto tiene varias propiedades
 * en este archivo usamos path,element,errorElement, index y children.
 *
 * path: la ruta definida para el elemento
 * element: componente a renderizar en esa ruta
 * errorElement: componente a renderizar cuando la ruta sea incorrecta o inexistente, en este caso usamos una capa de error element para que se comparta en todos sus hijos despues de Root
 * index: se pone en true cuando se quiere especificar el objeto que se va a renderizar por default dentro de los children, el valor si no se declrara es false
 * children: objetos hijos de la ruta
 */

export const router = createBrowserRouter(
  /**Array de objetos, cada objeto almacena las propiedades de cada ruta */
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        {
          /** Verificacion de ruta no existente */
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
                  path: "/productos/otros",
                  element: <Otros />,
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
                {
                  path: "/productos/cambiarusuario",
                  element: <CambiarUsuario />,
                },
                {
                  path: "/productos/cambiarpswd",
                  element: <CambiarPswd />,
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
                  path: "/admin/otros",
                  element: <OtrosAdmin />,
                },
                {
                  path: "/admin/item",
                  element: <ItemAdmin />,
                },
                {
                  path: "/admin/nuevoitem",
                  element: <NuevoItem />,
                },
                {
                  path: "/admin/nuevousuario",
                  element: <NuevoUsuario />,
                },
                {
                  path: "/admin/nuevacategoria",
                  element: <NuevaCategoria />,
                },
                {
                  path: "/admin/usuario",
                  element: <UsuarioAdmin />,
                },
                {
                  path: "/admin/carritos",
                  element: <CarritosAdmin />,
                },
                {
                  path: "/admin/carrito",
                  element: <CarritoAdmin />,
                },
                {
                  path: "/admin/ventas",
                  element: <VentasAdmin />,
                },
                {
                  path: "/admin/venta",
                  element: <VentaAdmin />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]
);
