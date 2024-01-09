import React from 'react'
import { useParams } from 'react-router-dom'
 import { products } from '../backend/db/Products'
const Shop = () => {
   const {category}=useParams()
   console.log(products)
   const shopitem = products.filter(category=category)
   console.log(shopitem)
  return (
    <div>
      
    </div>
  )
}

export default Shop