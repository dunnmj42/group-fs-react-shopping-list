import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ItemForm() {
    return (
        <div>
            <h1>Add an Item</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Item: </Form.Label>
                    <Form.Control as="input"></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Quantity: </Form.Label>
                    <Form.Control as="input" type="number"></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Unit: </Form.Label>
                    <Form.Control as="input"></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">Save</Button>
            </Form>
        </div>
    )
}

export default ItemForm;