import React, { useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import EditInput from './EditInput';
import './Item.css';
const Item = ({ text, id, todos, setTodos }) => {
  const [isShow, setIsShow] = useState(false);

  const deleteHandler = () => {
    const filteredTodos = todos.filter((todo) => {
      if (todo.id === id) return false;
      return true;
    });
    setTodos(filteredTodos);
  };

  const showEditFormHandler = () => {
    setIsShow(true);
  };

  return (
    <div className='item'>
      {isShow === true ? (
        <EditInput
          text={text}
          //   setIsShow={setIsShow}
          setTodos={setTodos}
          todos={todos}
          id={id}
        />
      ) : (
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
              <FaPen
                className='item_actionIcon'
                onClick={showEditFormHandler}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ternery operator

export default Item;
