import React from 'react';
import axios from 'axios';
import ShoppingList from '../ShoppingList/ShoppingList'
import {useState, useEffect} from 'react';
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
                    removeItem={removeItem}
                    itemList={itemList}
                />
            </main>
        </div>
    );
}

export default App;
