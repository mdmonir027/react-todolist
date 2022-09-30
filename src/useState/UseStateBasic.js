import React, { useState } from 'react';

const UseStateBasic = () => {
  const [state, setState] = useState(false);

  const clickHandler = () => {
    setState((prevState) => !prevState);
  };
  return (
    <div>
      <div>{state ? 'state is true' : 'state is false'}</div>
      <button onClick={clickHandler}>Change State</button>
    </div>
  );
};

export default UseStateBasic;
