import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

function ProductDetail() {
    const {id} = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://653f530b9e8bd3be29e04625.mockapi.io/products/${id}`)
        .then((data) => data.json())
        .then((usr) => setProduct(usr));
    }, [id]);

    return ( 
        
        <div className="user-detail-container">
            <img src={process.env.PUBLIC_URL + product.image} alt={product.name} className="product-profile-pic"/>
            <div className='detail'>
                <h2 className="product-name">{product.name}</h2>
                <h3>{product.price}</h3>
            </div>
        </div>
        
     );
}

export default ProductDetail;