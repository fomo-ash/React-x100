import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(19)

  const addvalue = ()=>{
     
      if(counter<21){
         setCounter(counter+1)
      }
  }

  const removevalue = ()=>{
    if(counter>0){
    setCounter(counter-1)
    }
    
  }
  return (
    <>
      <h1>yes</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addvalue}
      >Add value {counter}</button>
      <br/>
      <button onClick={removevalue}>remove value: {counter}</button>

    </>
  )
}

export default App
