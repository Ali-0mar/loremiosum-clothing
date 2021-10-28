import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/homePage/homePage";
import ShopPage from "./Pages/shoppage/shopPage";
import Header from "./components/header/header";
import SignInAndUp from "./Pages/sign in and up/sign-in-up";
import { auth } from "./firebase/firebase";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null,
        };
    }
    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });
            console.log(user);
        });
    }
    render() {
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
}

export default App;
