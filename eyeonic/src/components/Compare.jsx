import React, { useState, useEffect } from 'react';
import { Table, Modal, ModalBody, Button } from 'react-bootstrap';

function Compare(props) {
    const [compareItem, setCompareItems] = useState([]);

    const getCompares = () => {
        fetch("https://653f530b9e8bd3be29e04625.mockapi.io/compare")
            .then((data) => data.json())
            .then((compareList) => setCompareItems(compareList));
    }

    useEffect(() => getCompares(), []);

    const deleteCompareItem = (id) => {
        fetch(`https://653f530b9e8bd3be29e04625.mockapi.io/compare/${id}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
                getCompares()
            }
        })
    }

    const DisplayCompare = () => {
        if (compareItem.length === 0) {
            return (
                <h3>There is no items to compare</h3>
            )
        } else {
            return (
                <Table>
                    <tbody style={{ textAlign: "center", display: "flex" }}>
                        {compareItem.map((info) => (
                            <tr className='compare-table-row'>
                                <td><img src={process.env.PUBLIC_URL + info.picture} alt="Compare Item" width="100px" height="100px" /></td>
                                <td>{info.name}</td>
                                <td>{info.price}</td>
                                <td>{info.material}</td>
                                <td>{info.design}</td>
                                <td>{info.features}</td>
                                <td>
                                    <Button variant='danger' onClick={() => deleteCompareItem(info.id)}>Remove</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )
        }
    }
    return (
        <Modal {...props} size='lg' aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Compare Items
                </Modal.Title>
            </Modal.Header>
            <ModalBody>
                <DisplayCompare />
            </ModalBody>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Compare;