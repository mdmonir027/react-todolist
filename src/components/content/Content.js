import React from 'react';
import './Content.css';
import Form from './Form';
import List from './List';

const Content = () => {
  return (
    <div className='content'>
      <div className='container'>
        <div className='content__wrapper'>
          <Form />
          <List />
        </div>
      </div>
    </div>
  );
};

export default Content;
