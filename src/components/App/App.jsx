import React from 'react';
import axios from 'axios';
import ShoppingList from '../ShoppingList/ShoppingList'
import {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import RemoveItem from '../RemoveItem/RemoveItem'


function App() {



   

    const handleRemove = (event) => {
        event.preventDefault();
        console.log('Delete clicked');
    }
    


    // DELETE REQUEST
    const clearShoppingList = () => {
        console.log('delete clicked');
        axios.delete(`/list`).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
    }// end DELETE


    // PUT REQUEST
    const resetPurchasedItems = () => {
        console.log('reset clicked');
        axios.put(`/list`).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })

    }// end PUT
    
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        getItems();
    }, [])

    const getItems = () => {
        axios.get('/list')
          .then(response => {
            setItemList(response.data)
            console.log(response.data);
          })
          .catch(err => {
            console.log(err);
          })
    };



    return (
        <div className="App">
            <Header />
            <main>
                <ShoppingList 
                    clearShoppingList={clearShoppingList}
                    resetPurchasedItems={resetPurchasedItems}
                    removeItem={removeItem}
                    itemList={itemList}
                    handleRemove={handleRemove}
                />
            </main>
            
            
        </div>
    );
}

export default App;
