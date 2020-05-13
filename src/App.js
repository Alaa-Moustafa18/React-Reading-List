import React, { Component } from 'react';
import  Navbar from './Components/netNenja/Navbar';
import BookContextProvider from './Contexts/BookContext';
import BookList from './Components/netNenja/BookList';
import NewFormBook from './Components/netNenja/NewBookForm';

class App extends Component {  
render(){
  return (

    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList />
        <NewFormBook />
      </BookContextProvider>     
    </div>    
  )
}
}

export default App;
