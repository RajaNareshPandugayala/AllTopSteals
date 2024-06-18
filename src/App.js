// import logo from './logo.svg';
// import React, { useState } from 'react';
// import React, { useEffect } from 'react';
import './App.css';
// import { PageNumber } from './HomePage';
import Header, { Footer, TitelAndSearchBar, PageNumber } from './HomePage';
import ProdectsList from './HomePageProdectsList';



function App() {
  return (
    <div className="App">
      <Header />
      <TitelAndSearchBar />
      <ProdectsList />
      <PageNumber />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Footer />
    </div>
  );
}

export default App;
