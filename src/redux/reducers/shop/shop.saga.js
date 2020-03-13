import { takeEvery, call, put } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';

import { fetchCollectionSucces, fetchCollectionFailure } from './shop.actions';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../../firebase/firebase.utils';

export function* fetchCollectionsAsync() {
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

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionsAsync
  );
}
