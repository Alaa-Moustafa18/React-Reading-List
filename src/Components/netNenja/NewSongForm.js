import React, { useState } from 'react';

const NewSongsForm = ( {addSong} ) => {
    const [title, setTitle] = useState('new song')
    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title)
        setTitle("");
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} name="title" onChange={ (e) => {setTitle(e.target.value)} }/>
            <input type="submit" value="submit" />
        </form>
     );
}
 
export default NewSongsForm;