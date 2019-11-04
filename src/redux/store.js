import { createStore, applyMiddleware } from 'redux';

import { persistStore } from "redux-persist"; // install redux-persist library

import logger from 'redux-logger';

import rootReducer from './rootReducer'; // all reducers project

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persiststore = persistStore(store);

// export default {store, persiststore};

// export default store;


/**
    CONFIG STORE
    createStore, applyMiddleware => redux
    logger => redux-logger used to reporting how to work redux to project
    store to connect in provider to index.js
    redux-persist library to used storage data to local browser
*/  