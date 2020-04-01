import { takeLatest, call, put, all } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';

import { fetchCollectionSucces, fetchCollectionFailure } from './shop.actions';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../../firebase/firebase.utils';

function* fetchCollectionsAsync() {
  try {
    const collectionReference = firestore.collection('collections');

    const snapshot = yield collectionReference.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    yield put(fetchCollectionSucces(collectionsMap));
  } catch (err) {
    yield put(fetchCollectionFailure(err.message));
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionsAsync
  );
}

function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}

export default shopSagas;
