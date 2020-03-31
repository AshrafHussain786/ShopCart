import {cartReducer} from "./cartReducer";
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
    cart : cartReducer,
})