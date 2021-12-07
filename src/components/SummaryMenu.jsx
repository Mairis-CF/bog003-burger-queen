import React from "react";
import "../index.css";
import '../CSS/menu.css';


import ItemOrder from "./ItemOrder";
import {db} from "../firebase-config";
import { doc, setDoc } from "firebase/firestore";


const MenuListSummary = (
  
  { itemMenu, setItemMenu, 
    setOrderPrice, orderPrice, 
    counter, setCounter, 
    inputTableNum, inputUserName,
     setInputUserName, setInputTableNum,
     orderTable, setOrderTable
    }) => {

  const deleteOrderHandler = () => { 
    setItemMenu(itemMenu = []) 
    setOrderPrice(orderPrice = 0) 
    setOrderTable(orderTable = [])
    setInputUserName(inputUserName = "")
    setInputTableNum(inputTableNum = "")
  }

  const setOrder = async (itemMenu, orderPrice, inputUserName, inputTableNum) => {
  await setDoc(doc(db, "Orders"), {
    client: inputUserName,
    table: inputTableNum,
    orderResume: [...itemMenu],
    totalPrice: orderPrice
  });
}
/*   const orderTableHandler = () => {

    setOrderTable([...orderTable, {
      client: inputUserName,
      table: inputTableNum,
      order: itemMenu,
      price: orderPrice
    }])

    console.log(orderTable)
  } */

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
            counter={counter}
            setCounter={setCounter}
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
        <button onClick={setOrder} className="MenuListSummary-btn-SendOrder">Enviar a cocina</button>
      </div>
    </table>

  );

};

export default MenuListSummary;
