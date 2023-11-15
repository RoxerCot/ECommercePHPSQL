import { TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import CarruselInicio from "../components/CarruselInicio";
import { useUserContext } from "../context/UserContext";

const Inicio = () => {
  const { admin } = useUserContext();

  return (
    <div className="flex flex-col items-center">
      <div className="basis-1/2 mt-8">
        <TextInput placeholder="busqueda..." rightIcon={HiSearch} />
      </div>
      <div className="basis-1/2 ">
        <CarruselInicio />
      </div>
    </div>
  );
};
export default Inicio;
