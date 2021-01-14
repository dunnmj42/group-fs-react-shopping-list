import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ItemForm({ addItem }) {

    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState(0);
    const [itemUnit, setItemUnit] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        let newItem = {
            item_name: itemName,
            quantity: itemQuantity,
            nit: itemUnit,
            purchased: false
        };
        addItem(newItem);
    }

    return (
        <div>
            <h1>Add an Item</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Item: </Form.Label>
                    <Form.Control
                        as="input"
                        // value={itemName.item_name}
                        onChange={(event) => setItemName(event.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Quantity: </Form.Label>
                    <Form.Control
                        as="input"
                        type="number"
                        // value={itemQuantity.quantity}
                        onChange={(event) => setItemQuantity(event.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Unit: </Form.Label>
                    <Form.Control 
                        as="input"
                        // value={itemUnit.unit}
                        onChange={(event) => setItemUnit(event.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">Save</Button>
            </Form>
        </div>
    )
}

export default ItemForm;