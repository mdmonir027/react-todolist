import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const EditInput = ({ text, setIsShow, todos, setTodos, id }) => {
  const closeHandler = () => {
    setIsShow(false);
  };
  const [editValue, setEditValue] = useState(text);

  const updateHandler = () => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: editValue,
        };
      }
      return todo;
    });
    setTodos(updateTodos);
    setIsShow(false);
  };

  return (
    <div className='edit__input'>
      <div className='item__wrapper'>
        <div className='item__textWrapper' style={{ flex: 1 }}>
          <input
            type='text'
            name=''
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            id=''
            style={{ width: '100%' }}
          />
        </div>
        <div className='item__action'>
          <div className='item__actionIcons'>
            <FaCheck className='item_actionIcon' onClick={updateHandler} />
            <FaTimes className='item_actionIcon' onClick={closeHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditInput;
