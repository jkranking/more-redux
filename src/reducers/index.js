"use strict"
import {combineReducers} from 'redux';
import {booksReducers} from './booksReducers';
import {cartReducers} from './cartReducers';

// here combine the reducers so we can have them under a single state object
export default combineReducers({
	books: booksReducers,
	cart: cartReducers
})