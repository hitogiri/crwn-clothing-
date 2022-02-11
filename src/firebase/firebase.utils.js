import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {

  apiKey: "AIzaSyBAFofQofvTPmAgIvJ-NfIcqCAQxm39NG4",

  authDomain: "crwn-db-691fd.firebaseapp.com",

  projectId: "crwn-db-691fd",

  storageBucket: "crwn-db-691fd.appspot.com",

  messagingSenderId: "244628410907",

  appId: "1:244628410907:web:ee3491898eb13f291e9ebe",

  measurementId: "G-D0JDCK71PD"

};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`)
const snapShot = await userRef.get();

if(!snapShot.exists) {
  const {displayName, email} = userAuth;
  const createdAt = new Date();

  try {
    await userRef.set ({
      displayName,
      email,
      createdAt,
      ...additionalData
    })
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
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
