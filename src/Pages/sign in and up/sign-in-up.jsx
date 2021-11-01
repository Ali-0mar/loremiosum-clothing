import React from "react";
import "./sign-in-up.scss";
import SignIn from "../../components/sign-in/signIn";
import SignUp from "../../components/sign-up/sign-up";
import { auth } from "../../firebase/firebase";

const SignInAndUp = () => {
    return (
        <div className="sign-in-up">
            <SignIn />
            <SignUp />
        </div>
    );
};

export default SignInAndUp;
