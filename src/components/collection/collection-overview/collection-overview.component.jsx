import React from 'react';
import './collection-overview.style.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';

import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../../redux/reducers/shop/shop.selectors';

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);
  return (
    <div className="collections-overview">
      {collections.map(collection => (
        <CollectionPreview key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

export default CollectionOverview;
