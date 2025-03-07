import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../store/cartcontext'


export default function Singleproduct({item}) {
  const cart=useContext(CartContext)

 
  return (
    <div className='col-4 my-3'>

    <div className="card" >
         <h5 className="card-title text-center my-4">{item.title}</h5>
      <img src={item.image} style={{width:"100%", height:"300px"}} alt="..."/>
    
      <div className="card-body">
     
        
        <p className="card-text">{item.description.slice(0,50)+"..."}</p>
        <p>
          <span className='badge bg-warning'>{item.price}</span>
        </p>
        <Link to={`/productDetail/${item.id}`}  className="btn btn-primary mx-3" >show Details</Link>
        <a  onClick={()=>{
          cart.addtocart(item)}} className="btn btn-info">add to card</a>
          
        
      </div>
    </div>
        </div>
  )
}
