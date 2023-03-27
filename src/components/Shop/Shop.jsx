import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {
    const [product, setProduct] = useState([]);
    const [Cart , setCart] = useState([]);
        
        useEffect(() => {
          fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
          .then(res => res.json())
          .then(data => setProduct(data))

        },[]);
        const HandaleAddToCard = (product) => {
            const newCard = [...Cart,product];
            setCart(newCard)
            
     }
   
   
    return (
        <div className='shop-container'>
            <div className='parent-container'>
                {
                    product.map(singleData => <Products 
                         single = {singleData}
                         HandaleAddToCard = {HandaleAddToCard}
                         >
                        
                        </Products>)
                } 
             </div>
            <div style={{color:'black',marginTop:'3px'}}>
                <h2>Order Product</h2>
                <h4>Total Product : {Cart.length}</h4>
                
            </div>
        </div>
    );
};

export default Shop;