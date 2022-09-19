import React, { useState } from 'react';
import './Content.css';
import Form from './Form';
import List from './List';

const Content = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Learn Modern ES6+ JavaScript',
      isCompleted: false,
    },
  ]);

  return (
    <div className='content'>
      <div className='container'>
        <div className='content__wrapper'>
          <Form todos={todos} setTodos={setTodos} />
          <List todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
};

export default Content;
