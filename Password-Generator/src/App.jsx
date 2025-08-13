import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numallow, setNumallow]= useState(false)
  const [charallow, setcharAllow]= useState(false)
  const[ password, setPassword]= useState("")

  const passwordGenerator = useCallback(()=>{
    let pass= ""
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallow){
      string+="1234567890"
    }
    if(charallow){
      string+="!@#$%^&*()"
    }

    for(let i=1; i<=length; i++){
      let char= Math.floor(Math.random()*string.length+1)
      pass += string.charAt(char)
    }

    setPassword(pass)
  },[length, numallow, charallow])

  useEffect(()=>{
    passwordGenerator()
  },[length, numallow, charallow])
  return (
    <> 
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type='text' value={password} className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly />

      </div>
      <div className='flex items-center gap-4'>    <div className='flex items-center gap-x-1'>
         <input 
        type="range"
        min={9}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>length:{length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type='checkbox' defaultChecked={numallow} onChange={()=>{
          setNumallow((prev)=>!prev)
        }}/>
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex-items-center gap-x-1'>
        <input type='checkbox'
        defaultChecked={charallow}
        onChange={()=>{
          setcharAllow((prev)=>!prev)
        }}/>
       <label htmlFor="characterInput">Characters</label>
      </div>
      </div>  
     </div>
    </>
  )
}

export default App
