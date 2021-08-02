import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBRgeIOkTqkfWAVpb5HW9Rl58w3SwEzkCo',
  authDomain: 'crwn-db-35d56.firebaseapp.com',
  projectId: 'crwn-db-35d56',
  storageBucket: 'crwn-db-35d56.appspot.com',
  messagingSenderId: '62203798863',
  appId: '1:62203798863:web:3bae9d3a8c7c5d2485513a',
  measurementId: 'G-1Z3B5W0WT3',
};

firebase.initializeApp(config);

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
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
