import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RouterBase } from "../types/routerType";

const routerData: RouterBase[] = [
  {
    id: 0,
    path: "/",
    label: "homepage",
    element: <HomePage />,
  },
];

export const routers = createBrowserRouter(
  routerData.map((router) => {
    return { path: router.path, element: router.element };
  })
);
