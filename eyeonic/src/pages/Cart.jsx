import React from 'react'
import './Cart.css'
import CartItems from '../components/CartItems';
import BillingInfo from '../components/BillingInfo';
import { useCart } from 'react-use-cart';

function Cart() {
    const {
        isEmpty,
    } = useCart()

    if (isEmpty) return <h3>Your cart is empty</h3>

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