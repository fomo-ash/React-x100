import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("red")

  return (
    <>
      <div className="w-full h-screen " style= {{backgroundColor: color}}>
        <div className='flex gap-4 top-12 justify-center'>
          
          <button className='bg-blue-500 text-white px-4 py-2 rounded'
          onClick={()=>setColor("blue")}
          > Blue</button>
          <button className='bg-black text-white px-4 py-2 rounded'
           onClick={()=>setColor("black")}> Black</button>
          <button className='bg-purple-500 text-white px-4 py-2 rounded'
           onClick={()=>setColor("purple")}> Purple</button>
          <button className='bg-green-500 text-white px-4 py-2 rounded'
           onClick={()=>setColor("green")}
          > Green</button>
          <button className='bg-pink-500 text-white px-4 py-2 rounded'
           onClick={()=>setColor("pink")}
          > Pink</button>
        </div>
      </div>
    </>
  )
}

export default App
