import React from 'react';
import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item.component';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';

const CollectionPreview = ({
  collection: { title, items, routeName },
  history,
  match
}) => {
  return (
    <div className="collection-preview">
      <div className="preview-header">
        <h1 className="title">{title.toUpperCase()}</h1>
        <CustomButton
          onClick={() => {
            history.push(`${match.path}/${routeName}`);
          }}
        >
          See more
        </CustomButton>
      </div>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
