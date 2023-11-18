import { Button, Label } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useRef } from "react";
const URL = "http://localhost/BackEnd2/Api.php";

const DisplayUser = ({ props }) => {
  const { user } = props;
  const navigate = useNavigate();
  const handleToggleUserAdmin = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "TOGGLEUSERADMIN");
      data.append("userId", user[0]);
      data.append("admin", user[4]);
      BackExcecute(URL, data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "DELUSER");
      data.append("userId", user[0]);
      BackExcecute(URL, data);
    } catch (error) {
      console.log(error);
    }
  };

  const BackExcecute = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => navigate(0));
  };
  return (
    <div className="flex flex-col mt-4">
      <div className="flex justify-start items-start">
        <div className="w-fit space-y-4">
          <h1 className="font-bold ">ID: {user[0]}</h1>
          <h1 className="font-bold ">Usuario: {user[1]}</h1>
          <h1 className="font-bold ">Sesion: {user[3]}</h1>
          <h1 className="font-bold ">Admin: {user[4]}</h1>
          {user[4] == 1 ? (
            <Button onClick={handleToggleUserAdmin}>Hacer User</Button>
          ) : (
            <Button onClick={handleToggleUserAdmin}>Hacer Admin</Button>
          )}
          <Button onClick={handleDeleteUser} color="failure">
            Borrar Usuario
          </Button>
        </div>
      </div>
    </div>
  );
};
export default DisplayUser;
