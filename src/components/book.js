import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBook } from '../actions';

class Book extends Component {
  componentDidMount() {
    if (!this.props.book) {
      const { id } = this.props.match.params;
      this.props.fetchBook(id);
    }
  }

  render() {
    const { book } = this.props;

    if (!book) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to Library</Link>
        <h3>{book.title}</h3>
        <p>{book.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ books }, ownProps){
  return { book: books[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchBook })(Book);
