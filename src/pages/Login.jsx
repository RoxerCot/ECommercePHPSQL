import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";
import LogInForm from "../components/LogInForm";
import { Button } from "flowbite-react";

const Login = () => {
  const { user, admin } = useUserContext();
  /**Navigate Variable */
  const navigate = useNavigate();
  /**Navigate Functtion */
  const handleRegister = () => {
    navigate("/registro");
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
        <img src="/images/Login_picture.jpg" className="h-screen " />
      </div>
      <div className="basis-1/2 flex flex-col items-center pt-12">
        <LogInForm className="" />
        <Button className="mt-12" onClick={handleRegister}>
          Registro
        </Button>
      </div>
    </div>
  );
};
export default Login;
