import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NewPropertyForm from "./components/NewPropertyForm";
import Layout from "./routes/_shared/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Define the layout as a parent route
    children: [
      {
        index: true,
        element: <Home />, // Default child route
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "new-property",
        element: <NewPropertyForm />,
      },
    ],
  },
]);

export default router;
