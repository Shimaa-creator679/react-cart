import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../store/cartcontext';

const ProductDetail = () => {
  const [productdetail,setproductdetail]=useState({});
  const cart=useContext(CartContext);


  const param=useParams();

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/"+param.id )
    .then((data)=>{
    setproductdetail(data.data)
    },[])
  })
  return (
    <div className='container'>
      <div className='row'>
      <div className='col-4 my-3 mx-auto'>

<div className="card" >

  <img src={productdetail.image} style={{width:"100%", height:"300px"}} alt="..."/>

  <div className="card-body">
 
    
    <p className="card-text">{productdetail.description}</p>
    <p>
      <span className='badge bg-warning'>{productdetail.price}</span>
    </p>
    
    <a  className="btn btn-info" onClick={()=>{
      cart.addtocart(productdetail)
      console.log("produgth");
    }}>add to card</a>
  </div>
</div>
    </div>
      </div>
    </div>
  )
}

export default ProductDetail


