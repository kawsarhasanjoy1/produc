import React from 'react';
import './Products.css'
import add from '../../images/cart-plus-solid.svg'
const Products = (props) => {
    
   console.log(props.single)
    return (
        <div className='product-container'>
            <img src={props.single.img} alt="" />
        <div className='product-chaild'>
            <h3> {props.single.name}</h3>
            <h4>Price : ${props.single.price}</h4>
            <p>Manufacturer :{props.single.seller}</p>
            <p>Rating : {props.single.ratings} Star</p>     
        </div>
        <div className='button-hover'> 
            <button className='button'>Add to Card</button>
       </div>
    </div>
    );
};

export default Products;