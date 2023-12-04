import ProductList from "../components/ProductList";
import React, { useState, useEffect } from 'react';
import './Products.css'
import Compare from "../components/Compare";
import { Button } from "react-bootstrap";
import Filter from '../components/Filter'


function Products() {
    const [modalShow, setModalShow] = useState(false);

    const [compareItem, setCompareItems] = useState([]);
    const getCompares = () => {
        fetch("https://653f530b9e8bd3be29e04625.mockapi.io/compare")
            .then((data) => data.json())
            .then((compareList) => setCompareItems(compareList));
    }
    useEffect(() => getCompares(), []);

    return (
        <div className="products-container">
            <div className="sub-header">
                <Button style={{ position: "relative", marginRight: "10px" }} variant="primary" onClick={() => setModalShow(true)}>
                    Compare
                    <div className={(compareItem.length > 0) ? "rounded-circle1" : "rounded-circle1 hidden2"}>
                        {compareItem.length}
                    </div>
                </Button>
            </div>
            <Compare
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
                <div className="filter">
                    <Filter />
                </div>
                <ProductList itemsPerPage={21}/>
        </div>
    );
}

export default Products;