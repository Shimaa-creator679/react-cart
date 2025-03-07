import React from 'react'

import Productslist from "../components/product.js/productslist"
import { Pagetitle } from '../components/layout.js/pagetitle'
export default function Products() {
  return (
 <>

 <div className='container'>
  <div className='row mt-3'>
    <Pagetitle title="products page"/>
     <Productslist/>
  </div>
 </div>

 </>
  )
}
