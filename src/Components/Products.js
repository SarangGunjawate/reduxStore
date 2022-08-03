import React, { useEffect, useState } from 'react'
import {add} from '../store/cartSlice'
import {useDispatch} from 'react-redux'

function Products() {
    const [product, setProduct] = useState([]);
    const Dispatch = useDispatch();

    useEffect(()=>{
        const fetctProduct = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data)
            setProduct(data);
        }
        fetctProduct();
    }, [])

    const handleAdd = (product) => {
        Dispatch(add(product));
    }

  return <div className='productsWrapper'>
        {
            product.map(product => (
                <div className='card' key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={()=>handleAdd(product)} className='btn'>Add To Cart</button>
                </div>
            ))
        }
    </div>
  
}

export default Products