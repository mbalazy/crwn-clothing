import React from 'react';
import './collection-overview.style.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/reducers/shop/shop.selectors';

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(collection => (
        <CollectionPreview key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
