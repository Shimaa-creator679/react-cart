import React from 'react'

const Alertcomponent = ({alert,setalert}) => {
   
  return (
    <div className='alertt'>
<h2 className='text-center '>the item was deleted</h2>
<button onClick={()=>{
setalert(false)
}}>ok</button>
    </div>
  )
}

export default Alertcomponent