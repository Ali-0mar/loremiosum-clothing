import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
    apiKey: "AIzaSyDHiAkxdUX5PYIkgWUNbYL4z2KElHxfMn4",
    authDomain: "lorem-ipsum-clothing.firebaseapp.com",
    projectId: "lorem-ipsum-clothing",
    storageBucket: "lorem-ipsum-clothing.appspot.com",
    messagingSenderId: "99666446120",
    appId: "1:99666446120:web:15aa757dcff5c6f0acf21d",
    measurementId: "G-HTFQ73ES3G",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
