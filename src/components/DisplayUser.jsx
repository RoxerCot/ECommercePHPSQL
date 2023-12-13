import { Button, Label, Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
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
    <div className="flex flex-col w-screen ">
      <div className="flex justify-start items-start pt-20 pl-2">
        <Button
          onClick={() => {
            navigate("/admin");
          }}
        >
          <FaArrowAltCircleLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className="basis-1/4 pt-12 justify-center items-center flex">
        <Label className="text-2xl font-bold">Usuario</Label>
      </div>
      <div className=" justify-center items-center flex">
        <Table>
          <Table.Head>
            <Table.HeadCell>ID</Table.HeadCell>
            <Table.HeadCell>Usuario</Table.HeadCell>
            <Table.HeadCell>Sesion</Table.HeadCell>
            <Table.HeadCell>Admin</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{user[0]}</Table.Cell>
              <Table.Cell>{user[1]}</Table.Cell>
              <Table.Cell>{user[3]}</Table.Cell>
              <Table.Cell>{user[4]}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <div className="flex justify-center items-center space-x-8 mt-8">
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
  );
};
export default DisplayUser;
