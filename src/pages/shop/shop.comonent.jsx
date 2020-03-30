import React, { useEffect } from 'react';

import { Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/reducers/shop/shop.actions';

import CollectionOverviewContainer from '../../components/collection/collection-overview/collection-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

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
};

export default ShopPage;
