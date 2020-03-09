import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectIsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.values(collections)
);

export const selectCollection = collectionRoute =>
  createSelector([selectCollections], collections =>
    collections ? collections[collectionRoute] : null
  );

export const selectIsCollectionsLoading = createSelector(
  [selectShop],
  shop => !!shop.collections
);
