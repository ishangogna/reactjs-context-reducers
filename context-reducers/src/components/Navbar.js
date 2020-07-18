import React, { useContext } from 'react';
import {BookContext} from '../contexts/BookContext';
import BookDetails from './BookDetails';
const Navbar = () => {
    const { books, dispatch } = useContext(BookContext);
    return books.length ? (
        books.map(book =>(
            <div key = {book.id} className = 'book-list'>
                <BookDetails book = {book}/>
            </div>
        ))
    ) : (
        <div>
            There are no books.
        </div>
    )
}
 
export default Navbar;