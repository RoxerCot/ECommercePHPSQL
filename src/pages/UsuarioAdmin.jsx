import DisplayUser from "../components/DisplayUser";
import { useUserContext } from "../context/UserContext";
const UsuarioAdmin = () => {
  const { pickedUser } = useUserContext();
  return (
    <div>
      <DisplayUser
        props={{
          user: pickedUser,
        }}
      />
    </div>
  );
};
export default UsuarioAdmin;
