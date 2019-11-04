import React from 'react';

import './cart-dropdown.styles.scss';

import { connect } from 'react-redux';
import { toggleCartAction } from '../../redux/cart/cart.action';

import { withRouter } from 'react-router-dom';

import { cartItemsSelector } from '../../redux/cart/cart.selector';

import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className='cart-items'>
            {
                cartItems.length ? (
                cartItems.map(item => <CartItem 
                    name={item.name} 
                    price={item.price}
                    quantity={item.quantity}
                    imageUrl={item.imageUrl}
                    key={item.id} 
                    />
                ))
                : ( <span className="empty-message"> Your Cart Is Empty </span> )
            }
        </div>
            <button onClick={() => {
                history.push("/checkout");
                dispatch(toggleCartAction())
        }}> Go To CheckOut </button>
    </div>
);

const mapStateToProps = state => {
    return {
        cartItems: cartItemsSelector(state)
    }
}

export default withRouter(connect(mapStateToProps)(CartDropdown));



/**
 * create component cart-dropdown [ component - styles ]
 * import to header
 * HOW TO HIDE AND SHOW DROPDOWN CART ???
 * dir redux => action file - reducer file - type file
 * LIKE => create dir cart => cart.action.js / cart.reducer.js /cart.type.js
 * withRouter from react-router-dom used to use [ history-location- other] to component
 * disptach short cut => dispatch like match and history dispatch(action name)                                     
 */