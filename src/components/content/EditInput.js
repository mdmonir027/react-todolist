import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const EditInput = ({ text, setIsShow, id, updateHandler }) => {
  const [editValue, setEditValue] = useState(text);
  const [error, setError] = useState('');
  const updateHandle = () => {
    if (editValue) {
      setIsShow(false);
      updateHandler(editValue, id);
      setError('');
    } else {
      setError('Text field can not be empty!');
    }
  };

  return (
    <div className='edit__input'>
      <div className='item__wrapper'>
        <div className='item__textWrapper' style={{ flex: 1 }}>
          <div style={{ flex: 1 }}>
            <input
              type='text'
              name=''
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              id=''
              style={{ width: '100%' }}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
        <div className='item__action'>
          <div className='item__actionIcons'>
            <FaCheck className='item_actionIcon' onClick={updateHandle} />
            <FaTimes
              className='item_actionIcon'
              onClick={() => setIsShow(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditInput;
