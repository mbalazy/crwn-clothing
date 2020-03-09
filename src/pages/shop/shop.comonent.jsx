import React from 'react';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/reducers/shop/shop.actions';

import CollectionOverviewContainer from '../../components/collection/collection-overview/collection-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';

class ShopPage extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCollectionsStartAsync());
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionID`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

export default connect()(ShopPage);
