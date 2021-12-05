import React from 'react';
import '../CSS/menu.css';
import { FaTrashAlt } from 'react-icons/fa';
import QuantifyOrder from "../components/QuantifyOrder";



const ItemOrder = ({ buttonAction, price, title }) => {

    return (
        <tr>
            <td>
                <QuantifyOrder />
            </td>
            <td colSpan="4"> {title}</td>
            <td colSpan="1"> ${price}</td>
            <td colSpan="1">
                <button onClick={buttonAction} className="trash-btn">
                    <i><FaTrashAlt /></i>
                </button>
            </td>

        </tr>
    )
}


export default ItemOrder;
