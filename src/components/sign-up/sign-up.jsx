import React from "react";
import FormInput from "../Form/Form";
import CustomtButton from "../customButton/customButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase";
import "../sign-up/sign-up-style.scss";

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password,
            );
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        } catch (error) {
            console.error(error);
        }
    };
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2> Don't have an account?</h2>
                <span>Sign up with your email and password</span>
                <form className="'sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="diplay Name"
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomtButton type="submit">Sign Up</CustomtButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
