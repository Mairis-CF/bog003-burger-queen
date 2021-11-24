import '../index.css'
import React from 'react';
import { Link } from "react-router-dom"
import Logo from "../media/Logo.png";
import chef from '../media/traje-de-chef.png'
import Modals from '../components/Modals';

const chefs =() => {
  return (
    <div>
      <img src={Logo} alt="Pizza planet" className="miniLogo" />
      <nav className="navWaiter">
        <Link to="/" className="chef">
          <img src={chef} className="iconChef" alt="Mesero" />
          Inicio
        </Link>
      </nav>
      <Modals/>
    </div>
  );
}
export default chefs;