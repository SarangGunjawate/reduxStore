import React, { useEffect, useState } from 'react'
import {add} from '../store/cartSlice'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProduct} from '../store/productSlice'
import {STATUSSES} from '../store/productSlice'

function Products() {
    // const [products, setProduct] = useState([]);
    const Dispatch = useDispatch();

    const {data: products, status} = useSelector((state) => state.Product)

    useEffect(()=>{

        Dispatch(fetchProduct())

        // const fetctProduct = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data)
        //     setProduct(data);
        // }
        // fetctProduct();
    }, [])

    const handleAdd = (product) => {
        Dispatch(add(product));
    }

    if(status === STATUSSES.LOADING){
        return <h2>Loading.....</h2>
    }
    else if(status === STATUSSES.ERROR){
        return <h2>Something went Wrong</h2>
    }

  return <div className='productsWrapper'>
        {
            products.map(product => (
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