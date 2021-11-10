import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import promiseMiddleware from 'redux-promise';
// import ReduxThunk from 'redux-thunk';
// import Reducer from './store/reducers';

// const createStoreWithMiddleware = applyMiddleware(
//   promiseMiddleware,
//   ReduxThunk
// )(createStore);

ReactDOM.render(
  // <Provider
  //   store={createStoreWithMiddleware(
  //     Reducer,
  //     window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
  //   )}
  // >
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  //</Provider>,
  document.getElementById('root')
);
