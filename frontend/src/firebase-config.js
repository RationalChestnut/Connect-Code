import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";


const app = initializeApp(firebaseConfig);
const googleUserProvider = new GoogleAuthProvider();

export const auth = getAuth(app);

export const signInWithGoogle = async () =>
  await signInWithPopup(auth, googleUserProvider);

export const storage = getStorage(app);
