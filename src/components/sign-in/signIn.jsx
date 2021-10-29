import React from "react";
import "../sign-in/sign-in.scss";
import FormInput from "../Form/Form";
import CustomtButton from "../customButton/customButton";
import { signInWithGoogle } from "../../firebase/firebase";

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
            <div className="sign-in">
                <h2>I Already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label="email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label="password"
                    />
                    <div className="buttons">
                        <CustomtButton type="submit">Sign In</CustomtButton>
                        <CustomtButton
                            onClick={signInWithGoogle}
                            isGoogleSignIn>
                            Sign In With Google
                        </CustomtButton>
                    </div>
                </form>
            </div>
        );
    }
}

/*
for(let x=0;i<3;i++){
    for(let y=0;j<6;j++) {
        switch a[1][5]{
            case a[i][j-1]  a[i][j+1] ()



            a[i][j
            a[i][j]
            icludes((1,0) (0,1))
        }
        }
    }
}

3
a = [
    b=[1,0,0,1,0,0],=a[0][0]
  c=  [1,43543,3453,435],a[1]
    d=[,5,6,6,6,6,6,],a[2]
]
lowestCost = 0;
if(from a to b <lowestCost) {
    lowestCase= a to d
}
let myArray = [] myArray[0]
for  {cost 3} .push


a , b, c, d, f
a[0]=b
b[0]
*/

export default SignIn;
