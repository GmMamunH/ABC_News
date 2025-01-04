import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Mobiles } from "../pages/mobile/Mobiles";
import { Automobiles } from "../pages/automobile/Automobiles";
import { Business } from "../pages/business/Business";
import { Techs } from "../pages/tech/Techs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
export default router