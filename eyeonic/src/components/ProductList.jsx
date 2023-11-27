import Product from "../Product";
import { useState, useEffect } from 'react';




function ProductList() {
    const [products, setProducts] = useState([]);
    
    const getProducts = () => {
        fetch("https://653f52029e8bd3be29e04240.mockapi.io/product")
        .then((data) =>data.json())
        .then((productList) => setProducts(productList));
    }


    useEffect(() => getProducts(), []);
    
    return ( 
        <div className="product-container-list">
            {products.map( (product, index) => <Product 
                                            id={product.id}
                                            name={product.name} 
                                            image={product.image} 
                                            price={product.price} 
                                            Material= {product.Material}
                                            key={index} 
                                            /> )}
        </div>
     );
}

export default ProductList;