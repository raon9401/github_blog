import { HomePage } from "../pages/HomePage";
import { PortFolioPage } from "../pages/PortFolioPage";
import { RouterBase } from "../types/routerType";

export const ROUTER_DATA: RouterBase[] = [
  {
    id: 0,
    path: "/",
    label: "홈페이지",
    element: <HomePage />,
    isCategory: true,
  },
  {
    id: 1,
    path: "/portfolio",
    label: "포트폴리오",
    element: <PortFolioPage />,
    isCategory: true,
  },
];
