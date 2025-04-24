import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ApmLayout from "./routes/_apm/route";
import HomeRoute from "./routes/_apm.home/route";
import AboutRoute from "./routes/_apm.about/route";
import ContactRoute from "./routes/_apm.contact/route";
import NewPropertyRoute from "./routes/_apm.new-property/route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ApmLayout />, // Use the ApmLayout as the parent route
    children: [
      {
        index: true,
        element: <HomeRoute />, // Default child route
      },
      {
        path: "about",
        element: <AboutRoute />,
      },
      {
        path: "contact",
        element: <ContactRoute />,
      },
      {
        path: "new-property",
        element: <NewPropertyRoute />,
      },
    ],
  },
]);

export default router;
