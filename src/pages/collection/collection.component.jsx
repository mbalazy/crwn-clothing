import React from 'react';
import './collection.style.scss';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/reducers/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';
const CollectionPage = ({ collection: { title, items }, match }) => {
  console.log(match);
  // console.log(collection);
  return (
    <div className="collection-page">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionID)(state)
});

export default connect(mapStateToProps)(CollectionPage);
