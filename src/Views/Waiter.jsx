import '../index.css'
import React, { useState } from "react";
import WaiterNav from "../components/WaiterNav";
import TabMenu from '../components/tabMenu';
import MenuListSummary from '../components/SummaryMenu'




const Waiter = () => {
const [itemMenu, setItemMenu] = useState([]);
  return (
    <>
      <WaiterNav/>
      <input type="text" placeholder="Nombre del cliente" className="inputName" ></input>
      <input type="text" placeholder="N° de mesa" className="inputTables"></input>
      <section className='menuSection'>
        <MenuListSummary itemMenu={itemMenu} setItemMenu={ setItemMenu}/>
      </section>
      <TabMenu itemMenu={itemMenu} setItemMenu={ setItemMenu}/>
      
    </>
  );
};

export default Waiter;
