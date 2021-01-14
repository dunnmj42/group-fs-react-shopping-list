import React from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import RemoveItem from '../RemoveItem/RemoveItem'


function App() {


    const handelRemove = (event) => {
        event.preventDefault();
        console.log('Delete clicked');
    }
    
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
            <RemoveItem 
            handelRemove={handelRemove}
            
            />
            
        </div>
    );
}

export default App;
