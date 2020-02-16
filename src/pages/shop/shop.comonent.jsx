import React from 'react';
import CollectionOverview from '../../components/collection/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/reducers/shop/shop.actions';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

class ShopPage extends React.Component {
  unsubscribeFromSnapschot = null;

  componentDidMount() {
    const collectionReference = firestore.collection('collections');
    collectionReference.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionsMap);

      const { dispatch } = this.props;
      dispatch(updateCollections(collectionsMap));
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionID`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

export default connect()(ShopPage);
