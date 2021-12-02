import React from "react";
import "../CSS/menu.css";
//import { FaPlusCircle } from 'react-icons/fa';
import dataMenu from "../data-menu/menu.json";
import Modals from "./Modals.jsx";

const menu = dataMenu.menu;

const ItemMenuChart = ({ itemImg, itemName, itemPrice, foodType }) => {
  return (
    <section className="itemMenu">
      <img className="itemImg" src={itemImg} alt={itemName} />
      <p> {itemName} </p>
      <p> ${itemPrice} </p>
      {foodType === "Desayuno" ? (
        <button className="addButton">
          <img className="addImg" src="icons/plusButton.png" alt="add" />
        </button>
      ) : (
        <Modals />
      )}
    </section>
  )
};


const MenuItems = (props) => {

  return (
    <section className="menuItems">
      {menu
        .filter((item) => item.type === props.foodType)
        .map((item) => (
          <ItemMenuChart
            key={item.id}
            itemImg={item.img}
            itemName={item.name}
            itemPrice={item.price}
            foodType={item.type}
          />
        ))}
    </section>
  );
};

export default MenuItems;
