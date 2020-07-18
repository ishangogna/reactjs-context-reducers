import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext'

const NewBook = () => {
    const { dispatch } = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type : 'ADD_BOOK', book: {title: title, author: author}})
        setTitle('');
        setAuthor('');
    }
    return ( 
        <form>
            <input type="text" value = {title} placeholder= 'Title' onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" value = {author} placeholder= 'Author'onChange = {(e)=>setAuthor(e.target.value)}/>
            <input type="submit" value = 'Add book!' onClick = {handleSubmit}/>
        </form>
     );
}
export default NewBook;