import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'

const rootReducer = combineReducers({
    books: BooksReducer
});
//key/value

export default rootReducer;