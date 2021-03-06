"use strict"

export function booksReducers(state={
	books: 	[{
		_id: 1,
		title: "this is the book title",
		description: 'this is the book description',
		price: 33.33
	},
	{
		_id: 2,
		title: "this is the second book title",
		description: 'this is the book description',
		price: 50
	}]
}, action){
	switch(action.type){
		case "GET_BOOKS": 

		return {...state, books:[...state.books]}
		break;


		case "POST_BOOK": 
		// let books = state.books.concat(action.payload);
		// return {books}

		// we could also use the spread operator to return the new state but we need bable-preset-stage1
		return {books:[...state.books, ...action.payload]}
		break;

		case "DELETE_BOOK":
		// create a copy of the current array of books
		const currentBookToDelete = [...state.books ]

		const indexToDelete = currentBookToDelete.findIndex(
			function(book){
				return book._id.toString() === action.payload;
			}
		)

		// use slice to remove the book at the specified index
		return {books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]}
		break;

		case "UPDATE_BOOK":
		// create a copy of the current array of books
		const currentBookToUpdate = [...state.books]

		const indexToUpdate = currentBookToUpdate.findIndex(
			function(book){
				return book._id === action.payload._id;
			}
		)

		// create a new book object with the new values and with the same array index of the item we want to replace. To achieve this we will use ...spread but we could use concat methods too

		const newBookToUpdate = {
			...currentBookToUpdate[indexToUpdate],
			title: action.payload.title
		}

		console.log("new updated book", newBookToUpdate);
		// use slice to remove  the book at the  specified index, replace with the new object  and concatenate the the rest of the items in the array

		return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]}
		break;
	}
	return state
}