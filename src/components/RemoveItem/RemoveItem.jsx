import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import React from 'react';
import axios from 'axios';


// const RemoveItem =()=> {
//     console.log('delete clicked');

//     let id = 2;
// axios.delete(`/list/${id}`).then((response) => {
//     console.log(response);
// }).catch((err) => {
//     console.log(err);
// })

//     return(
//         <button>Delete</button>
//     )
// }


function RemoveItem({
    handleRemove,
    id
}) {


    return (
        <div>
            <Button 
            variant="danger" 
            onClick={handleRemove}
            id={id}
            >Delete</Button>
        </div>
    )

}

export default RemoveItem;