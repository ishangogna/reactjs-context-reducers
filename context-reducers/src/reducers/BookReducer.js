import React from 'react';

const BookReducer = (state,action) => {
    switch(action.type){
        case 'ADD_BOOK':
            return [...state,{
                title : action.book.title,
                author : action.book.author
            }]
    }
}
 
export default BookReducer;