// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8vrDsrUT0d7YP02FfDXaHEQr-X4kV-XU",
  authDomain: "clothing-app-a1f45.firebaseapp.com",
  projectId: "clothing-app-a1f45",
  storageBucket: "clothing-app-a1f45.appspot.com",
  messagingSenderId: "686077427471",
  appId: "1:686077427471:web:888e7efa8b7f00c980487a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const signInWithGoogle = () => signInWithPopup(auth, provider);

export { auth, firestore, signInWithGoogle };

export default app;
