
import {letters} from './helpers/letters'
import './App.css'
import { HangImage } from './components/HangImage'
import { useEffect, useState } from 'react'
import { getRandomWord } from './helpers/getRandomWord'

function App() {

  const [word, setWord] = useState(getRandomWord());

  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));

  const [ attempts, setAttempts] = useState(0); 

  const [ lose, setLose ] = useState(false);

  const [ won, setWon ] = useState(false);
  
  
  
  useEffect( () => {
    if (attempts >= 9){  
      setLose(true) 
    }
  }, [ attempts ] );
  
  
  
  useEffect( () => {

    const currentHiddenWord = hiddenWord.split(' ').join('');
    if (currentHiddenWord === word){
      setWon (true)
    }
  }, [ hiddenWord ])

  
  
  
  const checkLetter = ( letter: string ) => { 

    if ( lose ) return;
    if (won) return;
    if ( !word.includes(letter) ){
      setAttempts (  Math.min (attempts + 1, 9 ));
                        
      return;
    }
    
    
    const hiddenWordArray = hiddenWord.split(' ');

    console.log( hiddenWordArray );
    
    for ( let i = 0; i < word.length; i++){
      if (word[i] === letter){
        hiddenWordArray[i] = letter;
      }
    }

    
    setHiddenWord(hiddenWordArray.join(' '));
  }

    const newGame = () => {
      const newWord = getRandomWord();

      setWord( newWord ); 
      setHiddenWord( '_ '.repeat(newWord.length) );

      setAttempts ( 0 );
      setLose ( false );
      setWon ( false );
    }


  return (
     <div className="App">
      <h1 className="game-title">El juego del ahorcado</h1>
      {/* Esto es un comentario dentro del html de REACT (no es html en si)*/}

      {/* Imagenes*/}
      <HangImage imageNumber={attempts}/>

      {/*Palabra oculta*/}
      <h3> {hiddenWord} </h3>
      {/*y aca le pasamos la variable hiddenWord para que muestre lo que le habiamos puesto a la constante*/}

      {/*Contador de intentos*/}
      <h3>Intentos: { attempts } </h3>
      {/*Aca empezamos los intentos con nuestra variable para controlar/iterar los intentos*/}

      {/*Mensaje si perdio*/}
      {
        (lose) 
        ? <h2>Perdió {word}</h2> : ''
      }
      

      {/*Mensaje si gano*/}
      {
        (won) 
        ? <h2>Felicidades, usted gano</h2> : ''
      }

      {/*Botones de texto*/}
      {
        letters.map((letter) => (
          <button 
           className="btn-letter"
           onClick={ () => checkLetter(letter) }
          key={letter}>
            {letter}
            </button>
        ))
      }


      <br></br>
     <button className="btn-new-game" onClick={ newGame } > ¿Nuevo Juego? </button> 
      


  
     </div> 
  )
}

export default App

