import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {remove} from '../store/cartSlice'

function Cart() {

  const dispatch = useDispatch();

  const products = useSelector((state)=>state.Cart)

  const handleRemove = (productid) => {
    dispatch(remove(productid))
  }

  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
          {
             products.map((product)=>(
                <div className='cartCard' key={product.id}>
                    <img src={product.image} alt="" />
                    <h5>{product.title}</h5>
                    <h5>{product.price}</h5>
                    <button className='btn' onClick={() => handleRemove(product.id)}>Remove from cart</button>
                </div>
             )) 
          }
      </div>
    </div>
  )
}

export default Cart