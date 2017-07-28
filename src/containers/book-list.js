import React, { Component } from 'react'
import { connect } from 'react-redux'

//export default
class BookList extends Component {
    renderList() {
        return this.props.books.map(
            (book) => {
                return ( <
                    li key = { book.title }
                    className = "list-group-item" > { book.title } < /li>
                );
            }
        );

    }

    render() {
        //console.log(this.props.aaa);
        return ( <
            ul className = "list-group col-sm-4" > { this.renderList() } <
            /ul>
        );
    };
}
/*
function const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
*/
function mapStateToProps(state) {

    //whatever is returned will show up as props
    //inside of BookList
    return { books: state.books };
}

export default connect(mapStateToProps)(BookList);