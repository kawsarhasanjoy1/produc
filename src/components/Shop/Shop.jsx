import { faColonSign } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import AddedCart from '../AddedCart/AddedCart';
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
        useEffect(() => {
            const Stored = getShoppingCart();
            let saveCart = [];
            for(const id in Stored) {
             const FindProduct = product.find(product => product.id === id)
             if (FindProduct) {
                const added = Stored[id];
                FindProduct.quantity = added;
                saveCart.push(FindProduct)
             }
            }
            setCart(saveCart)
        },[product])


        const HandaleAddToCard = (product) => {
            const newCard = [...Cart,product];
            setCart(newCard)
            addToDb(product.id)
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
               <AddedCart cart = {Cart}></AddedCart>
            </div>
        </div>
    );
};

export default Shop;