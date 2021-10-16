import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "components/custom-button/custom-button.component";
import { signInWithGoogle } from "firebase/firebase.utilts";
import "./sign-in.styles.scss";

const SignIn = () => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setState({ email: "", password: "" });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={state.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={state.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isSignInWithGoogle>
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
