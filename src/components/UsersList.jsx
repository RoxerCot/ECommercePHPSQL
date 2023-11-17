import { useEffect } from "react";
import { ListGroup, Table } from "flowbite-react";
import { useUserContext } from "../context/UserContext";
const URL = "http://localhost/BackEnd2/Api.php";

const UserList = () => {
  const { usersList, setUsersList } = useUserContext();
  var dataDisplay = [];
  /** Aqui transformo un objetto a un array */
  function ObjectToArray(object, array) {
    array = [];
    for (var i in object) {
      array.push(Object.values(object[i]));
    }
    return array;
  }
  useEffect(() => {
    const fetchData = async () => {
      setUsersList(false);
      var data = new FormData();
      data.append("METHOD", "GETUSERS");
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      });
      const resp_json = await resp.json();
      dataDisplay = ObjectToArray(resp_json, dataDisplay);
      setUsersList(ObjectToArray(resp_json, usersList));
    };
    fetchData();
    return () => {};
  }, []);
  return (
    <div className="flex flex-col w-screen">
      <div className="flex justify-center items-center">
        <p>UserList</p>
      </div>
      {usersList ? (
        <Table className="w-fit" hoverable>
          <Table.Head>
            <Table.HeadCell>Id</Table.HeadCell>
            <Table.HeadCell>Usuario</Table.HeadCell>
            <Table.HeadCell>Sesion activa</Table.HeadCell>
            <Table.HeadCell>Administrador</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {usersList.map((user) => (
              <Table.Row
                key={user[0]}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {user[0]}
                </Table.Cell>
                <Table.Cell>{user[1]}</Table.Cell>
                <Table.Cell>{user[3]}</Table.Cell>
                <Table.Cell>{user[4]}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default UserList;
