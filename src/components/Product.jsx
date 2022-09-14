import React from 'react'
import {BsCart4} from 'react-icons/bs'

const Product = ({data, onAddToCart}) => {
  return (
    <div className= "w-52 flex flex-col shadow-md h-64">
<img alt= "sike i lied" src={data.image.url} className="h-36"/>
<div className="justify-between flex px-3">
<h3 className="text-md font-bold">{data.name}</h3>
<h3  className="text-md">{data.price.formatted_with_symbol} </h3>
</div>
<p dangerouslySetInnerHTML={{__html:data.description}} className="text-xs px-3"/>
<BsCart4 onClick={() => {onAddToCart(data.id, 1)}} className="my-auto"/>

    </div>
  )
}

export default Product