import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {
  // let counter=15;

let[counter ,setCounter]=useState(15);
  const addvalue=()=>{
    // console.log("value added ",Math.random());
    console.log("clicked", counter)
    // counter=counter+1;
    if(counter<20){
    setCounter(counter+1);
    }
    }

    let removevalue=()=>{

      if(counter>0){
      setCounter(counter-1);
      }
      
    }
  return (
    <>
  <h1>Chai aur react</h1>
  <h2> Counter value : {counter} </h2>

  <button onClick={addvalue}>Add value </button>
  <br/>
  <button onClick={removevalue}> remove value</button>
  </>
  )
}

export default App
