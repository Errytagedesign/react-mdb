import React from 'react';


// components

import Header from './components/header';

import Home from './components/Home';


// styles

import {GlobalStyle} from './GlobalStyle';

function App() {
  return (
    <div className="App">

      <Header />

      <Home />      

      <GlobalStyle />

    </div>
  );
}

export default App;
