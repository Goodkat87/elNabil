import { useState } from 'react';
import data from "./assets/json/data.json"
import Navbar from "./components/Navbar";
import Imgbanner from "./assets/img/banner.jpg";
import Card from './components/Card'
import Footer from './components/Footer'
import Copyright from './components/Copyright'
import Banner from "./components/Banner";
import Bag from "./assets/img/bag.png";

function App() {

  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <Navbar bag={Bag} />
      <Banner imgbanner={Imgbanner} />

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
