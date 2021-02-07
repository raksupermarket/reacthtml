import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Resto from "./Resto";
import Retail from "./Retail";
import Spek from "./Spek";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      <Route exact path="/resto" component={Resto} />
      <Route exact path="/retail" component={Retail} />
      <Route exact path="/spek" component={Spek} />
    </Switch>
  </main>
);

export default Main;
