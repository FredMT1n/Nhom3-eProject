import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from '../components/Product';


function Sales() {
    const [hotdeals, setHotdeals] = useState([]);
    const [morethan, setMorethan] = useState([]);

    const url = new URL('https://653f530b9e8bd3be29e04625.mockapi.io/products');
    url.searchParams.append('sales', '10');

    const url2 = new URL('https://653f530b9e8bd3be29e04625.mockapi.io/products');
    url2.searchParams.append('sales', '60');

    const getHotdeals = () => {
        fetch(url, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then((data) => data.json())
            .then((productList) => setHotdeals(productList));
    }

    useEffect(() => getHotdeals(), []);

    const getMorethan = () => {
        fetch(url2, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then((data) => data.json())
            .then((productList) => setMorethan(productList));
    }

    useEffect(() => getMorethan(), []);

    console.log(hotdeals)
    console.log(morethan)

    return (
        <div>
            <h2 className='carousel-title'>More than 50% off</h2>
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
                {hotdeals.map((info, index) => (
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
            <h2 className='carousel-title'>Hot deals</h2>
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
                {morethan.map((info, index) => (
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
        </div>
    );
}

export default Sales;