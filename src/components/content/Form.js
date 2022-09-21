import React, { useState } from 'react';
import { FaAddressBook, FaPlus } from 'react-icons/fa';
import { v4 as uuid4 } from 'uuid';
import './Form.css';
const Form = ({ setTodos, todos }) => {
  const [todoText, setTodoText] = useState('');

  const changeHandler = (e) => {
    setTodoText(e.target.value);
  };

  const clickHandler = () => {
    console.log(todoText);
    const todoObject = {
      id: uuid4(),
      text: todoText,
      isCompleted: false,
    };
    setTodos([...todos, todoObject]);
    setTodoText('');
  };

  return (
    <div className='form'>
      <div>
        <div className='form__wrapper'>
          <FaAddressBook className='form__left' />

          <input
            type='text'
            className='form__center'
            placeholder='Type your todo'
            value={todoText}
            onChange={changeHandler}
          />

          <FaPlus className='form__right' onClick={clickHandler} />
        </div>
      </div>
    </div>
  );
};

export default Form;
