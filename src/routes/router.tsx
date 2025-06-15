import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";

const HomePage = lazy(() => import("../pages/home/index"));
const DetailPage = lazy(() => import("../pages/detail/index"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
    ],
  },
  {
    path: "*",
    Component: () => <Navigate to="/" replace />,
  },
]);
