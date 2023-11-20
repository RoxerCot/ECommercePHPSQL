import { Avatar, Dropdown } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const URL = "http://localhost/BackEnd2/Interface.php";

const AvatarDropDown = () => {
  const { admin, nameUser } = useUserContext();
  const navigate = useNavigate();
  const handleDelete = async () => {
    var data = new FormData();
    data.append("usuario", JSON.parse(localStorage.getItem("Usuario")));
    data.append("METHOD", "DELETE");
    console.log(data);
    localStorage.setItem("Usuario", null);
    deleteFunction(URL, data);
  };

  const deleteFunction = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => navigate(0));
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
      </Dropdown.Header>
      <Dropdown.Item>{nameUser}</Dropdown.Item>
      {admin == 1 ? null : (
        <>
          <Dropdown.Item onClick={handleCart}>Carrito</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleDelete}>Borrar Usuario</Dropdown.Item>
          <Dropdown.Item onClick={handleChangePswd}>
            Cambiar Contraseña
          </Dropdown.Item>
          <Dropdown.Item onClick={handleChangeUser}>
            Cambiar Nombre
          </Dropdown.Item>
        </>
      )}
    </Dropdown>
  );
};
export default AvatarDropDown;
