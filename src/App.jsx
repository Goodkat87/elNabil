import { useState } from 'react'
import Navbar from "./components/Navbar";
import Bag from "./assets/img/bag.png"

function App() {

  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <Navbar bag={Bag} />

    </div>
  )
}

export default App
