import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const trashIcon = <FontAwesomeIcon icon={faTrashAlt} />




function ShoppingList({clearShoppingList, resetPurchasedItems}) {



  return (

  <div>
    <h2>Shopping List</h2>
    <hr/>
    <div>
      <Button 
      variant="danger" 
      size="sm"
      onClick={resetPurchasedItems}
      >
        Reset Purchased Status

      </Button>{' '}
      <Button 
        variant="danger" 
        size="sm" 
        onClick={clearShoppingList}
      >
        {trashIcon}

      </Button>
    </div>
    {/* Container for item cards */}
    <div>
      <h1>Cards go here</h1>
    </div>
  </div>

  )
}



export default ShoppingList;