import React, { useState } from 'react'
import './Cart.css'
import CartItems from '../components/CartItems';
import BillingInfo from '../components/BillingInfo';

function Cart() {
    return (
        <div className="cart-container">
            <div className="cart-items">
                <CartItems />
            </div>
            <div className="billing-info">
                <BillingInfo />
            </div>
        </div>
    );
}

export default Cart;