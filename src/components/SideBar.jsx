import React from 'react'

export default function SideBar(props) {
  return (
    <div className={`w-full h-screen -right-full fixed flex justify-end items-end z-50 backdrop-blur-sm ${props.side && '-translate-x-full'} duration-[1.5s]`}>
      <div className="w-[600px] h-[95%] bg-primary-content bg-[url('./assets/img/sidebarbg.jpg')] relative bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center max-sm:w-full max-sm:h-screen">
        <div className='w-3/4'>
          <p>dqzdqdqzd</p>
        </div>
      </div>
    </div>
  )
}
