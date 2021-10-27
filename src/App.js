import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/homePage/homePage";
import ShopPage from "./Pages/shoppage/shopPage";
import Header from "./components/header/header";
import SignInAndUp from "./Pages/sign in and up/sign-in-up";
function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/shop" component={ShopPage} />
                    <Route exact path="/signin" component={SignInAndUp} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
