import { useRef } from "react";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { useUserContext } from "../context/UserContext";
import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost/BackEnd2/Interface.php";

const RegisterForm = () => {
  const navigate = useNavigate();
  const refEmail = useRef(null);
  const refPswd = useRef(null);
  const { user } = useUserContext();
  useRedirectActiveUser(user, "/productos");

  const handleSubmit = async (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append("usuario", refEmail.current.value);
    data.append("password", refPswd.current.value);
    data.append("METHOD", "REGISTER");
    console.log(data);
    localStorage.setItem("Usuario", JSON.stringify(refEmail.current.value));
    register(URL, data);
  };

  const register = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => navigate(0));
    console.log(resp);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            placeholder="name@flowbite.com"
            required
            type="email"
            ref={refEmail}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" required type="password" ref={refPswd} />
        </div>
        <Button type="submit">Registrar</Button>
      </form>
    </>
  );
};
export default RegisterForm;
