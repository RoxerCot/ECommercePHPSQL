/**Importacion de librerias para su uso en el componente */
import { Avatar, Dropdown, Button, Modal } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useEffect, useState } from "react";
/**Declaracion de constante que contiene la direccion a la backend */
const URL = "http://localhost/BackEnd2/Api.php";

const AvatarDropDown = () => {
  /**Declaracion de funcion para definir  variable compartida por userContext */
  const { admin, nameUser } = useUserContext();
  /**Declaracion de variable compartida con el render de este mismo componente  */
  const [openModal, setOpenModal] = useState(false);
  const [delUser, setDelUser] = useState(false);
  /**Declaracion de hook useNavigate, para poder ocupar la funcion navigate
   * que se ocupa para navegar entre las rutas declaradas en router.jsx
   */
  const navigate = useNavigate();

  /**
   * En este Use Effect se borra el usuario
   */
  useEffect(() => {
    const fetchData = async () => {
      var data = new FormData();
      data.append("usuario", JSON.parse(localStorage.getItem("Usuario")));
      data.append("METHOD", "USERDELUSER");
      localStorage.setItem("Usuario", null);
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      });
    };
    if (delUser) {
      fetchData();
      navigate(0);
    }
  }, [delUser]);
  /**Funcion referenciada que activa la ejecucion del useEffect */
  const handleAcceptDelete = () => {
    setOpenModal(false);
    setDelUser(true);
  };
  /**Funciones referenciadas para navegar a la opcion correspondiente */
  const handleCart = () => {
    navigate("/productos/carrito");
  };
  const handleChangeUser = () => {
    navigate("/productos/cambiarusuario");
  };
  const handleChangePswd = () => {
    navigate("/productos/cambiarpswd");
  };
  return (
    <>
    {/** Renderizacion de menu desplegable*/}
      <Dropdown
        arrowIcon={false}
        inline
        label={
          {/** Renderizacion del Avatar generico*/}
          <Avatar
            className="mr-12"
            alt="User settings"
            img="/images/avatarIcon.png"
            rounded
          />
        }
      >
    {/** Renderizacion de items del menu desplegable*/}
        <Dropdown.Header className="">
          <span className="block text-sm">
            {admin == 1 ? "Admin" : "Usuario"}
          </span>
          <span className="block text-sm">{nameUser}</span>
        </Dropdown.Header>
        {admin == 1 ? null : (
          <>
            <Dropdown.Item onClick={handleCart}>Carrito</Dropdown.Item>
            <Dropdown.Divider />
            {/* onClick={handleDelete} */}
            <Dropdown.Item onClick={() => setOpenModal(true)}>
              Borrar Usuario
            </Dropdown.Item>

            <Dropdown.Item onClick={handleChangePswd}>
              Cambiar Contraseña
            </Dropdown.Item>
            <Dropdown.Item onClick={handleChangeUser}>
              Cambiar Nombre
            </Dropdown.Item>
          </>
        )}
      </Dropdown>
    {/** Renderizacion de ventana emergente*/}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>ATENCION</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Estas seguro de que quieres borrar esta cuenta?
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAcceptDelete}>Acepto</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AvatarDropDown;
