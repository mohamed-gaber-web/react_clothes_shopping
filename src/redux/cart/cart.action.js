import { cartActionType } from './cart.types';

export const toggleCartAction = () => {
    return {
        type: cartActionType.CART_HIDDEN_DROPDOWN
    }
}

export const AddItem = item => {
    return {
        type: cartActionType.ADD_ITEM_TO_CART,
        payload: item
    }
}

export const removeItemFromCart = item => {
    return {
        type: cartActionType.REMOVE_ITEM_FROM_CART,
        payload: item
    }
}