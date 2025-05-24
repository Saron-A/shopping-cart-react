import React from "react";
import Homepage from "./pages/Homepage";
import Shopping from "./pages/Shopping";

const routes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/shopping",
    element: <Shopping />,
  },
];

export default routes;
