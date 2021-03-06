"use strict"
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';


import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';

// import actions
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

// step 1 create the store

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);


import BooksList from './components/pages/booksList';
import Menu from './components/menu';

render(
	 <Provider store={store}>
	 	<div>
	 		<BooksList />
	 	</div>
	 </Provider>, document.getElementById('app')
);

// step 2 create and dispatch actions

// book actions
// store.dispatch(postBooks(
// 	[{
// 		id: 1,
// 		title: "this is the book title",
// 		description: 'this is the book description',
// 		price: 33.33
// 	},
// 	{
// 		id: 2,
// 		title: "this is the second book title",
// 		description: 'this is the book description',
// 		price: 50
// 	}]
// ))

// store.dispatch(deleteBooks(
// 	{id: 1}
// ))

// store.dispatch(updateBooks(
// 	{	
// 		id: 2,
// 		title: "updated book title"
// 	}
// ))

// // cart actions

// store.dispatch(addToCart([{id: 1}]))
