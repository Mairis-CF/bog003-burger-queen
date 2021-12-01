import React from 'react';
import '../CSS/menu.css';
import { FaTrashAlt } from 'react-icons/fa';



const ItemOrder = ({ orderTitle, orderPrice, orderId }) => {
    return (
        <div className='container-item-order'>
            <li>
                <p>{orderTitle}</p>
                <p>{orderPrice}</p>
            </li>

            <div className="trash-btn">
                <button id={orderId}>
                    <i><FaTrashAlt /></i>
                </button>
            </div>
        </div>
    )
}


export default ItemOrder;
