import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/homePage/homePage";
const Hats = () => {
    return <div>Hats Pages</div>;
};
function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact={true} path="/" component={HomePage} />
                    <Route exact path="/Hats" component={Hats} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
