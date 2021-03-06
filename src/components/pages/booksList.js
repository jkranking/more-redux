"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';
import {Grid, Col, Row, Button} from 'react-bootstrap';

import Cart from './cart';
import BookItem from './bookItem';
import BooksForm from './booksForm';

class BooksList extends React.Component {

	componentDidMount(){
		//Dispatch an action
		this.props.getBooks();
	}

	render(){
		const booksList = this.props.books.map(function(booksArray){
			return(
				<Col xs={12} sm={6} md={4} key={booksArray._id}>
					<BookItem
						_id={booksArray._id}
						title={booksArray.title}
						description={booksArray.description}
						price={booksArray.price} />
				</Col>
			)
		})
		return(
			<Grid>
				<Row>
					<Cart />
				</Row>
				<Row>
					<Col xs={12} sm={6}>
						<BooksForm />
					</Col>
					{booksList}
				</Row>
			</Grid>
		)
	}
}

function mapStateToProps(state){
	return{
		books: state.books.books
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getBooks:getBooks
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList); 
