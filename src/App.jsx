import { useState } from 'react';
import Navbar from "./components/Navbar";
import Bag from "./assets/img/bag.png";
import Imgbanner from "./assets/img/banner.jpg";
import Banner from "./components/Banner";


function App() {

  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <Navbar bag={Bag} />
      <Banner imgbanner={Imgbanner} />

    </div>
  )
}

export default App
