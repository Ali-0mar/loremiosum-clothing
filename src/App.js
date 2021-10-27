import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/homePage/homePage";
import ShopPage from "./Pages/shoppage/shopPage";
import Header from "./header/header";
function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/shop" component={ShopPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
