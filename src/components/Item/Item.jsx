import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Item.css'
import RemoveItem from '../RemoveItem/RemoveItem'

function Item({itemList, handleRemove}) {
    
    return (
        <div>
            {itemList.map(item => (
                <Card key={item.id}>
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
        </div>
    )
}

export default Item;