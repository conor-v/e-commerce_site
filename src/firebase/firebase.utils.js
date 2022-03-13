import firebase from 'firebase/compat/app';
import  'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBl44ytd8lPD8rlFDgwRuNlHLyp1iOLE9c",
  authDomain: "e-commerce-db-2e420.firebaseapp.com",
  projectId: "e-commerce-db-2e420",
  storageBucket: "e-commerce-db-2e420.appspot.com",
  messagingSenderId: "778627331402",
  appId: "1:778627331402:web:fb2f8bf32c76ce5b3e3db3"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;