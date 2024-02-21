import React from 'react'

export default function Card(props) {
  return (
    <div className="group w-[30%] h-[30%] relative overflow-hidden gap-1 max-sm:w-36 max-sm:h-36">
      <img src={props.item.image} alt="parfum" className='h-full w-full group-hover:scale-110 group-hover:transition group-hover:duration-[2s] group-hover:ease-in-out'/>
      <div className='flex flex-col gap-3 items-center justify-end pb-5 h-full w-full absolute z-10 bg-gradient-to-t from-black to-transparent group-hover:-translate-y-full group-hover:transition group-hover:duration-700 group-hover:ease-in-out'>
        
        <p className='max-sm:text-xs'>{props.item.name} - {props.item.price}€</p>
        <p className='max-sm:text-xs'>Stock : {props.item.stock}</p>

        {
          props.item.stock > 0 
          ?
          <button className='btn btn-ghost max-sm:btn-xs' onClick={()=>{props.add(props.item)}}>Ajouter au panier</button>
          :
          <button disabled className='btn btn-ghost max-sm:btn-xs'>Ajouter au panier</button>
        }

      </div>
    </div>
  )
}
