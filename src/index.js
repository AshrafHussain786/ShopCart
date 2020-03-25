import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

const InitialState = {
    cart_quantity : 1,
    products : [
        {
            id : 1,
            title : "Sun Glasses",
            price : 22.00
        },
        {
            id : 2,
            title : "Black T-shirt",
            price : 28.00
        },
        {
            id : 3,
            title : "Blue Jeans",
            price : 33.00
        }
    ],
    cart : [
        {
            quantity: 1,
            product: {
                id : 3,
                title : "Blue Jeans",
                price : 33.00
            },
            total: 33.00
        }
    ],
}

const reducers = (state = InitialState, action) => {
    switch (action.type){
        case "ADD_TO_CART":
            return {
                ...state,
                cart_quantity: action.payload.cart_quantity,
                cart: action.payload.cart
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart_quantity: action.payload.cart_quantity,
                cart: action.payload.cart
            }
        case "DELETE_FROM_CART":
            return {
                ...state,
                cart_quantity: action.payload.cart_quantity,
                cart: action.payload.cart
            }
        default:
            return state;
    }
}

const store = createStore(reducers, InitialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
     document.getElementById('root'));
