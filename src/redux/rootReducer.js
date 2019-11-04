import {combineReducers} from 'redux';

 import { persistReducer } from 'redux-persist';
 import storage from 'redux-persist/lib/storage';

import UserReducer from './UserReducer/user.reducer';
import CartReducer from './cart/cart.reducer';
import DirectoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// new config reducer
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // reducer to storage in browser
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
// export default rootReducer

/**
    HOW TO CREATE MERGE MORE REDUCER ??
    combineReducer => redux
    compineReducer({
        key: value{ reducer import }
    })

*/