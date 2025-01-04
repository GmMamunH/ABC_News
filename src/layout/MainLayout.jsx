import { Outlet } from "react-router-dom";
import { Footer } from "../components/shared/footer/Footer";
import { NavbarSimple } from "../components/shared/header/NavbarSimple"


export const MainLayout = () => {
  return (
    <>
      <NavbarSimple />
      <div className="w-10/12 mx-auto py-2 px-3">
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
}
