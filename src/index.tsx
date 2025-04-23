import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "mobx-react";
import { store } from "./stores";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NewPropertyForm from "./components/NewPropertyForm";

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/new-property" component={NewPropertyForm} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
