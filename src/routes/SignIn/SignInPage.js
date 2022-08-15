import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

function SignInPage() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response?.user);
  };

  return (
    <div>
      <h1>Sign-In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>
  );
}

export default SignInPage;
