import { createSelector } from 'reselect';

const shopSelect = state => state.shop;

export const collectionsSelect = createSelector(
    [shopSelect],
    collection => collection.collections
);