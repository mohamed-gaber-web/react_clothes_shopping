import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import {store, persiststore} from './redux/store';
// import store from './redux/store';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(

    <Provider store={ store }>
        <BrowserRouter>
            <PersistGate persistor={persiststore}> 
                <App /> 
            </PersistGate>
            {/* <App /> */}
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));


/**
    Provider Component => connect redux with react
    PersistGate component 
    persistor={ persiststore from store file }    
*/
