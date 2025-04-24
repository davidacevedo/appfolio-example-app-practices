import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { Provider } from "mobx-react";
import { propertyStore } from "./routes/_apm.shared/stores";
import router from "./router";

const App: React.FC = () => (
  <Provider store={{ propertyStore }}>
    <RouterProvider router={router} />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
