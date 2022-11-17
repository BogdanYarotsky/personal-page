import React from 'react';
import photo from './myPhoto.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="App-logo" alt="logo" />
        <p>
          Home page of Bogdan Yarotsky
        </p>
      </header>
    </div>
  );
}

export default App;
