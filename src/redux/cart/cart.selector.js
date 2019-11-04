import { createSelector } from 'reselect';

const cartSelect = state => state.cart; // cartSelect == enter to cart reducer

// Cart Item Selector cartItems = []
export const cartItemsSelector = createSelector(
    [cartSelect],
    cart => cart.cartItems // cartItems State === []
);

// state hidden property
export const hiddenSelector = createSelector(
    [cartSelect],
    hiddenSelect => hiddenSelect.hidden
);


// Cart Item Quantity 
export const cartItemsCount = createSelector(
    [cartItemsSelector],
    cartItems => cartItems.reduce((accCart, cartItems)=> {
        return accCart + cartItems.quantity // all values in cart + quantity
    }, 0)
);

// Cart Item Total Price
export const CartItemsTotalPrice = createSelector(
    [cartItemsSelector],
    CartItemsTotalPrice => CartItemsTotalPrice.reduce((accCart, cartItem) => {
        return accCart + cartItem.quantity * cartItem.price // all values in cart + quantity * price
    }, 0)
);


/**
    RESLECT REDUX LIBRARY 
    used to create and select more selector from state and use to mapStateToProps With state
    
    -- selector(state)
    -- createStructuredSelector

    EXP : key: selectorMethod(state)
*/