import React, { useState } from 'react';
import { FaCheckCircle, FaPen, FaRegCircle, FaTrash } from 'react-icons/fa';
import EditInput from './EditInput';
import './Item.css';
const Item = (props) => {
  const {
    text,
    id,
    isCompleted,
    deleteHandler,
    completeHandler,
    updateHandler,
  } = props;
  const [isShow, setIsShow] = useState(false);

  return (
    <div className='item'>
      {isShow === true ? (
        <EditInput
          text={text}
          setIsShow={setIsShow}
          id={id}
          updateHandler={updateHandler}
        />
      ) : (
        <div className='item__wrapper'>
          <div className='item__textWrapper'>
            <div onClick={() => completeHandler(id)}>
              {isCompleted ? <FaCheckCircle /> : <FaRegCircle />}
            </div>
            <p
              className='item__text'
              style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
            >
              {text}
            </p>
          </div>
          <div className='item__action'>
            <div className='item__actionIcons'>
              <FaTrash
                className='item_actionIcon'
                onClick={() => deleteHandler(id)}
              />
              <FaPen
                className='item_actionIcon'
                onClick={() => setIsShow(true)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
