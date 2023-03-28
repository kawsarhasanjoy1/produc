import { faColonSign } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './AddedCart.css'

const AddedCart = (props) => {
    
    const getsingle = props.cart;
    
    let Total = 0;
    let TotalShipping = 0;
    for (const single of getsingle) {
         Total = Total + single.price;
         TotalShipping = TotalShipping + single.shipping

    }
    const tax = Total*7/100;
    const grandTotal = Total+TotalShipping+tax;


    return (
        <div className='Product-summary'>
            <h3>Order Product </h3>
            <p>Selected item : {props.cart.length}</p>
            <p>Total Price: ${Total}</p>
            <p>Shipping Charge:${TotalShipping} </p>
            <p>Tax : ${tax}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default AddedCart;