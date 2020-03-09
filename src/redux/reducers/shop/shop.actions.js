import ShopActionTypes from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START
});

export const fetchCollectionSucces = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCES,
  payload: collectionsMap
});

export const fetchCollectionFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => dispatch => {
  const collectionReference = firestore.collection('collections');
  dispatch(fetchCollectionStart());

  collectionReference
    .get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionSucces(collectionsMap));
    })
    .catch(error => dispatch(fetchCollectionFailure(error.message)));
};
