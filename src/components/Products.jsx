import React from 'react'
import Product from './Product';

const Products = ({products, onAddToCart}) => {
const product = products
const mappedProducts = product.map(product =>
  <Product 
  data = {product}
onAddToCart = {onAddToCart}/>
)
  return (
    <div className=" px-5 flex justify-center items-center flex-wrap gap-4 mt-4">
            {mappedProducts}
    </div>
  )
}

export default Products