import React, { useEffect, useState } from 'react'
import Singleproduct from './singleproduct'
import axios from 'axios'

export default function Productslist() {

  const[products,setproducts]=useState([]);
  
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((data)=>setproducts(data.data))

   
   } ,[])


  return (
 <>
 {products.length<1 ?<h1 className='text-center'>loading</h1> :products.map((item)=>{

  return  <Singleproduct key={item.id} item={item}/>;
})}



 </>

  )
}



