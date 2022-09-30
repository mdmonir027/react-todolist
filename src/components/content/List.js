import React from 'react';
import Item from './Item';
import './List.css';

const List = (props) => {
  const { todos, deleteHandler, completeHandler, updateHandler } = props;
  return (
    <div className='list'>
      {todos.length === 0 && 'No todo found'}
      {todos.map((todo) => (
        <Item
          text={todo.text}
          key={todo.id}
          id={todo.id}
          isCompleted={todo.isCompleted}
          deleteHandler={deleteHandler}
          completeHandler={completeHandler}
          updateHandler={updateHandler}
        />
      ))}
    </div>
  );
};

export default List;
