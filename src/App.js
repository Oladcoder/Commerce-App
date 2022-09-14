import './App.css';
import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import Products from './components/Products';
import {commerce} from './lib/commerce'


function App() {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const getProducts = async () => {
const {data} = await commerce.products.list()
setProducts (data)
  }

const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }
  
const HandleCart = async (productID, quantity) => {
  const item = await commerce.cart.add(productID, quantity);

  setCart(item)
  }

useEffect(() => {
    getProducts()
    fetchCart()

  }, [])

  console.log(cart)
  return (
    <div>

<Navbar 
cartNumber = {cart.total_items}/>
<Products 
products = {products}
onAddToCart = {HandleCart}/>

    </div>
  )
}

export default App;
