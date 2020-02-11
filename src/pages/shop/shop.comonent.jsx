import React from 'react';
import CollectionOverview from '../../components/collection/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { Route } from 'react-router-dom';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionID`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
