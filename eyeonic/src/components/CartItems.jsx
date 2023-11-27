import React from 'react';
import CartList from "../data/CartList.json"
import "bootstrap/dist/css/bootstrap.min.css"


function CartItems() {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })

    const DisplayCart = CartList.map(
        (info) => {
            return (
                <tr>
                    <td><img src={info.picture} className='cart-item-pic' alt='Cart item' /></td>
                    <td className='cart-name'>{info.name}</td>
                    <td>{formatter.format(info.price)}</td>
                    <td>
                        <div class="input-group mb-3 w-75">
                            <button className="btn btn-outline-secondary" type="button">-</button>       
                            <input type="text" className="form-control" value={info.quantity} min={1} />                     
                            <button className="btn btn-outline-secondary" type="button">+</button>                            
                        </div>
                    </td>
                    <td>{formatter.format(info.price * info.quantity)}</td>
                </tr>
            )
        })
    return (
        <div>
            <table className='table-responsive'>
                <thead>
                    <tr>
                        <th colSpan={2} className='cart-header-left'>Product Information</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody >
                    {DisplayCart}
                </tbody>
            </table>
        </div>
    );
}
export default CartItems;