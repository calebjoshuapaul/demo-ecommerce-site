import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEny8VVPKs9Wa9W93na1ur92hMuNXqSPM",
  authDomain: "e-comm-app-777.firebaseapp.com",
  projectId: "e-comm-app-777",
  storageBucket: "e-comm-app-777.appspot.com",
  messagingSenderId: "372962407596",
  appId: "1:372962407596:web:5a332987f9959435309b09",
  measurementId: "G-VV8MD692CR",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email && !password) return;
  createUserWithEmailAndPassword(auth, email, password);
};

//Initialize database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;

  //Checks all users from the database and creates a ref
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  //If the user doesn't exist...DO THIS
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("Error creating user: ", error.message);
    }
  }

  //If the user doesn't exit...DO THIS
  return userDocRef;
};

export const signAuthUserWithEmailAndPassword = async (email, password) => {
  if (email && password) {
    return await signInWithEmailAndPassword(auth, email, password);
  }
  return;
};

export const signOutUser = async () => {
  await signOut(auth);
};
