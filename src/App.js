import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "pages/home/homepage.component";
import "./App.css";
import ShopPage from "pages/shop/shop.component";
import Header from "components/header/header.component";
import Authentication from "pages/authentication/authentication.component";
import { auth, createUserProfileDocument } from "firebase/firebase.utilts";
import { onSnapshot } from "@firebase/firestore";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRef, setUserRef] = useState(null);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRefResult = await createUserProfileDocument(userAuth);
        setUserRef(userRefResult);
      } else {
        setCurrentUser(null);
      }
    });
    return unsubscribeFromAuth;
  }, []);

  useEffect(() => {
    let unsubscribeSnapshot = undefined;
    if (userRef) {
      unsubscribeSnapshot = onSnapshot(userRef, (doc) => {
        if (doc.exists()) {
          setCurrentUser({
            id: doc.id,
            ...doc.data(),
          });
        } else setCurrentUser(null);
      });
    }
    if (unsubscribeSnapshot) return unsubscribeSnapshot;
  }, [userRef]);
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
