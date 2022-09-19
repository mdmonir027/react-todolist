import React from 'react';
import Item from './Item';
import './List.css';

const List = ({ todos, setTodos }) => {
  return (
    <div className='list'>
      {todos.map((todo) => (
        <Item
          text={todo.text}
          key={todo.id}
          id={todo.id}
          isCompleted={todo.isCompleted}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default List;
