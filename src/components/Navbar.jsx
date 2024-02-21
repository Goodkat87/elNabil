import React from 'react'



export default function Navbar(props) {
    return (
        <div className='w-full'>
            <div className="navbar bg-base-100 fixed z-50">
                <div className="flex-1">
                    <div className="text-5xl font-ahlan">El Nabil</div>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost relative" onClick={()=>{props.side ? props.setSide(false) : props.setSide(true)}}>
                        <img src={props.bag} alt="bag"/>
                        <span className="indicator-item badge top-0 -right-2 absolute">{props.added}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
