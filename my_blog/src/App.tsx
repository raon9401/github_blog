import { RouterProvider } from "react-router-dom";
import { routers } from "./routers/Routers";

export const App = () => {
  return (
    <div className="w-full h-full">
      <RouterProvider router={routers} />
    </div>
  );
};
