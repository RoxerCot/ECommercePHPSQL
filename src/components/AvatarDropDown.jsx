import { Avatar, Dropdown } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost/BackEnd2/Interface.php";

const AvatarDropDown = () => {
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
    console.log(resp);
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
      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleDelete}>Borrar Usuario</Dropdown.Item>
    </Dropdown>
  );
};
export default AvatarDropDown;
