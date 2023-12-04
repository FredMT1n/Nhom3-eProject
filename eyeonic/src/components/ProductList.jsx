import Product from "./Product";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from 'react';

function ProductList({ itemsPerPage }) {
    const [products, setProducts] = useState([]);
    const getProducts = () => {
        fetch("https://653f530b9e8bd3be29e04625.mockapi.io/products")
            .then((data) => data.json())
            .then((productList) => setProducts(productList));
    }
    useEffect(() => getProducts(), []);

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
        window.scrollTo(0, 0)
    };

    return (
        <div className="products-list">
            <div className="product-card">
                {currentItems && currentItems.map((info, index) => (
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
                ))}
            </div>
            <ReactPaginate className="product-page"
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </div>
    )
}
export default ProductList;