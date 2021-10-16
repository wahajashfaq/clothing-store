import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "pages/home/homepage.component";
import "./App.css";
import ShopPage from "pages/shop/shop.component";
import Header from "components/header/header.component";
import Authentication from "pages/authentication/authentication.component";
import { auth } from "firebase/firebase.utilts";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribeFromAuth;
  });
  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={Authentication} />
      </Switch>
    </div>
  );
};

export default App;
