import React from 'react'


export default function Banner(props) {
    return (
        <div className='w-full relative h-screen flex justify-center items-end max-sm:h-[450px]'>
                <h1 className='text-7xl font-ahlan'>El Nabil</h1>
            <div className='w-full h-full absolute bg-cover bg-no-repeat bg-center -z-10 bg-[url("./assets/img/banner.jpg")] max-sm:bg-[-300px]'>
            </div>
        </div>
    )
}
