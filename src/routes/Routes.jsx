import { createBrowserRouter } from "react-router-dom";
import { Mobiles } from "../pages/mobile/Mobiles";
import { Automobiles } from "../pages/automobile/Automobiles";
import { Business } from "../pages/business/Business";
import { Techs } from "../pages/tech/Techs";
import { MainLayout } from "../layout/MainLayout";

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
      { path: "tech", element: <Techs /> },
    ],
  },
]);
export default router;
