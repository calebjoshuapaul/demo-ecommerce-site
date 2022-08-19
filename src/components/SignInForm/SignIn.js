import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
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
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const { user } = await getRedirectResult(auth);
      if (user) {
        await createUserDocumentFromAuth(user);
        setCurrentUser(user);
      }
    })();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    setCurrentUser(user);
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
      const { user } = await signAuthUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
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
        children={"Sign In with Google"}
        onClick={logGoogleUser}
      />
      <Button
        buttonType={"google-sign-in"}
        children={"Sign In with Redirect"}
        onClick={signInWithGoogleRedirect}
      />
    </div>
  );
}

export default SignIn;
