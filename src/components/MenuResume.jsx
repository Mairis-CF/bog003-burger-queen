import React from "react";
import "../index.css";

import ItemOrder from "./ItemOrder";

const MenuListResume = () => {
  return (

    <div className="menuListSummary">
      <table>

        <thead>
          <tr className="menuListHeader">
            <th>Nº items</th>
            <th>Pedido</th>
            <th>Precio</th>
          </tr>
        </thead>
      </table>

      <div className="menuOrderList">

        <ul className="menuOrderItem">
          <ItemOrder orderTitle='Hamburguesa doble' orderPrice='10000' />

        </ul>

      </div>


    </div>
  );
};

export default MenuListResume;
