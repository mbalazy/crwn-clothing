import React from 'react';
import './collection.style.scss';
import { connect } from 'react-redux';
import CustomButton from '../../components/custom-button/custom-button.component';

import { selectCollection } from '../../redux/reducers/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection: { title, items }, match, history }) => {
  console.log(match, history);
  return (
    <div className="collection-page">
      <div className="preview-header">
        <h1 className="title">{title.toUpperCase()}</h1>
        <CustomButton
          onClick={() => {
            history.goBack();
          }}
        >
          go back
        </CustomButton>
      </div>
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
