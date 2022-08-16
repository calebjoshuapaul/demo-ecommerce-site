import React from "react";
import FormInputs from "../FormInputs/FormInputs";
import "./SignIn.styles.scss";
import Button from "../Button/Button";

function SignIn({ logGoogleUser, signInWithGoogleRedirect }) {
  return (
    <div className="signIn">
      <h3>I already have an account</h3>
      <p>Sign in with your email and password</p>
      <form className="signIn__form">
        <FormInputs label="Email" type="email" name="email" />
        <FormInputs label="Password" type="password" name="password" />
        <Button type="submit" children={"Sign in"} />
      </form>
      <Button
        buttonType={"google-sign-in"}
        handleClick={logGoogleUser}
        children={"Sign In with Google"}
      />
      <Button
        buttonType={"google-sign-in"}
        handleClick={signInWithGoogleRedirect}
        children={"Sign In with Google Redirect"}
      />
    </div>
  );
}

export default SignIn;
