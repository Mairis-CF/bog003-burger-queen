import React from "react";
import "../CSS/menu.css";

const ItemMenuChart = ({ itemImg, itemName, itemPrice, itemId, itemMenu, setItemMenu, setOrderPrice, orderPrice  }) => {

  const addItemButtonHandler = () => {

    setItemMenu([...itemMenu, {
      title: itemName,
      price: itemPrice,
      id: itemId, 
    }])
     
    setOrderPrice(orderPrice + itemPrice)
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

