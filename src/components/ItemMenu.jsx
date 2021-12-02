import React from "react";
import "../CSS/menu.css";

//import Modals from "./Modals.jsx";



const ItemMenuChart = ({ itemImg, itemName, itemPrice, itemId, foodType, itemMenu, setItemMenu }) => {

  const addItemButtonHandler = () => {

    setItemMenu([...itemMenu, {
      title: itemName,
      price: itemPrice,
      id: itemId
    }])

  }

  return (
    <section className="itemMenu">
      
      <img className="itemImg" src={itemImg} alt={itemName} />
      <p> {itemName} </p>
      <p> ${itemPrice} </p>
      <button onClick={addItemButtonHandler} className="addButton" >
          <img className="addImg" src="icons/plusButton.png" alt="add" />
      </button>
    </section>
  )
};

export default ItemMenuChart;
 /*  {foodType === "Desayuno" ? (
        
  ) : (
    <Modals />
  )}
*/
