import React, {useState} from 'react';
import './App.css';
import s0 from './img/s0.jpg';
import s1 from './img/s1.jpg';
import s2 from './img/s2.jpg';
import s3 from './img/s3.jpg';
import s4 from './img/s4.jpg';
import s5 from './img/s5.jpg';
import s6 from './img/s6.jpg';
import s7 from './img/s7.jpg';
import s8 from './img/s8.jpg';
import s9 from './img/s9.jpg';

function App() {
  const array = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'Ś', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ż', 'Ź'];
  const images = [s0, s1, s2, s3, s4, s5, s6, s7, s8, s9];
  const sentences = [
    'Nie zadzieraj nosa',
    'Gość w dom Bóg w dom',
    'Bez pracy nie ma kołaczy',
    'Fortuna kołem się toczy',
    'Nie chwal dnia przed zachodem słońca',
    'Apetyt rośnie w miarę jedzenia',
    'Co nagle to po diable',
    'Broda mędrcem nie czyni',
    'Gdy kota nie ma myszy harcują',
    'Kto mieczem wojuje ten od miecza ginie',
    'Kto pyta nie błądzi',
    'Nosił wilk razy kilka ponieśli i wilka',
    'Ściany mają uszy',
    'Z dużej chmury mały deszcz',
    'Co ma wisieć nie utonie',
    'Grosz do grosza a będzie kokosza',
    'Baba z wozu koniom lżej',
    'Bez boga ani do proga',
    'Jak u Pana Boga za piecem',
    'Przez żołądek do serca',
    'Darowanemu koniowi w zęby się nie zagląda',
    'Kuć żelazo póki gorące'
  ];
  const [password] = useState(sentences[Math.floor(Math.random() * sentences.length)]);
  const [pswd, setPswd] = useState(convertPswdToHidden(password));
  const [imgCounter, setImgCounter] = useState(1);
  const [win, setWin] = useState(false);

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
      if (char === password.charAt(i).toUpperCase()) {
        array[i] = char;
        document.getElementById('letter' + char).setAttribute("disabled", true);
      }
    }
    setPswd(convertToString(array));
      
    if (!document.getElementById('letter' + char).getAttribute("disabled")) {
      document.getElementById('image').src = images[imgCounter];
      setImgCounter(imgCounter + 1);
    }

    document.getElementById('letter' + char).style.color = 'rgb(50, 50, 50)';
    document.getElementById('letter' + char).style.borderColor = 'rgb(50, 50, 50)';
    document.getElementById('letter' + char).style.cursor = 'default';
    document.getElementById('letter' + char).setAttribute("disabled", true);

    if (convertToString(array) === password.toUpperCase()) setWin(true);
  }

  function endGame() {
    return (
      <div className='App-end-container'>
        {win ?
          <p className='App-win'>Gratulacje! Udało Ci się odgadnąć hasło.</p> :
          <p className='App-lose'>Niestety nie udało Ci się odgadnąć hasła.</p>
        }
        <p className='App-again' onClick={reloadPage}>Jeszcze raz?</p>
      </div>
    );
  }

  function reloadPage() {
    window.location.reload(false);
  }

  return (
    <div className='App border'>
      <div id='pswd' className='App-pswd'>
        {pswd}
      </div>
      <div className='App-container'>
        <div className='App-img'>
          <img id='image' src={images[0]} alt='wisielec' />
        </div>
        <div id='alphabet' className='App-alph border'>
          {(imgCounter > 9 || win) ? endGame() :
            array.map((value) => {
            return(
              <div id={'letter' + value} className='App-letter' onClick={() => checkLetter(value)}>
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
