import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { Button } from "flowbite-react";
import { useEffect } from "react";
import { useUserContext } from "../context/UserContext";
const Registro = () => {
  const { user, admin } = useUserContext();
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/");
  };
  /** User check */
  useEffect(() => {
    if (user) {
      if (admin == 1) {
        console.log("Admin");
        navigate("/admin");
      } else {
        console.log("User");
        navigate("/productos");
      }
    }
  }, [user]);
  return (
    <div className="flex flex-row ">
      <div className="basis-1/2 object-fill max-w-max">
        <img src="/images/Register_picture.jpg" className="h-screen " />
      </div>
      <div className="basis-1/2 flex flex-col items-center pt-12">
        <RegisterForm />
        <Button onClick={handleReturn} className="mt-12">
          Regresar
        </Button>
      </div>
    </div>
  );
};
export default Registro;
