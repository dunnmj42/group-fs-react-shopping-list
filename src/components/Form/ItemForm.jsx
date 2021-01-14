import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function ItemForm({ addItem }) {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemUnit, setItemUnit] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let newItem = {
      item_name: itemName,
      quantity: itemQuantity,
      unit: itemUnit,
      purchased: false,
    };
    addItem(newItem);
    setItemName("");
    setItemQuantity("");
    setItemUnit("");
  };

    const handleSubmit = (event) => {
        event.preventDefault();
        let newItem = {
            item_name: itemName,
            quantity: itemQuantity,
            unit: itemUnit,
            purchased: false
        };
        addItem(newItem);
        setItemName('');
        setItemQuantity('');
        setItemUnit('');
    }

    return (
        <div>
            <Container>
                <Col md={6}>
                    <h2>Add an Item</h2>
                    <hr/>
                    <Form onSubmit={handleSubmit}>
                        <Form.Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Item: </Form.Label>
                                    <Form.Control
                                        as="input"
                                        value={itemName}
                                        onChange={(event) => setItemName(event.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Quantity: </Form.Label>
                                    <Form.Control
                                        as="input"
                                        type="number"
                                        value={itemQuantity}
                                        onChange={(event) => setItemQuantity(event.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Unit: </Form.Label>
                                    <Form.Control 
                                        as="input"
                                        value={itemUnit}
                                        onChange={(event) => setItemUnit(event.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Button variant="primary" type="submit">Save</Button>
                    </Form>
                </Col>
            </Container>
        </div>
    )
}

export default ItemForm;
