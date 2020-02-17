import React from 'react';
import CollectionOverview from '../../components/collection/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import WithSpinner from '../../components/utils/with-spinner/with-spinner.component';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/reducers/shop/shop.actions';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionReference = firestore.collection('collections');
    this.unsubscribeFromSnapshot = collectionReference.onSnapshot(
      async snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

        const { dispatch } = this.props;
        dispatch(updateCollections(collectionsMap));

        this.setState({ loading: false });
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionID`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

export default connect()(ShopPage);
