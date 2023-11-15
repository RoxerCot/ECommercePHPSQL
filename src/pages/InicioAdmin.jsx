import { TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import UserList from "../components/UsersList";
const InicioAdmin = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="basis-1/2 mt-8">
        <TextInput placeholder="busqueda..." rightIcon={HiSearch} />
      </div>
      <div className="basis-1/2 w-screen">
        <UserList />
      </div>
    </div>
  );
};
export default InicioAdmin;
