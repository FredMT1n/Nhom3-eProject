import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function Product({ name, brand, image, price, id, material, design, features }) {
    const navigate = useNavigate()
    const [compareItems, setCompareItems] = useState([]);
    const { idx } = useParams()

    useEffect(() => {
        fetch(`https://653f530b9e8bd3be29e04625.mockapi.io/compare`)
            .then((data) => data.json())
            .then((usr) => setCompareItems(usr));
    }, [idx]);

    const handleCompare = () => {
        if (compareItems.length < 3) {
            const newCompareItems = {id: id, name: name, brand: brand, picture: image , price: price, material: material, design: design, features: features}
            fetch('https://653f530b9e8bd3be29e04625.mockapi.io/compare', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                // Send your data in the request body as JSON
                body: JSON.stringify(newCompareItems)
            }).then(() => {
                navigate('/Nhom3-eProject/product')
            }).then(() => {
                alert("Add to compare success")
            })
        } else {
            alert("Max 3 items in compare")
        }
    }
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    return (
        <Card style={{ width: "17rem", marginLeft: "20px", cursor: "pointer", transition: "0.5s all" }} onClick={() => navigate(`/Nhom3-eProject/products/${id}`)}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + image} />
            <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                    <Card.Title style={{ fontSize: "18px" }}>{name}</Card.Title>
                </div>
                <div>
                    <Card.Text style={{ margin: "0" }}>{formatter.format(price)}</Card.Text>
                    <Button variant="primary" onClick={handleCompare}>Compare with others</Button>
                </div>
            </Card.Body>
        </Card>

    );
}

export default Product;