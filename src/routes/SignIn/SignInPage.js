import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import SignUp from "../../components/SignUpForm/SignUp";
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
      <SignUp />
      <div className="signInPage__google">
        <button onClick={logGoogleUser}>Sign In with Google</button>
        <button onClick={signInWithGoogleRedirect}>
          Sign In with Google Redirect
        </button>
      </div>
    </div>
  );
}

export default SignInPage;
