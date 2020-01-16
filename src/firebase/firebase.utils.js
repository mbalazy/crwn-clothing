import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCfFVpM-evvZLce7p_qdjVc14DVrGVGbm4',
  authDomain: 'crwn-db-7657e.firebaseapp.com',
  databaseURL: 'https://crwn-db-7657e.firebaseio.com',
  projectId: 'crwn-db-7657e',
  storageBucket: 'crwn-db-7657e.appspot.com',
  messagingSenderId: '810329596136',
  appId: '1:810329596136:web:08d6cc64abc17d8f3ce95d',
  measurementId: 'G-E8Y0J2Q2X7'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
