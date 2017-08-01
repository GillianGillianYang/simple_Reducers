import React , { Component } from 'react';
import { connect } from 'react-redux';

//container
//export default 
class BookDetail extends Component{

    

    // app first boots up, no book is select , this.props = null (本來是undefined )
    render(){
         
        this.state.aaa=1; // this is componet state
        //redux managing appliction state
        this.setState({test:'test' });

        if(!this.props.book){
            return <div>select a book to get started.</div>;
        }


        return (
            <div>
                <h3>Detail for</h3>
                <div>Title:{this.props.book.title}</div> 
                <div>Pages:{this.props.book.pages}</div> 
             </div>   
        );
    }

}

function mapStateToProps(state){
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);// see doc