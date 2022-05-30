import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDzhW4_clHooTRX_8v9gju1IiGooMLybtQ",
  authDomain: "connect-code-f2b5c.firebaseapp.com",
  databaseURL: "https://connect-code-f2b5c-default-rtdb.firebaseio.com",
  projectId: "connect-code-f2b5c",
  storageBucket: "connect-code-f2b5c.appspot.com",
  messagingSenderId: "739891086527",
  appId: "1:739891086527:web:eefd9c5fe128a60d66720a",
  measurementId: "G-MEN4XFS7C4",
};

const app = initializeApp(firebaseConfig);
const googleUserProvider = new GoogleAuthProvider();

export const auth = getAuth(app);

export const signInWithGoogle = async () =>
  await signInWithPopup(auth, googleUserProvider);

export const storage = getStorage(app);
