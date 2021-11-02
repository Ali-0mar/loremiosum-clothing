import "./App.css";
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./Pages/homePage/homePage";
import ShopPage from "./Pages/shoppage/shopPage";
import CheckoutPage from "./Pages/checkout/checkout";
import Header from "./components/header/header";
import SignInAndUp from "./Pages/sign in and up/sign-in-up";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { setCurrentUser } from "../src/redux/user/user-actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../src/redux/user/user-selectors";
class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapShot) => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    });
                });
            }

            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/shop" component={ShopPage} />
                        <Route
                            excat
                            path="/checkout"
                            component={CheckoutPage}
                        />
                        <Route
                            exact
                            path="/signin"
                            render={() =>
                                this.props.currentUser ? (
                                    <Redirect to="/" />
                                ) : (
                                    <SignInAndUp />
                                )
                            }
                        />
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapSateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapSateToProps, mapDispatchToProps)(App);
