import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Header.css";

function Header() {
  return (
    <Jumbotron className={"header"}>
      <h1 className={"jumbo-text"}>My Shopping List</h1>
    </Jumbotron>
  );
}

export default Header;
