import React from 'react';

import Header from '../Header/Header.jsx';
import './App.css';
import ItemForm from '../Form/ItemForm.jsx';


function App() {


    const addItem = (newItem) => {
        console.log(newItem);
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
