import React from 'react';
import Item from './Item';
import './List.css';
const List = () => {
  return (
    <div className='list'>
      <Item text={'Learn Modern ES6+ JavaScript'} />
      <Item text={'Learn Redux Basics'} />
      <Item text={'Learn Redux Basics'} />
      <Item text={'Learn Redux fundamentals test'} />
    </div>
  );
};

export default List;
