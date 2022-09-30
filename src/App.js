import React, { useState } from 'react';
import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import MapFunction from './useState/MapFucntion';
const App = () => {
  const [isShowBasic] = useState(false);
  return (
    <div>
      {!isShowBasic ? (
        <>
          <Header />
          <Content />
        </>
      ) : (
        <>
          {/* <UseStateBasic /> */}
          <MapFunction />
        </>
      )}
      {/* <Basic todo={[{ id: 1 }, { id: 2 }]} /> */}
    </div>
  );
};

export default App;
