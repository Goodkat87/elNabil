import React from 'react'

export default function SideBar(props) {
  return (
    <div className={`w-full h-screen -right-full fixed flex justify-end items-end z-50 backdrop-blur-sm ${props.side && '-translate-x-full'} duration-[1.5s]`}>
      <div className="w-[600px] h-[95%] bg-primary-content relative bg-no-repeat bg-contain bg-center flex flex-col justify-center items-center max-sm:w-full max-sm:h-screen">
        <img src="./src/assets/img/sidebarbg.jpg" className='h-full w-full absolute top-0 z-0' alt=""/>
        <p className='z-50'>zdqqzd</p>
      </div>
    </div>
  )
}
