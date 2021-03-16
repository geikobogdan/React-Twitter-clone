import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import{BrowserRouter as Router} from 'react-router-dom'

import App from './App';
import  theme  from './theme';
import { store } from './store/store';


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Router>
      <Provider store={store}>
    <App />
    </Provider>
    </Router>
    </ThemeProvider>,
  document.getElementById('root')
);


