import React from "react";
import "../index.css";
import '../CSS/menu.css';

import ItemOrder from "./ItemOrder";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config.js";


const MenuListSummary = (

  { itemMenu, setItemMenu,
    setOrderPrice, orderPrice,
    inputTableNum, inputUserName,
    setInputUserName, setInputTableNum,

  }) => {

  const deleteOrderHandler = () => {
    setItemMenu(itemMenu = [])
    setOrderPrice(orderPrice = 0)
    setInputUserName(inputUserName = "")
    setInputTableNum(inputTableNum = "")
  }


  const orderTableHandler = async () => {
    try {
      const docRef = await addDoc(collection(db, "Orders"), {
        client: inputUserName,
        table: inputTableNum,
        order: itemMenu,
        price: orderPrice
      })
      console.log("Document written with ID: ", docRef.id)
    }
    catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  return (
    <table className="menuListSummary">
      <thead>
        <tr className="menuListHeader">
          <th>Nº items</th>
          <th colSpan="4">Pedido</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {itemMenu.map((item) => (
          <ItemOrder
            key={item.id}
            itemMenu={itemMenu}
            setItemMenu={setItemMenu}
            title={item.title}
            price={item.price}
            buttonAction={() => { setOrderPrice(orderPrice - item.price); setItemMenu(itemMenu.filter((el => el.id !== item.id))) }}
          />
        ))}
      </tbody>

      <div className="orderprice-container">
        <p>Valor total de pedido: ${orderPrice}</p>
      </div>

      <div className="MenuListSummary-buttons">
        <button onClick={deleteOrderHandler} className="MenuListSummary-btn-DeleteOrder">Eliminar pedido</button>
        <button onClick={orderTableHandler} className="MenuListSummary-btn-SendOrder">Enviar a cocina</button>
      </div>
    </table>

  );

};

export default MenuListSummary;
