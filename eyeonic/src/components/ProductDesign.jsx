import '../App.css';
import { MdOutlineStarPurple500 } from "react-icons/md";
import { GoPlusCircle } from "react-icons/go";
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

function ProductDesign() {
    const {id} = useParams();
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({});

    //Quantity - START
    const handleDecrement= () => {
        if(quantity > 1){
            setQuantity(prevCount => prevCount - 1);
        }
    }
    const handleIncrement= () => {
        if(quantity < 99){
        setQuantity(prevCount => prevCount + 1);
        }
    }
    //Quantity - END
    
    useEffect(() => {
        fetch(`https://653f52029e8bd3be29e04240.mockapi.io/product`)
        .then((data) => data.json())
        .then((usr) => setProduct(usr));
    }, [id]);
    return ( 
        <div class="row">
            <aside class="col-md-6">
                <div>
                    <img src={product.image} alt='product'className='product'/>
                </div>
            </aside>
            <main class="col-md-5">
                <article>
                    <div class="mb-5 " className='productbox'>
                        <h1 className='product-title'>{product.name}</h1>
                        <h4>5.0 <MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 />| 88 rating | <GoPlusCircle />Compare</h4>
                        <b className='price'>{product.price}</b>
                            <div className='quantity'>
                                <h4>
                                    Quantity
                                </h4>
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

                            <div className='AddBuy'>
                                    <button className='add'>🛒Add to cart</button>
                                    <button className='buy'>Buy now</button>  
                            </div>

                           
                    </div>
                </article>
            </main>
        </div>

     );
}

export default ProductDesign;