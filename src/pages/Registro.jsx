import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { Button } from "flowbite-react";
const Registro = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center pt-12">
      <h1 className="mb-12">Registro</h1>
      <RegisterForm />
      <Button onClick={handleReturn} className="mt-12">
        Regresar
      </Button>
    </div>
  );
};
export default Registro;
