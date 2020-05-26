import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App border">
      <div id='pswd' className="App-pswd">hasło do odgadnięcia</div>
      <div className='App-container'>
        <div id='image' className="App-img border">obrazek</div>
        <div id='alphabet' className="App-alph border">alfabet</div>
      </div>
    </div>
  );
}

export default App;
