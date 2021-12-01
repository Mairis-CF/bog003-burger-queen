import React from "react";
import "../CSS/menu.css";
import dataMenu from "../data-menu/menu.json";


const menu = dataMenu.menu;

const ItemAdittions = ({ itemImg, itemName, itemPrice }) => {
  return (
    <section className="itemMenu">
      <img className="itemImg" src={itemImg} alt={itemName} />
      <p> {itemName} </p>
      <p> ${itemPrice} </p>
      <button className="addButton">
      <img className="addImg" src="icons/plusButton.png" alt="add" />
      </button>
    </section>
  );
};

const AditionItems = (props) => {
  return (
    <section className="menuItems">
      {menu
        .filter((item) => item.type === props.foodType)
        .map((item) => (
          <ItemAdittions
            key={item.id}
            itemImg={item.img}
            itemName={item.name}
            itemPrice={item.price}
          />
        ))}
    </section>
  );
};

export default AditionItems;
