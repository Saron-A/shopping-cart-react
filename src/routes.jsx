import React from "react";
import Homepage from "./pages/Homepage";
import Shopping from "./pages/Shopping";
import Layout from "./pages/Layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "shopping",
        element: <Shopping />,
      },
    ],
  },
];

export default routes;
