import React from 'react';
import { FaPen, FaRegCircle, FaTrash } from 'react-icons/fa';
import './Item.css';
const Item = ({ text }) => {
  return (
    <div className='item'>
      <div className='item__wrapper'>
        <div className='item__textWrapper'>
          <div>
            <FaRegCircle />
          </div>
          <p className='item__text'>{text}</p>
        </div>
        <div className='item__action'>
          <div className='item__actionIcons'>
            <FaTrash className='item_actionIcon' />
            <FaPen className='item_actionIcon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
