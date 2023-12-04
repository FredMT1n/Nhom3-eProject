import { Button, Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import React, { useState } from 'react';

function Filter() {
    const [material, setMaterial] = useState(["metal", "plastic", "acetate", "titanium"]);
    const [design, setDesign] = useState(["round", "rectangle", "trapezium", "cats eye"]);


    const handleChange = (val) => {
        setMaterial(val)
        console.log(material)
    }

    return (
        <div className="filter-container">
            <Form>
                <h3>Price range</h3>
                <Form.Check type="checkbox" value='cate1' label='Below 2.000.000đ' />
                <Form.Check type="checkbox" value='cate2' label='2.000.000đ - 5.000.000đ' />
                <Form.Check type="checkbox" value='cate3' label='5.000.000đ - 10.000.000đ' />
                <Form.Check type="checkbox" value='cate4' label='10.000.000đ - 15.000.000đ' />
                <Form.Check type="checkbox" value='cate5' label='Above 15.000.000đ' />
            </Form>
            <h3>Material</h3>
            <ToggleButtonGroup type="checkbox" defaultValue={material} className="mb-2" onChange={handleChange}>
                <ToggleButton variant="light" value={'metal'}>Metal</ToggleButton>
                <ToggleButton variant="light" value={'plastic'}>Plastic</ToggleButton>
                <ToggleButton variant="light" value={'acetate'}>Acetate</ToggleButton>
                <ToggleButton variant="light" value={'titanium'}>Titanium</ToggleButton>
            </ToggleButtonGroup>
            <h3>Design</h3>
            <ToggleButtonGroup type="checkbox" defaultValue={design} className="mb-2" onChange={handleChange}>
                <ToggleButton variant="light" value={'round'}>Round</ToggleButton>
                <ToggleButton variant="light" value={'rectangle'}>Rectangle</ToggleButton>
                <ToggleButton variant="light" value={'trapezium'}>Trapezium</ToggleButton>
                <ToggleButton variant="light" value={'cats eye'}>Cat's Eye</ToggleButton>
            </ToggleButtonGroup>
            <Form>
                <h3>Features</h3>
                <Form.Check type="checkbox" value='discoloration' label='Discoloration' />
                <Form.Check type="checkbox" value='anti-blue light' label='Anti-blue light' />
                <Form.Check type="checkbox" value='ultra-thin' label='Ultra-thin' />
                <Form.Check type="checkbox" value='universal lenses' label='Universal lenses' />
                <Form.Check type="checkbox" value='shady' label='Shady' />
            </Form>
            <Button variant="light" style={{ marginTop: "30px" }} onClick={() => {alert("Filter applied succesfully")}}>
                Apply Filter
            </Button>
        </div>
    );
}

export default Filter;