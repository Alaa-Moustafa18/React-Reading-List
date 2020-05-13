import React, {  useContext } from 'react';
import { BookContext } from '../../Contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const { books } = useContext(BookContext)
    return books.length ?(
        <div className="book-list">
            <ul>
            { 
                books.map( book => {
                    return(

                        <BookDetails key={book.id} book={book} />
                    )
                })
            }
            </ul>
        </div>
    ): (
    <p className="empty"> your reading list is empty, Hello free time :).</p>
    )
}
export default BookList;

// import React, { useContext } from 'react';
// import { BookContext } from '../../Contexts/BookContext';
// import BookDetails from './BookDetails';

// const BookList = () => {
//     const { books } = useContext(BookContext)
//     return books.length ?( 
//         <div className="book-list">
//             <ul>
//                 {
//                     books.map(book => {
//                         <BookDetails key={book.id} book={book}/>
//                     })
//                 }
//             </ul>
//         </div>
//          ): (
//             <p className="empty">you have no books to read.</p>
//         )
// }
 
// export default BookList;