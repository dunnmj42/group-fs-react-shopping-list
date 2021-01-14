import React from 'react';

import Header from '../Header/Header.jsx';
import './App.css';
import ItemForm from '../Form/ItemForm.jsx';
import axios from 'axios';


function App() {


    const addItem = (newItem) => {
        console.log(newItem);
        axios.post('/list', newItem)
        .then(response => {
            // clear inputs
        }).catch(err => {
            alert('Error adding item');
            console.log(err);
        })
    }


    return (
        <div className="App">
            <Header />
            <main>
                <ItemForm 
                    addItem={addItem}
                />
            </main>
        </div>
    );
}

export default App;
