import '../App.css';
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';
import Review from '../components/Review'

function ProductDesign() {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({});

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })

    const { addItem } = useCart();

    //Quantity - START
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1);
        }
    }
    const handleIncrement = () => {
        if (quantity < 99) {
            setQuantity(prevCount => prevCount + 1);
        }
    }
    //Quantity - END

    useEffect(() => {
        fetch(`https://653f530b9e8bd3be29e04625.mockapi.io/products/${id}`)
            .then((data) => data.json())
            .then((usr) => setProduct(usr));
    }, [id]);

    return (
        <div className="row" style={{ border: "0px" }}>
            <aside className="col-md-6">
                <div>
                    <img src={process.env.PUBLIC_URL + product.picture} alt='product' className='product' />
                </div>
            </aside>
            <main className="col-md-5">
                <article>
                    <div className='productbox'>
                        <span className='product-title'>{product.name}</span>
                        <h4>
                            5.0
                            <MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 />
                            <span>| 88 rating |</span>
                        </h4>
                        <b className='price'>{formatter.format(product.price)}</b>
                        <div className='quantity'>
                            <h4>Quantity</h4>
                            <div className='abc'>
                                <div className='col-md-3 mt-3'>
                                    <div className='input-group'>
                                        <button type="button" onClick={handleDecrement} className='input-group-text'>-</button>
                                        <div className='form-control text-center'>{quantity}</div>
                                        <button type="button" onClick={handleIncrement} className='input-group-text'>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='AddBuy' key={product.id}>
                            <button className='add' onClick={() => addItem(product, quantity)}>🛒Add to cart</button>
                            <button className='buy'>Buy now</button>
                        </div>
                    </div>
                </article>
            </main>
            <Review />
        </div>

    );
}
export default ProductDesign;