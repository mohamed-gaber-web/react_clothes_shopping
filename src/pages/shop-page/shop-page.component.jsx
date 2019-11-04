import React from "react";

import { connect } from 'react-redux';

import { collectionsSelect } from '../../redux/shop/shop.selector';

import { createStructuredSelector } from 'reselect';

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = ({ collections }) => {

    return (
      <div className="shop-page">
        {collections.map(({ id, ...collectionItem }) => {
          return (
            <div>
              <CollectionPreview key={id} {...collectionItem} />
            </div>
          );
        })}
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  collections: collectionsSelect
})

export default connect(mapStateToProps)(ShopPage);
