import { useEffect } from "react";
import { ListGroup } from "flowbite-react";
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
      console.log(resp_json);
      dataDisplay = ObjectToArray(resp_json, dataDisplay);
      setUsersList(ObjectToArray(resp_json, usersList));
    };
    fetchData();
    return () => {};
  }, []);
  return (
    <div className="flex flex-col  ">
      {console.log(usersList)}
      <div className="flex justify-center items-center">
        <p>UserList</p>
      </div>
      {usersList ? (
        <div className="flex  flex-col justify-center items-center">
          {usersList.map((user) => (
            <ListGroup
              key={user[0]}
              className="w-3/4 flex flex-row justify-center items-center"
            >
              <ListGroup.Item className="basis-1/4">{user[0]}</ListGroup.Item>
              <ListGroup.Item className="basis-1/4">{user[1]}</ListGroup.Item>
              <ListGroup.Item className="basis-1/4">{user[3]}</ListGroup.Item>
            </ListGroup>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default UserList;
