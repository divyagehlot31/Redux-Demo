// router/index.js
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home";
import { ROUTES } from "../constant/Path";
import Checkout from "../components/Checkout";

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <AppLayout />,
    children: [
      { path: ROUTES.ROOT, element: <Home /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);

export default router;
