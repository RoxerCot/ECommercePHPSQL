import DisplayUser from "../components/DisplayUser";
import { useUserContext } from "../context/UserContext";
const UsuarioAdmin = () => {
  const { pickedUser } = useUserContext();
  return (
    <DisplayUser
      props={{
        user: pickedUser,
      }}
    />
  );
};
export default UsuarioAdmin;
