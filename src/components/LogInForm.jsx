import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
const URL = "http://localhost/BackEnd2/Interface.php";

const LogInForm = () => {
  const navigate = useNavigate();
  const refEmail = useRef(null);
  const refPswd = useRef(null);
  const { admin } = useUserContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append("usuario", refEmail.current.value);
    data.append("password", refPswd.current.value);
    data.append("METHOD", "LOGIN");
    console.log(data);
    localStorage.setItem("Usuario", JSON.stringify(refEmail.current.value));
    console.log("Setting User ID");
    logIn(URL, data);
  };

  const logIn = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => {
      console.log(admin);
      navigate(0);
    });
    console.log(resp);
  };

  return (
    <form className="flex max-w-md flex-col gap-4">
      <div></div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput
          id="email1"
          placeholder="name@flowbite.com"
          // required
          type="email"
          ref={refEmail}
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput
          id="password1"
          // required
          ref={refPswd}
          type="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button onClick={handleSubmit} type="submit">
        Submit
      </Button>
    </form>
  );
};
export default LogInForm;
