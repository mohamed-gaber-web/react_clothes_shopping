import React from "react";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { cartItemsSelector, CartItemsTotalPrice } from '../../redux/cart/cart.selector';

import { removeItemFromCart } from '../../redux/cart/cart.action';

import StripeButton from '../../components/button-payment/stripe.component'; // component stripe button

import './checkout.styles.scss';

const CheckoutPage = ({ CartItems, CartItemsTotalPrice, removeItem }) => (
    <div className="checkout-page">
        <table className="table">
            <thead>
                <th> Image </th>
                <th> Product </th>
                <th> Quantity </th>
                <th> price </th>
                <th> Remove </th>
            </thead>

            <tbody>
                {
                    CartItems.map(cartItem => 
                    <tr>
                        <td> <img src={cartItem.imageUrl} alt={cartItem.name} className="img-price" /> </td>
                        <td> {cartItem.name} </td>
                        <td> {cartItem.quantity} </td>
                        <td> ${cartItem.price} </td>
                        <td><button onClick={ () => removeItem(cartItem) }>&#10005;</button></td>
                    </tr>
                        
                    )
                }

            </tbody>
        </table>
            <h1 className="total-price"> TOTAL : ${ CartItemsTotalPrice } </h1>

            <div className="stripe__button">
                <StripeButton price={CartItemsTotalPrice} />
                <p> used Data test: 42424 42424 4242 42424 - EXP: 01/20 CVV: 123 </p>
            </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    CartItems: cartItemsSelector,
    CartItemsTotalPrice: CartItemsTotalPrice
});

const mapDispatchToProps = dispatch => {
    return {
        removeItem: item => dispatch(removeItemFromCart(item))
    }
}

export default connect( mapStateToProps ,mapDispatchToProps)(CheckoutPage);


/**
 * createStructuredSelector used to get selector from file selector
 * createStructuredSelector({
 *  key: selector
 * })
 * removeItem(cartItem) update to CartItems[]
 */