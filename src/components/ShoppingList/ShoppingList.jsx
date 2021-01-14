import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faTrashAlt} />




function ShoppingList({removeItem}) {

  return (

  <div>
    <h2>Shopping List</h2>
    <hr/>
    <div>
      <Button variant="danger" size="sm">{element}
        
      </Button>{' '}
      <Button variant="danger" size="sm">
        Clear
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