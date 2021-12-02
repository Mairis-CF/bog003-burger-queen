import '../index.css'
import React from "react";
import WaiterNav from "../components/WaiterNav";
import TabMenu from '../components/tabMenu';
import MenuListSummary from '../components/SummaryMenu'




const Waiter = () => {

  return (
    <>
      <WaiterNav/>
      <input type="text" placeholder="Nombre del cliente" className="inputName" ></input>
      <input type="text" placeholder="N° de mesa" className="inputTables"></input>
      <section className='menuSection'>
        <MenuListSummary />
      </section>
      <TabMenu/>
      
    </>
  );
};

export default Waiter;
