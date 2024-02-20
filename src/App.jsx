import { useState } from 'react'
import data from "./assets/json/data.json"
import Card from './components/Card'

function App() {

  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <div className='w-11/12 h-max flex flex-wrap justify-center gap-3'>
        {data.map(function(item) {
          return (
            <Card item={item}></Card>
          )
        })}
      </div>
    </div>
  )
}

export default App
