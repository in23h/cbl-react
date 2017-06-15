import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../actions';

class Books extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  renderBooks() {
    return _.map(this.props.books, book => {
      return (
        <li key={book.id}>
          <Link to={`/books/${book.id}`}>
            {book.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Carl Barks Library</h3>
        <ul>
          {this.renderBooks()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { books: state.books };
}

export default connect(mapStateToProps, { fetchBooks })(Books);
