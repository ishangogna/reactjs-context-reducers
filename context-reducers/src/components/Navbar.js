import React, { useContext } from 'react';
import {BookContext} from '../contexts/BookContext';
const Navbar = () => {
    const { books } = useContext(BookContext);
    return books.length ? (
        books.map(book =>(
            <div className = 'book-list'>
                <div className = 'title'>{book.title}</div>
                <div className = 'author'>{book.author}</div>
            </div>
        ))
    ) : (
        <div>
            There are no books.
        </div>
    )
}
 
export default Navbar;