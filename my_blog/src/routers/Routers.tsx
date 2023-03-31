import { createBrowserRouter } from "react-router-dom";
import { ROUTER_DATA } from "./RouterData";
import { GeneralLayout } from "../layout/GeneralLayout";

export const routers = createBrowserRouter(
  ROUTER_DATA.map((router) => {
    return {
      path: router.path,
      element: <GeneralLayout>{router.element} </GeneralLayout>,
    };
  })
);
