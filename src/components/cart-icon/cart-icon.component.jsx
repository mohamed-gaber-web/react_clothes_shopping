import React from 'react';

// import { RactComponent as anyname } from path image upload;
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

import { connect } from 'react-redux';
import { toggleCartAction } from '../../redux/cart/cart.action';

import { cartItemsCount } from '../../redux/cart/cart.selector';


const CartIcon = props => (
    <div className="cart-icon" onClick={ props.toggleCartAction }>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{props.cartItemCount}</span>
    </div>
)


// use by reselect library to get state 
const mapStateToProps = state => {
    return {
        cartItemCount: cartItemsCount(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCartAction: () => dispatch(toggleCartAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);


/**
 * HOW TO MAKE IMAGE COMPONENT ??
 * upload image to folder assets
 * create component
 * import image from path upload image 
 * 
 */