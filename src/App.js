import React from 'react';
import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
const App = () => {
  return (
    <div>
      <Header />
      <Content />
      {/* <Basic todo={[{ id: 1 }, { id: 2 }]} /> */}
    </div>
  );
};

export default App;
