import React from "react";
import "../index.css";
import '../CSS/menu.css';


import ItemOrder from "./ItemOrder";


const MenuListSummary = ({ itemMenu, setItemMenu }) => {

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
            buttonAction={() => setItemMenu(itemMenu.filter((el => el.id !== item.id)))}
          />
        ))}
      </tbody>

      <div className="MenuListSummary-buttons">
    <button onClick={() => setItemMenu(itemMenu= [])} className="MenuListSummary-btn-DeleteOrder">Eliminar pedido</button>
    <button className="MenuListSummary-btn-SendOrder">Enviar a cocina</button>
    </div> 
    </table>
  
  );

};

export default MenuListSummary;
