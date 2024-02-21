import React, {useEffect} from 'react'

export default function SideBar(props) {
  return (
    <div className={`w-full h-screen -right-full fixed flex justify-end items-end z-50 backdrop-blur-sm ${props.side && '-translate-x-full'} duration-[1.5s]`}>
      <div className="w-[600px] h-[95%] bg-neutral relative bg-no-repeat bg-contain bg-center flex flex-col pt-10 items-center max-sm:w-full max-sm:h-screen">
        <p className='z-50 font-ahlan text-8xl'>EL NABIL</p>
        <hr className='border w-full border-current' />
        <p className='z-50 pb-5 pt-5'>SOLDE RESTANT: {props.solde}€</p>
        <ul className='w-full flex flex-col gap-2'>
          {props.cart.map(function(item, key) {
            return (
                item.quantity>0
                &&
                <li key={key} className=' flex justify-center gap-5 items-center '>{item.name} {item.price}€ x{item.quantity} 
                <button className=" rounded-full btn-outline btn-circle  flex justify-center items-center text-2xl" onClick={()=>{props.add(item)}}>+</button>
                <button className=" rounded-full btn-outline btn-circle  flex justify-center items-center text-2xl" onClick={()=>{props.discard(item)}}>-</button>
                </li>              
            )
          })}
        </ul>

      </div>
    </div>
  )
}
