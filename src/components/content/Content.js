import React, { useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import './Content.css';
import Form from './Form';
import List from './List';

const Content = () => {
  const [todos, setTodos] = useState([]);

  const clearCompleteHandler = () => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => !todo.isCompleted);
    });
  };

  const addTodo = (text) => {
    const todoObject = {
      id: uuid4(),
      text: text,
      isCompleted: false,
    };
    setTodos((prevTodos) => [...prevTodos, todoObject]);
  };

  const deleteHandler = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const completeHandler = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      });
    });
  };

  const updateHandler = (editValue, id) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          text: editValue,
        };
      });
    });
  };

  return (
    <div className='content'>
      <div className='container'>
        <div className='content__wrapper'>
          <Form addTodo={addTodo} />
          <div className='' style={{ margin: '10px 0' }}>
            <button onClick={clearCompleteHandler}>Clear Completed</button>
            <button onClick={() => setTodos([])}>Clear All</button>
          </div>
          <List
            deleteHandler={deleteHandler}
            completeHandler={completeHandler}
            updateHandler={updateHandler}
            todos={todos}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
