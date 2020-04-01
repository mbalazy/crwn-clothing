import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsFetching } from '../../redux/reducers/shop/shop.selectors';
import WithSpinner from '../../components/utils/with-spinner/with-spinner.component';

import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
