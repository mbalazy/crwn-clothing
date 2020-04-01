import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsFetching } from '../../../redux/reducers/shop/shop.selectors';
import WithSpinner from '../../utils/with-spinner/with-spinner.component';

import CollectionOverview from './collection-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
