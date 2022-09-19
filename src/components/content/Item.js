import React from 'react';
import { FaTrash } from 'react-icons/fa';
import './Item.css';
const Item = ({ text, id, todos, setTodos }) => {
  const deleteHandler = () => {
    const filteredTodos = todos.filter((todo) => {
      if (todo.id === id) return false;
      return true;
    });
    setTodos(filteredTodos);
  };
  return (
    <div className='item'>
      <div className='item__wrapper'>
        <div className='item__textWrapper'>
          {/* <div>
            <FaRegCircle />
          </div> */}
          <p className='item__text'>{text}</p>
        </div>
        <div className='item__action'>
          <div className='item__actionIcons'>
            <FaTrash className='item_actionIcon' onClick={deleteHandler} />
            {/* <FaPen className='item_actionIcon' /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
