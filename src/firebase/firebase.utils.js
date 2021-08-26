import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

const config = {
  apiKey: "AIzaSyDpXwcQCR1ObR2P9TZ8oqc76L6eqnK1jBI",
  authDomain: "ecommerce-2326a.firebaseapp.com",
  projectId: "ecommerce-2326a",
  storageBucket: "ecommerce-2326a.appspot.com",
  messagingSenderId: "293148910541",
  appId: "1:293148910541:web:d5756054d17fcbf6679a84",
  measurementId: "G-PHVEH3LGC6",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
        console.log("Error in creating user", error.message)
    }

  }

  return userRef;

}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
