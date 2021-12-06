import '../index.css'
import React, { useState } from "react";
import WaiterNav from "../components/WaiterNav";
import TabMenu from '../components/tabMenu';
import MenuListSummary from '../components/SummaryMenu'




const Waiter = () => {
  const [itemMenu, setItemMenu] = useState([]);
  const [orderPrice, setOrderPrice] = useState(0);
  return (
    <>
      <WaiterNav />
      <input type="text" placeholder="Nombre del cliente" className="inputName" ></input>
      <input type="text" placeholder="N° de mesa" className="inputTables"></input>
      <section className='menuSection'>
        <MenuListSummary itemMenu={itemMenu} setItemMenu={setItemMenu} orderPrice={orderPrice} setOrderPrice={setOrderPrice} />
      </section>
      <TabMenu itemMenu={itemMenu} setItemMenu={setItemMenu} orderPrice={orderPrice} setOrderPrice={setOrderPrice}/>

    </>
  );
};

export default Waiter;
