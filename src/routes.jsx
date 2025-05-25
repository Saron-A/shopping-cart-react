import React from "react";
import Homepage from "./pages/Homepage";
import Shopping from "./pages/Shopping";
import Layout from "./pages/Layout";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, //default route
        element: <Homepage />,
      },
      {
        path: "shopping",
        element: <Shopping />,
        children: [
          {
            index: true, //default route for shopping
            element: <Cart />,
          },
          {
            path: "cart", // 👈 add this
            element: <Cart />,
          },
          {
            path: "checkout",
            element: <Checkout />,
          },
        ],
      },
    ],
  },
];

export default routes;
