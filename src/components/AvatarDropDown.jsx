import { Avatar, Dropdown, Button, Modal } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useEffect, useState } from "react";
const URL = "http://localhost/BackEnd2/Api.php";

const AvatarDropDown = () => {
  const { admin, nameUser } = useUserContext();
  const [openModal, setOpenModal] = useState(false);
  const [delUser, setDelUser] = useState(false);
  const navigate = useNavigate();

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

  const handleAcceptDelete = () => {
    setOpenModal(false);
    setDelUser(true);
  };
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
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <Avatar
            className="mr-12"
            alt="User settings"
            img="/images/avatarIcon.png"
            rounded
          />
        }
      >
        {console.log(nameUser)}
        <Dropdown.Header className="">
          <span className="block text-sm">{admin == 1 ? "Admin" : "User"}</span>
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
          <Button onClick={handleAcceptDelete}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AvatarDropDown;
