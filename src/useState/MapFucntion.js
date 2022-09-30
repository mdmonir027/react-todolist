import React from 'react';

const MapFunction = () => {
  const id = 3;
  const items = [
    {
      id: 1,
      text: '1',
    },
    {
      id: 2,
      text: '2',
    },
    {
      id: 3,
      text: '3',
    },
  ];
  const clickHandler = () => {
    const changedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: true };
      }
      return item;
    });
    console.log(changedItems);
  };
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default MapFunction;
