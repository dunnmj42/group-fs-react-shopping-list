import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import './Item.css'
import RemoveItem from '../RemoveItem/RemoveItem'

function Item({itemList, handleRemove}) {
    
    return (
        <CardColumns>
            {itemList.map(item => (
                <Card 
                    bg="light" 
                    style={{ width: '18rem' }} 
                    border="secondary" 
                    className="p-3" 
                    key={item.id}
                >
                    <Card.Body>
                        <Card.Title>{item.item_name}</Card.Title>
                        <Card.Text>
                        {item.quantity} {item.unit}
                        </Card.Text>
                        <Button variant="primary">Buy</Button>
                        <RemoveItem 
                            handleRemove={handleRemove}
                        />
                    </Card.Body>
                </Card>
            ))}
        </CardColumns>
    )
}

export default Item;