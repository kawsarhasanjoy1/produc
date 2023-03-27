import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {


    const [product, setProduct] = useState([]);
    const products = () => {
        
        useEffect(() => {
          fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
          .then(res => res.json())
          .then(data => setProduct(data))

        },[])
        
    }
    products()

    return (
        <div className='shop-container'>
            <div className='parent-container'>
                {
                    product.map(singleData => <Products single = {singleData}></Products>)
                } 
             </div>
            <div>
                <h1 style={{color:'black'}}>summary</h1>
            </div>
        </div>
    );
};

export default Shop;