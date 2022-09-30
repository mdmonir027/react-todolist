import React, { useState } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
const App = () => {
  const [isShowBasic] = useState(false);
  return (
    <div>
      {!isShowBasic ? (
        <>
          <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Header />
          <Content />
        </>
      ) : (
        <>
          {/* <UseStateBasic /> */}
          {/* <MapFunction /> */}
          {/* <Toastify /> */}
        </>
      )}
      {/* <Basic todo={[{ id: 1 }, { id: 2 }]} /> */}
    </div>
  );
};

export default App;
