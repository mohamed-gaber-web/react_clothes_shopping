export const addItemToCart = (cartItems, cartItemToAdd) => {

    // if check items exist to equal item to add
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem    
        )
        // [ ...item, quantit: 1 ] or [ ...the same item, quantit: 3 ]  
    }
    return [ ...cartItems, {...cartItemToAdd, quantity: 1} ]
    // [ ...item add, quantity: 1 ]
}




/**
 * how to add multiple items to cart and not repeat items 
 * add quntity tp cart
 * CARTITEMS - ITEMTOADDNOW
 *  find() return first value from items of array
 */