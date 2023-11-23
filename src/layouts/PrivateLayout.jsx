import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import ComponentNavbar from "../components/UserNavbar";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
const PrivateLayout = () => {
  const { user } = useUserContext();

  return user ? (
    <div className="">
      <ComponentNavbar />
      <Outlet />
      <Footer container>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                href="/"
                src="/images/CIERDCARS_LOGO.png"
                alt="Ciber D Cars Logo"
                name="Ciber D Cars"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Mision</Footer.Link>
                  <Footer.Link href="#">Vision</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Facebook</Footer.Link>
                  <Footer.Link href="#">Instaram</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="E-Commerce™" year={2023} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateLayout;
