import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    username: 'Raf',
    age: 99
  }
  let newArr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-9'>Talwind</h1>

     <Card username='AvN' somlife={newArr} someObje= {myObj}></Card>
     <Card username='NvA' somlife={newArr} someObje= {myObj}></Card>
    </>

  )
}

export default App
