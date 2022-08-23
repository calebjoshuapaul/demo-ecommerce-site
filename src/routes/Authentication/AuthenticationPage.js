import SignUp from "../../components/SignUpForm/SignUp";
import SignIn from "../../components/SignInForm/SignIn";
import "./AuthenticationPage.styles.scss";

function AuthenticationPage() {
  return (
    <div className="authenticationPage">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default AuthenticationPage;
