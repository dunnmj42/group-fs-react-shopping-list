import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Item from "../Item/Item";

const trashIcon = <FontAwesomeIcon icon={faTrashAlt} />;

function ShoppingList(props) {
  return (
    <div>
      <Container>
        <h2>Shopping List</h2>
        <hr />
        <div>
          <Button
            variant="danger"
            size="sm"
            style={{ margin: "10px" }}
            onClick={props.resetPurchasedItems}
          >
            Reset Purchased Status
          </Button>{" "}
          <Button
            variant="danger"
            size="sm"
            style={{ margin: "10px" }}
            onClick={props.clearShoppingList}
          >
            {trashIcon}
          </Button>
        </div>
        <div>
          <Item itemList={props.itemList} handleRemove={props.handleRemove} />
        </div>
      </Container>
    </div>
  );
}

export default ShoppingList;
