import React from 'react';
import Form from './Form';
import Item from './Item';

const Basic = ({ todo }) => {
  let isShowForm = false;

  return (
    <div>
      <div>{isShowForm ? <Form /> : <Item />}</div>
    </div>
  );
};

/*

conditional rendering => react concept
ternary operator => javascript operator (if else shortcut)

*/

export default Basic;
