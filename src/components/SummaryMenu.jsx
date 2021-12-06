import React from "react";
import "../index.css";
import '../CSS/menu.css';


import ItemOrder from "./ItemOrder";


const MenuListSummary = ({ itemMenu, setItemMenu, setOrderPrice, orderPrice, counter, setCounter }) => {

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
        <button onClick={() => { setItemMenu(itemMenu = []); setOrderPrice(orderPrice = 0) }} className="MenuListSummary-btn-DeleteOrder">Eliminar pedido</button>
        <button className="MenuListSummary-btn-SendOrder">Enviar a cocina</button>
      </div>
    </table>

  );

};

export default MenuListSummary;
