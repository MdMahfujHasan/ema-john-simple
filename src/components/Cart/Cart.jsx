/* eslint-disable */
import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // const cart = props.cart;
    // const { cart } = props;
    // console.log(cart);
    let totalPrice = 0;
    let shippingCharge = 0;
    for (const product of cart) {
        totalPrice += product.price;
        shippingCharge += product.shipping;
    }
    const tax = parseFloat((totalPrice * 0.07).toFixed(2));
    const grandTotal = totalPrice + shippingCharge + tax;
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {totalPrice}</p>
            <p>Total Shipping Charge: {shippingCharge}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandTotal}</h5>
        </div>
    );
};

export default Cart;