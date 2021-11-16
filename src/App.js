import './App.css';
import React, {useEffect} from 'react';
import GlobalStyle from './components/shared/style/GlobalStyle';
import RootRoute from './routes';
import axios from 'axios';
import {SERVER} from './config'

function App() {

  return (
    <>
      <GlobalStyle />
      <RootRoute />
    </>
  );
}

export default App;
