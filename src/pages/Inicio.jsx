import { TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";

const Inicio = () => {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 mt-12">
        <TextInput placeholder="busqueda..." rightIcon={HiSearch} />
      </div>
    </div>
  );
};
export default Inicio;
