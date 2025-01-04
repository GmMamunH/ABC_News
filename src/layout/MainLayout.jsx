import { Outlet } from "react-router-dom";
import { Footer } from "../components/shared/footer/Footer";
import { NavbarSimple } from "../components/shared/header/NavbarSimple"


export const MainLayout = () => {
  return (
    <>
      <NavbarSimple />
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
}
