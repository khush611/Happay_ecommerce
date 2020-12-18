import React from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Cart from "./cart";
import Products from "./products";
import Navbar from "./navbar";
import { Provider } from "react-redux";
import store from "./components/store";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Provider>
  );
}
