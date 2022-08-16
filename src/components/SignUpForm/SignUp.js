import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import Button from "../Button/Button";
import FormInputs from "../FormInputs/FormInputs";
import "./SignUp.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(response?.user, { displayName });
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use.");
      }
      console.log(
        "User creation with email and password encountered an error: ",
        err
      );
    }

    //Clear form fields...
    setFormFields(defaultFormFields);
  };

  return (
    <div className="signUp">
      <h3>I do not have an account</h3>
      <p>Sign up with your email and password</p>
      <form onSubmit={handleSubmit} className="signUp__form">
        <FormInputs
          label="Username"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
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
        <FormInputs
          label="Confirm password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit" children={"SIGN UP"} />
      </form>
    </div>
  );
}

export default SignUp;
