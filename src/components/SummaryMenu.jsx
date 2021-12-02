import React from "react";
import "../index.css";
import QuantifyOrder from "../components/QuantifyOrder";
import order from "../data-menu/order.json";

const MenuListSummary = () => {
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
        {order.order.order.map((item) => (
          <tr key={order.order.id}>
            <td>
              <QuantifyOrder />
            </td>
            <td colSpan="4"> {item.itemName}</td>
            <td colSpan="1"> ${item.unitPrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MenuListSummary;
