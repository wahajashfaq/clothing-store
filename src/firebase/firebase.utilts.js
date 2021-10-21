// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";
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
const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const signInWithGoogle = () => signInWithPopup(auth, provider);

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const docRef = doc(db, "users", `${userAuth.uid}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    try {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      await setDoc(doc(db, "users", `${userAuth.uid}`), {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return docRef;
};

export { auth, db, signInWithGoogle, createUserProfileDocument };
