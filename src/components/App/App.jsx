import React from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    const removeItem =()=> {
        console.log('delete clicked');

        let id = 1;
        axios.delete(`/list/1`).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
            <button onClick={removeItem}>Delete</button>
        </div>
    );
}

export default App;
