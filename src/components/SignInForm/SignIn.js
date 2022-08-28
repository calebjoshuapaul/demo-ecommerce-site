import { useState, useEffect } from "react";
import Button from "../Button/Button";
import FormInputs from "../FormInputs/FormInputs";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  signAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";
import "./SignIn.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignIn() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  useEffect(() => {
    (async () => {
      const { user } = await getRedirectResult(auth);
      if (user) {
        await createUserDocumentFromAuth(user);
      }
    })();
  }, []);

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signAuthUserWithEmailAndPassword(email, password);
    } catch (error) {
      if (error.code === "auth/wrong-password") alert("Incorrect password");
      if (error.code === "auth/user-not-found") alert("Incorrect email");
    }
    setFormFields(defaultFormFields);
  };

  return (
    <div className="signIn">
      <h3>I already have an account</h3>
      <p>Sign in with your email and password</p>
      <form className="signIn__form">
        <FormInputs
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInputs
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Button type="submit" children={"Sign in"} onClick={handleSubmit} />
      </form>
      <Button
        buttonType={"google-sign-in"}
        children={"Google Sign In"}
        onClick={logGoogleUser}
      />
      <Button
        buttonType={"google-sign-in"}
        children={"Redirect to Google"}
        onClick={signInWithGoogleRedirect}
      />
    </div>
  );
}

export default SignIn;
