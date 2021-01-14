import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Item.css'

function Item(props) {
    
    return (
        <div>
        <Card>
            <Card.Body>
                <Card.Title>Item Name</Card.Title>
                <Card.Text>
                Item Quantity and Unit
                </Card.Text>
                <Button variant="primary">Buy</Button>
                <Button variant="primary">Remove</Button>
            </Card.Body>
        </Card>
    </div>
    )
}

export default Item;