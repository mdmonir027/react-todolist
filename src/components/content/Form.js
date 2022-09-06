import React from 'react';
import { FaAddressBook, FaPlus } from 'react-icons/fa';
import './Form.css';
const Form = () => {
  return (
    <form className='form'>
      <div>
        <div className='form__wrapper'>
          <FaAddressBook className='form__left' />

          <input
            type='text'
            name=''
            id=''
            className='form__center'
            placeholder='Type your todo'
          />

          <FaPlus className='form__right' />
        </div>
      </div>
    </form>
  );
};

export default Form;
