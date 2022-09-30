import React, { useState } from 'react';
import { FaAddressBook, FaPlus } from 'react-icons/fa';
import './Form.css';
const Form = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const clickHandler = (e) => {
    e.preventDefault();
    if (!text) {
      setError('Text field can not be empty!');
    } else {
      addTodo(text);
      setText('');
      setError('');
    }
  };

  return (
    <form onSubmit={clickHandler}>
      <div className='form'>
        <div className='form__wrapper'>
          <FaAddressBook className='form__left' />

          <input
            type='text'
            className='form__center'
            placeholder='Type your todo'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <FaPlus className='form__right' onClick={clickHandler} />
        </div>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Form;
