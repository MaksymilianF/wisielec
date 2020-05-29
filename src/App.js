import React, {useState} from 'react';
import './App.css';
import s0 from './img/s0.jpg';
// import s1 from './img/s1.jpg';
// import s2 from './img/s2.jpg';
// import s3 from './img/s3.jpg';
// import s4 from './img/s4.jpg';
// import s5 from './img/s5.jpg';
// import s6 from './img/s6.jpg';
// import s7 from './img/s7.jpg';
// import s8 from './img/s8.jpg';
// import s9 from './img/s9.jpg';

function App() {
  const array = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'Ś', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ż', 'Ź'];
  const password = 'Lepszy wróbel w garści niż gołąb na dachu';
  const [pswd, setPswd] = useState(convertPswdToHidden(password));

  function convertToArray(password) {
    let pswdArray = [];
    for (let i = 0; i < password.length; i++) {
      pswdArray[i] = password.charAt(i);
    }
    return pswdArray;
  }

  function convertToString(array) {
    let string = '';
    for (let i=0; i < array.length; i++) {
      string = string + array[i];
    }
    return string;
  }

  function convertPswdToHidden(password) {
    let string = '';
    for (let i=0; i < password.length; i++) {
      (password.charAt(i) === ' ') ? string = string + ' ' : string = string + '-';
    }
    return string;
  }

  function checkLetter(char) {
    let array = convertToArray(pswd);
    for (let i=0; i < password.length; i++) {
      if (char === password.charAt(i).toUpperCase()) array[i] = char;
    }
    setPswd(convertToString(array));
  }

  return (
    <div className='App border'>
      <div id='pswd' className='App-pswd'>
        {pswd}
      </div>
      <div className='App-container'>
        <div id='image' className='App-img'>
          <img src={s0} alt='wisielec' />
        </div>
        <div id='alphabet' className='App-alph border'>
          {array.map((value) => {
            return <div className='App-letter' onClick={() => checkLetter(value)}>{value}</div>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
