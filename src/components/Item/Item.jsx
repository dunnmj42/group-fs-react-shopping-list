import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import RemoveItem from "../RemoveItem/RemoveItem";
import BuyItem from "../BuyItem/BuyItem";

function Item({ itemList, handleRemove, markPurchasedItems }) {
  return (
    <CardColumns>
      {itemList.map((item) => (
        <Card
          bg="light"
          style={{ width: "18rem", textAlign: "center" }}
          border="secondary"
          className="p-3"
          key={item.id}
        >
          <Card.Body>
            <Card.Title>{item.item_name}</Card.Title>
            <Card.Text>
              {item.quantity} {item.unit}
            </Card.Text>
            {item.purchased ? (
              <div>
                <p>Purchased</p>
              </div>
            ) : (
              <ButtonGroup>
                <BuyItem markPurchasedItems={markPurchasedItems} id={item.id} />
                <RemoveItem handleRemove={handleRemove} id={item.id} />
              </ButtonGroup>
            )}
          </Card.Body>
        </Card>
      ))}
    </CardColumns>
  );
}

export default Item;
