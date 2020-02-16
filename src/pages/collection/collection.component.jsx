import React from 'react';
import './collection.style.scss';
import { connect } from 'react-redux';
import CustomButton from '../../components/utils/custom-button/custom-button.component';

import { selectCollection } from '../../redux/reducers/shop/shop.selectors';
import ScrollToTop from '../../components/utils/scroll-to-top/scroll-to-top.component';
import CollectionItem from '../../components/collection/collection-item/collection-item.component';

const CollectionPage = ({ collection: { title, items }, history }) => {
  return (
    <div className="collection-page">
      <ScrollToTop />
      <div className="preview-header">
        <h1 className="title">{title.toUpperCase()}</h1>
        <CustomButton
          inverted
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
