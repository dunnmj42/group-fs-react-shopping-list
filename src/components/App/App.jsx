import React from 'react';
import axios from 'axios';
import ShoppingList from '../ShoppingList/ShoppingList'
import Header from '../Header/Header.jsx'
import './App.css';


function App() {



    // DELETE REQUEST
    const removeItem = () => {
        console.log('delete clicked');
        let id = 3;
        axios.delete(`/list/${id}`).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
    }


    return (
        <div className="App">
            <Header />
            <main>
                <ShoppingList 
                    removeItem={removeItem}
                />
            </main>
        </div>
    );
}

export default App;
