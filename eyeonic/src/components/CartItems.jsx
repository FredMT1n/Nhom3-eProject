import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { useCart } from 'react-use-cart';
import { Button } from 'react-bootstrap';


function CartItems() {
    const { items } = useCart()
    const { removeItem } = useCart()
    const { updateItemQuantity } = useCart()
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })

    const DisplayCart = items.map(
        (info) => {
            return (
                <tr>
                    <td><img src={process.env.PUBLIC_URL + info.picture} className='cart-item-pic' alt='Cart item' /></td>
                    <td className='cart-name'>{info.name}</td>
                    <td>{formatter.format(info.price)}</td>
                    <td>
                        <div class="input-group mb-3 w-75">
                            <button className="btn btn-outline-secondary" type="button" onClick={() => updateItemQuantity(info.id, (info.quantity - 1))}>-</button>
                            <input type="text" className="form-control" value={info.quantity} min={1} />
                            <button className="btn btn-outline-secondary" type="button" onClick={() => updateItemQuantity(info.id, (info.quantity + 1))}>+</button>
                        </div>
                    </td>
                    <td>{formatter.format(info.price * info.quantity)}</td>
                    <td>
                        <Button variant='danger' onClick={() => removeItem(info.id)}>Remove</Button>
                    </td>
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
                        <th></th>
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