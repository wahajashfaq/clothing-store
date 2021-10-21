import React, { useState } from "react";
import FormInput from "components/form-input/form-input.component";
import CustomButton from "components/custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "firebase/firebase.utilts";
import "./sign-up.styles.scss";
import { createUserWithEmailAndPassword } from "@firebase/auth";

const SignUp = () => {
  const [signUpState, setSignUpState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (signUpState.password !== signUpState.confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        signUpState.email,
        signUpState.password
      );

      await createUserProfileDocument(user, {
        displayName: signUpState.displayName,
      });

      setSignUpState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={signUpState.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={signUpState.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={signUpState.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={signUpState.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
