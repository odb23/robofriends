import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import 'tachyons';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { searchRobots } from './reducers';
import {createLogger} from 'redux-logger';


const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}>
   <App /> 
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();


// TODO: download sega font from cufon fonts and add the .woff file to project