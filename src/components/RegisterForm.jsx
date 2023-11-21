import { useRef, useState } from "react";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { useUserContext } from "../context/UserContext";
import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";

const URL = "http://localhost/BackEnd2/Api.php";

const RegisterForm = () => {
  const navigate = useNavigate();
  const refEmail = useRef(null);
  const refPswd = useRef(null);
  const { user } = useUserContext();
  const [alert, setAlert] = useState("Bienvenida");
  useRedirectActiveUser(user, "/productos");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("METHOD", "REGISTER");
      data.append("usuario", refEmail.current.value);
      data.append("password", refPswd.current.value);
      console.log(data);
      const resp = await fetch(URL, {
        method: "POST",
        body: data,
      });
      const response_json = await resp.json();
      if (response_json["Mensaje"] == "User Registered") {
        localStorage.setItem("Usuario", JSON.stringify(refEmail.current.value));
        navigate(0);
      } else {
        setAlert(response_json["Mensaje"]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col gap-4 w-3/5"
      >
        <p className="font-sans self-center place-self-center mb-12">
          Registro
        </p>
        <div>
          {(() => {
            switch (alert) {
              case "Bienvenida":
                return (
                  <Alert className="items-center justify-center" color="info">
                    Bienvenido a E Commerce
                  </Alert>
                );
              case "User Already Exists":
                return (
                  <Alert
                    className="items-center justify-center"
                    color="failure"
                    icon={HiInformationCircle}
                  >
                    Info alert!... Este Email ya ha sido registrado
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
