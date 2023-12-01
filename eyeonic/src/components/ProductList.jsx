import Product from "./Product";
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ProductList() {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch("https://653f530b9e8bd3be29e04625.mockapi.io/products")
            .then((data) => data.json())
            .then((productList) => setProducts(productList));
    }

    useEffect(() => getProducts(), []);

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Row className="g-3">
                {products.map((info, index) => (
                    <Col style={{ display: "flex" }}>
                        <Product
                            id={info.id}
                            name={info.name}
                            brand={info.brand}
                            image={info.picture}
                            price={info.price}
                            key={index}
                            material={info.material}
                            design={info.design}
                            features={info.features}
                        />
                    </Col>
                ))};
            </Row>
        </div>

    )
}
export default ProductList;