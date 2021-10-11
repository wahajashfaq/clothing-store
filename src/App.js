import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/homepage.component";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
