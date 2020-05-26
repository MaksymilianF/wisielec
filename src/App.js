import React from 'react';
import './App.css';
import s0 from './img/s0.jpg';

function App() {
  return (
    <div className="App border">
      <div id='pswd' className="App-pswd">hasło do odgadnięcia</div>
      <div className='App-container'>
        <div id='image' className="App-img border">
          <img src={s0} alt='wisielec' />
        </div>
        <div id='alphabet' className="App-alph border">alfabet</div>
      </div>
    </div>
  );
}

export default App;
