import React from "react";
import axios from "axios";
import ShoppingList from "../ShoppingList/ShoppingList";
import { useState, useEffect } from "react";
import Header from "../Header/Header.jsx";
import "./App.css";
import RemoveItem from "../RemoveItem/RemoveItem";
import ItemForm from "../Form/ItemForm.jsx";
import BuyItem from "../BuyItem/BuyItem";

function App() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const addItem = (newItem) => {
    console.log(newItem);
    axios
      .post("/list", newItem)
      .then((response) => {
        getItems();
      })
      .catch((err) => {
        alert("Error adding item");
        console.log(err);
      });
  };

  const handleRemove = (event) => {
    event.preventDefault();
    console.log("Deleting Item", id);

    let id = event.target.id;

    axios
      .delete(`/list/${id}`)
      .then((response) => {
        console.log(response);
        getItems();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // DELETE REQUEST
  const clearShoppingList = () => {
    console.log("delete clicked");
    axios
      .delete(`/list/clear`)
      .then((response) => {
        console.log(response);
        getItems();
      })
      .catch((err) => {
        console.log(err);
      });
  }; // end DELETE

  // PUT REQUEST
  const resetPurchasedItems = () => {
    console.log("reset clicked");
    axios
      .put(`/list/reset`)
      .then((response) => {
        console.log(response);
        getItems();
      })
      .catch((err) => {
        console.log(err);
      });
  }; // end PUT

  const markPurchasedItems = (event) => {

    event.preventDefault();
    let id = event.target.id;

    console.log("Marking purchased Item", id);

    axios
      .put(`/list/buy/${id}`)
      .then((response) => {
        getItems();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // GET REQUEST for itemList
  const getItems = () => {
    axios
      .get("/list")
      .then((response) => {
        setItemList(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Header />
      <main>
        {/* spacer class is used in App.css */}
        <div className={"spacer"}></div>
        <ItemForm addItem={addItem} />
        <div className={"spacer"}></div>
        <ShoppingList
          clearShoppingList={clearShoppingList}
          resetPurchasedItems={resetPurchasedItems}
          RemoveItem={RemoveItem}
          itemList={itemList}
          handleRemove={handleRemove}
          BuyItem={BuyItem}
          markPurchasedItems={markPurchasedItems}
        />
      </main>
    </div>
  );
}

export default App;
