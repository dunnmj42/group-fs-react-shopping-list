import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const trashIcon = <FontAwesomeIcon icon={faTrashAlt} />


function buyItem({markPurchasedItems, id}) {

  return (

    <div>

      <Button 
      
      variant="primary"
      onClick={markPurchasedItems}
      id={id}
      >Buy</Button>
    </div>

  )
};




export default buyItem;