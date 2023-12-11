import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Admin = () => {
  /**Declaracion de variable compartida por userContext */
  const { admin } = useUserContext();
  console.log(admin);
  /**Validacion de que el usuario sea administrador si no te regresa a inicio */
  return <>{admin == 1 ? <p>Admin</p> : <Navigate to="/"></Navigate>}</>;
};
export default Admin;
