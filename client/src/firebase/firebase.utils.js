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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userDocReference = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userDocReference.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userDocReference.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log('error creating user ', err);
    }
  }
  return userDocReference;
};

firebase.initializeApp(config);

export const addCollecctionAndDocuments = async (
  collectionKey,
  objectToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const getCurrentUserFromSession = () => {
  return new Promise((res, rej) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      res(userAuth);
    }, rej);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
