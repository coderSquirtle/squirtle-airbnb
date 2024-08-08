import { Navigate } from "react-router-dom";
import React from "react";

const Home = React.lazy(() => import("@/views/Home"));
const Detail = React.lazy(() => import("@/views/Detail"));
const Entire = React.lazy(() => import("@/views/Entire"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home"></Navigate>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/detail",
    element: <Detail></Detail>,
  },
  {
    path: "/entire",
    element: <Entire></Entire>,
  },
];

export default routes;
