import { useState } from 'react'
import data from "./assets/json/data.json"
import Card from './components/Card'
import Footer from './components/Footer'
import Copyright from './components/Copyright'

function App() {

  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <div className='w-11/12 h-max flex flex-wrap justify-center gap-3 pb-32'>
        {data.map(function(item) {
          return (
            <Card item={item}></Card>
          )
        })}
      </div>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  )
}

export default App
