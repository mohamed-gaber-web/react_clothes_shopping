import { dataCollection } from './shop.data';

const INIIT_STATE = {
    collections: dataCollection
}

const shopReducer = (state = INIIT_STATE, action) => {
    switch(action.type){

        default:
            return state;
    }
}

export default shopReducer;