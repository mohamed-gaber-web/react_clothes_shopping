import {cartActionType} from './cart.types'; 

import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = INITIAL_STATE, action) => {
    
    switch(action.type){
        case cartActionType.CART_HIDDEN_DROPDOWN: // change by to action create
            return{
                ...state, // [ state ]
                hidden: !state.hidden // update to state setState({ hidden: !this.state.hidden })

            }

        case cartActionType.ADD_ITEM_TO_CART:
            return{
                ...state,
                // cartItems: [...state.cartItems, action.payload]
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
            
        case cartActionType.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }    
        
        default: // else
            return state;    
    }
}

export default CartReducer;



/**
    create state and update on state
    
    add     => cartItems[items]
    remove  => cartItems[ item ]
*/


