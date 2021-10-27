import React from "react";
import "../sign-in/sign-in.scss";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: "", password: "" });
    };
    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };
    render() {
        return (
            <div>
                <h2>I Already hav an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                        onChange={this.handleChange}
                    />
                    <label name="email">Email</label>
                    <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        required
                        onChange={this.handleChange}
                    />
                    <label name="password">Password</label>
                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        );
    }
}

export default SignIn;
