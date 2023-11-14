import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Admin = () => {
  const { admin } = useUserContext();
  console.log(admin);
  return <>{admin == 1 ? <p>Admin</p> : <Navigate to="/"></Navigate>}</>;
};
export default Admin;
