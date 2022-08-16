import SignUp from "../../components/SignUpForm/SignUp";
import SignIn from "../../components/SignInForm/SignIn";
import "./AuthenticationPage.styles.scss";

function AuthenticationPage() {
  return (
    <div className="signInPage">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default AuthenticationPage;
