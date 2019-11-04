import React from "react";

import { connect } from 'react-redux';

import { AddItem } from '../../redux/cart/cart.action';

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>

      <div className="collection-footer">
        <span className="name"> {item.name} </span>
        <span className="price"> ${item.price} </span>
      </div>
        <button className='add-to-cart' onClick={() => addItem(item)}> Add To Cart </button>
    </div>
  );
};

const mapDispatchToProsp = dispatch => {
  return {
    addItem: item => dispatch(AddItem(item))
  }
}

export default connect(null, mapDispatchToProsp)(CollectionItem);
