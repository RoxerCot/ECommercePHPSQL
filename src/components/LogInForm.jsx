import { Alert, Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

import { HiInformationCircle } from "react-icons/hi";
const URL = "http://localhost/BackEnd2/Api.php";

const LogInForm = () => {
  const navigate = useNavigate();
  const refEmail = useRef(null);
  const refPswd = useRef(null);
  const [alert, setAlert] = useState("Bienvenida");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "LOGIN");
      data.append("usuario", refEmail.current.value);
      data.append("password", refPswd.current.value);
      console.log(data);
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      });
      const response_json = await resp.json();
      if (response_json["Password"]) {
        console.log("ok");
        console.log(JSON.stringify(refEmail.current.value));
        localStorage.setItem("Usuario", JSON.stringify(refEmail.current.value));
        navigate(0);
      } else {
        console.log("not ok");
        setAlert("Wrong Password");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const BackendFetch = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => navigate(0));
  };

  return (
    <form className="flex max-w-md flex-col gap-4 w-3/4">
      <div>
        {(() => {
          switch (alert) {
            case "Bienvenida":
              return <Alert color="info"> Bienvenido a E Commerce</Alert>;
            case "Wrong Password":
              return (
                <Alert color="failure" icon={HiInformationCircle}>
                  <span className="font-medium">Info alert!</span> Contraseña
                  incorrecta
                </Alert>
              );
            case "User Does Not Exist":
              return (
                <Alert color="failure" icon={HiInformationCircle}>
                  <span className="font-medium">Info alert!</span> Usuario No
                  Existe
                </Alert>
              );
            default:
              return null;
          }
        })()}
      </div>
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
