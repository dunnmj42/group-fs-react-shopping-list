import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
import axios from "axios";

function RemoveItem({ handleRemove, id }) {
  return (
    <div>
      <Button 
        variant="warning" 
        onClick={handleRemove} 
        id={id}
        style={{margin: '3px'}}>
        Delete
      </Button>
    </div>
  );
}

export default RemoveItem;
