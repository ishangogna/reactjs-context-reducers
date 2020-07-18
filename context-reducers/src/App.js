import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import NewBook from './components/NewBook';

function App() {
  return (
    <BookContextProvider>
      <div className="App">
        <Navbar />
        <NewBook />
      </div>
    </BookContextProvider>
  );
}

export default App;
