import React, { useContext} from 'react';
import { BookContext } from '../../Contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext)
    return(
        <div className="navbar">
            <h1>Reading List </h1>
            <p>currently you have {books.length} books to get through ...</p>
        </div>
    )
   
}
 
export default Navbar;







