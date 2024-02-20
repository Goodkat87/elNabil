import React from 'react'



export default function Navbar(props) {
    return (
        <div className='w-full'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl font-ahlan">El Nabil</a>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <img src={props.bag} alt="bag" />
                    </button>
                </div>
            </div>
        </div>
    )
}
