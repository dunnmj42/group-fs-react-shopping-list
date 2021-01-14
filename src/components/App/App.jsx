import React from 'react';
import {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx'
import Item from '../Item/Item'
import axios from 'axios';
import './App.css';


function App() {
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        getItems();
    }, [])

    const getItems = () => {
        axios.get('/list')
          .then(response => {
            setItemList(response.data)
          })
          .catch(err => {
            alert('error getting items');
            console.log(err);
          })
    };


    return (
        <div className="App">
            <Header />
            <main>
                <Item />
            </main>
        </div>
    );
}

export default App;
