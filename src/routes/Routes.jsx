import { createBrowserRouter } from "react-router-dom";
import { Mobiles } from "../pages/mobile/Mobiles";
import { Automobiles } from "../pages/automobile/Automobiles";
import { Business } from "../pages/business/Business";
import { Techs } from "../pages/tech/Techs";
import { MainLayout } from "../layout/MainLayout";
import { BusinessDetails } from "../pages/business/BusinessDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Mobiles />,
      },
      { path: "automobiles", element: <Automobiles /> },
      { path: "business", element: <Business /> },
      { path: "business-details/:title", element: <BusinessDetails /> },
      { path: "tech", element: <Techs /> },
    ],
  },
]);
export default router;
