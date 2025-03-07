import React, { useContext } from 'react'
import { CartContext } from '../store/cartcontext'

const Alertcomponent = () => {
  const cart=useContext(CartContext)
   
  return (
    <div className='alertt'>
<h2 className='text-center '>the item was deleted</h2>
<button onClick={()=>{
cart.setalert(false)
}}>ok</button>
    </div>
  )
}

export default Alertcomponent