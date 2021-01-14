import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Item from '../Item/Item'

const element = <FontAwesomeIcon icon={faTrashAlt} />




function ShoppingList(props) {

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
    <div>
      <Item
        itemList={props.itemList}
        handleRemove={props.handleRemove}
      />
    </div>
  </div>

  )
}



export default ShoppingList;