import React from 'react';
import axios from 'axios';
import ShoppingList from '../ShoppingList/ShoppingList'
import Header from '../Header/Header.jsx'
import './App.css';


function App() {


   
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


    return (
        <div className="App">
            <Header />
            <main>
                <ShoppingList 
                    clearShoppingList={clearShoppingList}
                    resetPurchasedItems={resetPurchasedItems}
                />
            </main>
        </div>
    );
}

export default App;
