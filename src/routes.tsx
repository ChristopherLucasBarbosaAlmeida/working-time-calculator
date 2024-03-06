import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages";

export const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
]);
