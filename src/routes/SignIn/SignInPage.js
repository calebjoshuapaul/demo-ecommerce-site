import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import SignUp from "../../components/SignUpForm/SignUp";
import SignIn from "../../components/SignInForm/SignIn";
import "./SignInPage.styles.scss";

function SignInPage() {
  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
      if (response) {
        await createUserDocumentFromAuth(response?.user);
      }
    })();
  }, []);

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    await createUserDocumentFromAuth(response?.user);
  };

  return (
    <div className="signInPage">
      <SignIn
        logGoogleUser={logGoogleUser}
        signInWithGoogleRedirect={signInWithGoogleRedirect}
      />
      <SignUp />
    </div>
  );
}

export default SignInPage;
