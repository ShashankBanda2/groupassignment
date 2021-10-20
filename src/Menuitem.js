import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Drinks from "./drinks";
import Fruits from "./fruits";
import Veggies from "./veggies";
import Choclates from "./choclates";
import Dairy from "./dairy";

function Menuitem(props) {
  console.log(props);
  return (
    <Router>
    <div id="Menuitem-component" style>
      <p>{props.discountIs}</p>
      <Link to={props.Url}>
        <b>{props.categoryname}</b>
      </Link>

      <Switch>
        <Route path="/drinks">
          <Drinks />
        </Route>

        <Route path="/fruits">
          <Fruits />
        </Route>

        <Route path="/choclates">
          <Choclates />
        </Route>

        <Route path="/veggies">
          <Veggies />
        </Route>

        <Route path="/dairy">
          <Dairy />
        </Route>
      </Switch>
    </div></Router>
  );
}
export default Menuitem;
