import React, { useContext } from 'react'
import{CartContext}from "../store/cartcontext"
import { Pagetitle } from '../components/layout.js/pagetitle';

import Alertcomponent from '../components/alert';

export default function Cart() {

  const cart=useContext(CartContext);

  return (
    <div className='cart'>

 <div className='container '>
      <div className='row'>
        <div className='col-12'>
          <Pagetitle title="page card "/>
          {cart.cartitems<1?<h1 className='text-center my-5 text-bg-success'>not products found</h1>:      <table className=' table table-bordered'>
            <thead>
              <tr>
                <th>title</th>
                <th>price</th>
                <th>quantitty</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>

              {cart.cartitems.map((item)=>{
                return      <tr>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          <td><bautton className="btn btn-primary" onClick={()=>{
            cart.handledelete(item)
cart.setquantity(0);


cart.setalert(true);
          }}  >delete</bautton></td>
        
              </tr>
              })}
   
            </tbody>
          </table>}
    
        </div>
       
      </div>
      
    </div>
    {cart.alert?( <Alertcomponent />):("")}
 

    </div>

   
  )
}
