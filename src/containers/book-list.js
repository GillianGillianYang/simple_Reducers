import React, { Component } from 'react'
import { connect } from 'react-redux' //connect the container with the state 
import { selectBook } from '../actions/index'; // action creator 
import { bindActionCreators } from 'redux'; //bind action creator  make sure it go through all the reducer


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

//anything return from this function will end up as props
//on the BookList container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be passed to all of ours reducers
    return
    bindActionCreators({ selectBook: selectBook }, dispatch);
    // selectBook -> this.props.selectBook
}


//Promote BookList from a component to a container - it needs to 
//know about this new dispatch method,selectBook. Make it available as a prop.

//export default connect(mapStateToProps)(BookList);
export default connect(mapStateToProps, mapDispatchToProps)(BookList);