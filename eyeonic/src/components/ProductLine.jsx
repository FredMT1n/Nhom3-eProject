import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';

function ProductLine() {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch("https://653f530b9e8bd3be29e04625.mockapi.io/products")
            .then((data) => data.json())
            .then((productList) => setProducts(productList));
    }

    useEffect(() => getProducts(), []);

    const currentItems = products.slice(30, 40);
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className="product-line"
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 4,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {currentItems.map((info, index) => (
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
        </Carousel>
    );
}

export default ProductLine;