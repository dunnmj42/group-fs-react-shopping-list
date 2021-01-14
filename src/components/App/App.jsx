import React from 'react';

import Header from '../Header/Header.jsx';
import './App.css';
import ItemForm from '../Form/ItemForm.jsx';


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <ItemForm />
            </main>
        </div>
    );
}

export default App;
