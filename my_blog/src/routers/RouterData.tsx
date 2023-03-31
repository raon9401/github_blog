import { HomePage } from "../pages/HomePage";
import { PortFolio } from "../pages/PortFolio";
import { RouterBase } from "../types/routerType";

export const ROUTER_DATA: RouterBase[] = [
  {
    id: 0,
    path: "/",
    label: "홈페이지",
    element: <HomePage />,
  },
  {
    id: 1,
    path: "/portfolio",
    label: "포트폴리오",
    element: <PortFolio />,
  },
];
