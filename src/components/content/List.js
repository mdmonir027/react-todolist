import React from 'react';
import Item from './Item';
import './List.css';

const List = ({ todos }) => {
  return (
    <div className='list'>
      {todos.map((todo) => (
        <Item text={todo.text} key={todo.id} isCompleted={todo.isCompleted} />
      ))}
    </div>
  );
};

export default List;
