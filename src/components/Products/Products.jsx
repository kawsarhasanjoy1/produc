import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Products = (props) => {
    
   const HandaleAddToCard = props.HandaleAddToCard;
   
    

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
            <button onClick={() => HandaleAddToCard(props.single)}
             className='button'>
                <FontAwesomeIcon icon={faShoppingCart} /> Add to Card
                </button>
       </div>
    </div>
    );
};

export default Products;