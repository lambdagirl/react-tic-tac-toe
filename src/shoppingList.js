import React from "react";
import ReactDom from "react-dom";
import "./index.css";

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
        </ul>
      </div>
    );
  }
}

export default ShoppingList;