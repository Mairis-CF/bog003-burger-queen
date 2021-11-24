import React from "react";
import "../index.css";


const MenuListSummary = () => {
  return (
    <table className="menuListSummary">
      <thead>
        <tr className="menuListHeader">
          <th>Nº items</th>
          <th>Pedido</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default MenuListSummary;
