import {useState} from 'react';
import Button from 'react-bootstrap/Button';


function ShoppingList() {

  return (


  <div>
    <h2>Shopping List</h2>
    <hr/>
    <div>
      <Button variant="primary" size="sm">
        Small button
      </Button>{' '}
      <Button variant="secondary" size="sm">
        Small button
      </Button>
    </div>
    {/* Container for item cards */}
    <div>

    </div>
  </div>

  )
}



export default ShoppingList;