import React from "react";
import ReactDOM from "react-dom";
import Item from "./Item.js";

const arrayOfItems = [
  {
    name: "Cereales con chocolate",
    description: "Cereales rellenos de chocolate",
    quantity: 2,
    category: "Cereales",
    price: 5
  },
  {
    name: "Hamburguesa con queso",
    description: "Hamburguesa rica y saludable",
    quantity: 1,
    category: "Fast-food",
    price: 15
  },
  {
    name: "Agua mineral",
    description: "Agua de un charco del Himalaya",
    quantity: 2,
    category: "Bebida",
    price: 5
  }
];

class ItemList extends React.Component {
  render() {
    return (
      <ul className="item-list">
        <li>
          <Item name="Cereales con chocolate" description="Cereales rellenos de chocolate" quantity={2} category="Cereales" price={5} />
        </li>
        <li>
          <Item name="Hamburguesa con queso" description="Hamburguesa rica y saludable" quantity={1} category="Fast-food" price={15} />
        </li>
        <li>
          <Item name="Agua mineral" description="Agua de un charco del Himalaya" quantity={2} category="Bebida" price={5} />
        </li>
      </ul>
    );
  }
}

ReactDOM.render(<ItemList items={arrayOfItems} />, document.getElementById("react-root"));
export default ItemList;
