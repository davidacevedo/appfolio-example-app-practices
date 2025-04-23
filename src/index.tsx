import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { Provider } from "mobx-react";
import { store } from "./stores";
import router from "./router";

const App: React.FC = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
